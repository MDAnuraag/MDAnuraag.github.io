/* Under Constraints: page index and typed reveal, ported from the market brief.
   No dependencies. Without JavaScript the page is simply all there. */
(function () {
  "use strict";

  var doc = document;
  function $(s, r) { return (r || doc).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || doc).querySelectorAll(s)); }
  function sleep(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var index = $("#index");
  var body = $(".doc-body");
  var h1 = $("#title");
  var lede = $(".doc-head .lede");

  /* ---------- index: one entry per h2 ---------- */

  function slug(t) { return t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""); }

  var heads = body ? $$("h2", body) : [];
  var links = [];

  function buildIndex() {
    if (!index || heads.length < 2) return;
    var used = {};
    heads.forEach(function (h) {
      if (!h.id) {
        var base = slug(h.textContent) || "section", id = base, n = 2;
        while (used[id] || doc.getElementById(id)) id = base + "-" + n++;
        h.id = id;
      }
      used[h.id] = true;
      var a = doc.createElement("a");
      a.href = "#" + h.id;
      a.textContent = h.textContent;
      index.appendChild(a);
      links.push({ el: h, a: a });
    });
    index.hidden = false;
  }

  var current = null, locked = false, queued = false;
  function setCurrent(a) {
    if (current === a) return;
    if (current) current.classList.remove("on");
    current = a;
    if (a) a.classList.add("on");
  }
  function update() {
    queued = false;
    if (locked || !links.length) return;
    var atEnd = window.innerHeight + window.pageYOffset >= doc.documentElement.scrollHeight - 2;
    var pick = null, best = -Infinity;
    links.forEach(function (l) {
      var top = l.el.getBoundingClientRect().top;
      if (top <= 140 && top > best + 2) { pick = l.a; best = top; }
    });
    if (atEnd) pick = links[links.length - 1].a;
    setCurrent(pick);
  }
  function onScroll() { if (!queued) { queued = true; requestAnimationFrame(update); } }

  function wireIndex() {
    if (!links.length) return;
    index.addEventListener("click", function (e) {
      var a = e.target.closest ? e.target.closest("a") : null;
      if (!a) return;
      locked = true;
      setCurrent(a);
    });
    ["wheel", "touchmove", "keydown"].forEach(function (ev) {
      window.addEventListener(ev, function () { if (locked) { locked = false; onScroll(); } }, { passive: true });
    });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
  }

  /* ---------- typing engine ---------- */

  var cursor = doc.createElement("span");
  cursor.className = "cursor";
  cursor.setAttribute("aria-hidden", "true");

  var skipped = false, running = false, skipBtn = null;

  function typed(host, text, perChar) {
    host.textContent = "";
    host.appendChild(cursor);
    var i = 0, n = text.length;
    var step = n > 200 ? 3 : n > 80 ? 2 : 1;
    return new Promise(function (resolve) {
      (function tick() {
        if (skipped) { host.textContent = text; resolve(); return; }
        i = Math.min(n, i + step);
        host.textContent = text.slice(0, i);
        host.appendChild(cursor);
        if (i >= n) { resolve(); return; }
        setTimeout(tick, perChar);
      })();
    });
  }

  // reveal units: the top-level children of .doc-body, grouped so each h2 (or a block
  // holding h2s) starts a new chunk. Index entries appear with their chunk.
  function chunks() {
    var out = [], cur = null;
    if (!body) return out;
    $$(":scope > *", body).forEach(function (node) {
      var hs = node.tagName === "H2" ? [node] : $$("h2", node);
      if (hs.length || !cur) { cur = { nodes: [], heads: [] }; out.push(cur); }
      cur.nodes.push(node);
      hs.forEach(function (h) { cur.heads.push(h); });
    });
    return out;
  }

  function linkFor(h) {
    for (var i = 0; i < links.length; i++) if (links[i].el === h) return links[i].a;
    return null;
  }

  function showAll(cs) {
    cs.forEach(function (c) {
      c.nodes.forEach(function (n) { n.classList.remove("pre"); });
      c.heads.forEach(function (h) { var a = linkFor(h); if (a) a.classList.remove("pre"); });
    });
    $$(".pre").forEach(function (n) { n.classList.remove("pre"); });
  }

  function restCursor() {
    var t = $(".t", h1);
    if (t) { t.appendChild(cursor); cursor.classList.add("blink"); }
  }

  function done(cs) {
    skipped = true;
    showAll(cs);
    if (h1 && h1.dataset.full) { $(".t", h1).textContent = h1.dataset.full; }
    if (lede && lede.dataset.full) lede.textContent = lede.dataset.full;
    restCursor();
    if (skipBtn) skipBtn.hidden = true;
    running = false;
  }

  async function run() {
    var cs = chunks();
    var t = $(".t", h1);
    var htext = t.textContent, ltext = lede ? lede.textContent : "";
    h1.dataset.full = htext;
    if (lede) lede.dataset.full = ltext;

    // hold the space so nothing shifts while typing
    [[t, htext], [lede, ltext]].forEach(function (p) {
      if (p[0]) { p[0].parentNode.style.minHeight = p[0].parentNode.offsetHeight + "px"; }
    });
    cs.forEach(function (c) { c.nodes.forEach(function (n) { n.classList.add("pre"); }); });
    links.forEach(function (l) { l.a.classList.add("pre"); });
    t.textContent = ""; if (lede) lede.textContent = "";

    skipBtn = doc.createElement("button");
    skipBtn.className = "skip";
    skipBtn.type = "button";
    skipBtn.textContent = "skip typing";
    skipBtn.addEventListener("click", function () { done(cs); });
    doc.body.appendChild(skipBtn);
    running = true;

    doc.addEventListener("keydown", function (e) {
      if (running && (e.key === "Escape" || e.key === "Enter")) done(cs);
    });
    if (index) index.addEventListener("click", function () { if (running) done(cs); });

    await typed(t, htext, 26);
    if (skipped) return;
    if (lede) { await sleep(90); if (skipped) return; await typed(lede, ltext, 12); }
    if (skipped) return;
    cursor.parentNode && cursor.parentNode.removeChild(cursor);

    for (var i = 0; i < cs.length; i++) {
      if (skipped) return;
      await sleep(140);
      if (skipped) return;
      cs[i].nodes.forEach(function (n) { n.classList.remove("pre"); });
      cs[i].heads.forEach(function (h) { var a = linkFor(h); if (a) a.classList.remove("pre"); });
    }
    done(cs);
  }

  function init() {
    buildIndex();
    wireIndex();
    if (!h1 || !$(".t", h1)) return;

    var key = "typed:" + location.pathname;
    var seen = false;
    try { seen = !!sessionStorage.getItem(key); sessionStorage.setItem(key, "1"); } catch (e) {}

    if (reduce || seen || location.hash) { restCursor(); return; }
    run();
  }

  if (doc.readyState === "loading") doc.addEventListener("DOMContentLoaded", init);
  else init();
})();
