/* Under Constraints: page index and typed reveal. No dependencies. */
(function () {
  "use strict";

  /* ---------- on-this-page index ---------- */

  function slug(text) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function buildToc() {
    var toc = document.querySelector(".rail-toc");
    var body = document.querySelector(".doc-body");
    if (!toc || !body) return;

    var heads = Array.prototype.slice.call(body.querySelectorAll("h2"));
    if (heads.length < 2) return;

    var list = toc.querySelector("ol");
    var used = {};
    var links = [];

    heads.forEach(function (h) {
      if (!h.id) {
        var base = slug(h.textContent) || "section";
        var id = base;
        var n = 2;
        while (used[id] || document.getElementById(id)) {
          id = base + "-" + n++;
        }
        h.id = id;
      }
      used[h.id] = true;

      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = "#" + h.id;
      a.textContent = h.textContent;
      li.appendChild(a);
      list.appendChild(li);
      links.push({ el: h, link: a });
    });

    toc.classList.add("is-ready");

    var current = null;
    var queued = false;

    function setCurrent(a) {
      if (current === a) return;
      if (current) current.classList.remove("is-current");
      current = a;
      if (a) a.classList.add("is-current");
    }

    var locked = false;

    // the section whose heading most recently passed the upper third of the
    // viewport (side-by-side blocks tie, so the first one wins); at the very
    // bottom of a page, the last section, unless an index link was just used
    function update() {
      queued = false;
      if (locked) return;
      var line = window.innerHeight * 0.33;
      var atEnd =
        window.innerHeight + window.pageYOffset >=
        document.documentElement.scrollHeight - 2;
      var pick = null;
      var bestTop = -Infinity;
      for (var i = 0; i < links.length; i++) {
        var top = links[i].el.getBoundingClientRect().top;
        if (top <= line && top > bestTop + 2) {
          pick = links[i].link;
          bestTop = top;
        }
      }
      if (atEnd && links.length) pick = links[links.length - 1].link;
      setCurrent(pick);
    }

    function onScroll() {
      if (queued) return;
      queued = true;
      window.requestAnimationFrame(update);
    }

    function unlock() {
      locked = false;
      onScroll();
    }

    list.addEventListener("click", function (e) {
      var a = e.target.closest ? e.target.closest("a") : null;
      if (!a) return;
      locked = true;
      setCurrent(a);
    });
    ["wheel", "touchmove", "keydown"].forEach(function (ev) {
      window.addEventListener(ev, unlock, { passive: true });
    });

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
  }

  /* ---------- typed reveal ---------- */

  function typeReveal() {
    var reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var targets = Array.prototype.slice.call(
      document.querySelectorAll("[data-type]")
    );
    if (!targets.length || reduce) return;

    var key = "typed:" + location.pathname;
    try {
      if (sessionStorage.getItem(key)) return;
      sessionStorage.setItem(key, "1");
    } catch (e) {}

    // collect text nodes first, then replace, so the walk is not disturbed
    var nodes = [];
    function walk(n) {
      for (var c = n.firstChild; c; c = c.nextSibling) {
        if (c.nodeType === 3) {
          if (c.nodeValue.trim()) nodes.push(c);
        } else if (
          c.nodeType === 1 &&
          !/^(SCRIPT|STYLE)$/.test(c.tagName) &&
          !c.classList.contains("katex")
        ) {
          walk(c);
        }
      }
    }
    targets.forEach(walk);
    if (!nodes.length) return;

    var jobs = nodes.map(function (node) {
      var full = node.nodeValue;
      var typed = document.createElement("span");
      var ghost = document.createElement("span");
      ghost.className = "t-ghost";
      ghost.textContent = full;
      var wrap = document.createDocumentFragment();
      wrap.appendChild(typed);
      wrap.appendChild(ghost);
      node.parentNode.replaceChild(wrap, node);
      return { node: node, full: full, typed: typed, ghost: ghost, done: 0 };
    });

    var total = jobs.reduce(function (s, j) {
      return s + j.full.length;
    }, 0);
    var duration = Math.min(3200, total * 20);
    var caret = document.createElement("span");
    caret.className = "t-caret";
    caret.setAttribute("aria-hidden", "true");

    var start = null;
    var finished = false;

    function finish() {
      if (finished) return;
      finished = true;
      if (caret.parentNode) caret.parentNode.removeChild(caret);
      jobs.forEach(function (j) {
        var parent = j.typed.parentNode;
        if (!parent) return;
        parent.insertBefore(j.node, j.typed);
        parent.removeChild(j.typed);
        parent.removeChild(j.ghost);
      });
      window.removeEventListener("keydown", finish);
      window.removeEventListener("pointerdown", finish);
    }

    function frame(ts) {
      if (finished) return;
      if (start === null) start = ts;
      var shown = Math.min(total, Math.floor(((ts - start) / duration) * total));
      var left = shown;
      var active = null;
      for (var i = 0; i < jobs.length; i++) {
        var j = jobs[i];
        var n = Math.max(0, Math.min(j.full.length, left));
        left -= j.full.length;
        if (n !== j.done) {
          j.typed.textContent = j.full.slice(0, n);
          j.ghost.textContent = j.full.slice(n);
          j.done = n;
        }
        if (n > 0 && n < j.full.length && !active) active = j;
      }
      if (active) active.typed.parentNode.insertBefore(caret, active.ghost);
      if (shown >= total) {
        finish();
        return;
      }
      window.requestAnimationFrame(frame);
    }

    window.addEventListener("keydown", finish);
    window.addEventListener("pointerdown", finish);
    window.requestAnimationFrame(frame);
  }

  function init() {
    buildToc();
    typeReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
