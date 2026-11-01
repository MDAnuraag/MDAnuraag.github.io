/* Under Constraints: page index and theme toggle. No dependencies. */
(function () {
  "use strict";
  var doc = document;
  function $$(s, r) { return Array.prototype.slice.call((r || doc).querySelectorAll(s)); }

  /* ---------- theme ---------- */
  var root = doc.documentElement;
  var btn = doc.querySelector(".theme");
  var mq = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  function effective() {
    var t = root.getAttribute("data-theme");
    return t || (mq && mq.matches ? "dark" : "light");
  }
  function label() { if (btn) btn.textContent = effective() === "dark" ? "light" : "dark"; }
  if (btn) {
    btn.hidden = false;
    label();
    btn.addEventListener("click", function () {
      var next = effective() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      label();
      // figures read their colours once, so redraw them
      if (doc.querySelector("canvas")) location.reload();
    });
    if (mq && mq.addEventListener) mq.addEventListener("change", label);
  }

  /* ---------- index: one entry per h2 ---------- */
  var index = doc.getElementById("index");
  var body = doc.querySelector(".doc-body");
  var heads = body ? $$("h2", body) : [];
  if (!index || heads.length < 2) return;

  function slug(t) { return t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, ""); }
  var used = {}, links = [];
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

  var current = null, locked = false, queued = false;
  function setCurrent(a) {
    if (current === a) return;
    if (current) current.classList.remove("on");
    current = a;
    if (a) a.classList.add("on");
  }
  function update() {
    queued = false;
    if (locked) return;
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
  index.addEventListener("click", function (e) {
    var a = e.target.closest ? e.target.closest("a") : null;
    if (a) { locked = true; setCurrent(a); }
  });
  ["wheel", "touchmove", "keydown"].forEach(function (ev) {
    window.addEventListener(ev, function () { if (locked) { locked = false; onScroll(); } }, { passive: true });
  });
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  update();
})();
