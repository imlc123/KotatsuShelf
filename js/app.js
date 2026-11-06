(function () {
  "use strict";

  var BOOKS = window.WGL_BOOKS;
  var QUESTIONS = window.WGL_QUESTIONS;
  var ARCHETYPES = window.WGL_ARCHETYPES;
  var STORAGE_KEY = "wgl-answers-v1";

  var TAG_LABELS = {
    dark: "pitch black", humor: "deadpan funny", body: "body horror", surreal: "surreal",
    horror: "horror", online: "terminally online", literary: "literary prose",
    translated: "in translation", sex: "frank about sex", isolation: "loner heroine",
    work: "job weirdness", academia: "campus chaos", food: "hunger & appetite",
    art: "art world", toxic: "toxic friendship", unhinged: "unhinged narrator",
    love: "obsessive love", mother: "mothers & daughters", queer: "queer",
    mental: "sad girl", short: "short read", stories: "short stories",
    classic: "a classic", recent: "new release"
  };

  // ---------- state ----------
  var answers = load() || [];
  var current = 0;

  // ---------- elements ----------
  var $ = function (id) { return document.getElementById(id); };
  var screens = { intro: $("intro"), quiz: $("quiz"), results: $("results") };
  var qText = $("q-text"), qCount = $("q-count"), answersEl = $("answers");
  var progress = document.querySelector(".progress");
  var progressBar = document.querySelector(".progress-bar");
  var backBtn = $("back");

  // ---------- storage (best effort) ----------
  function load() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      var parsed = raw ? JSON.parse(raw) : null;
      return Array.isArray(parsed) ? parsed : null;
    } catch (e) { return null; }
  }
  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(answers)); } catch (e) { /* ignore */ }
  }
  function clear() {
    try { localStorage.removeItem(STORAGE_KEY); } catch (e) { /* ignore */ }
  }

  // ---------- screens ----------
  function show(name) {
    Object.keys(screens).forEach(function (k) {
      screens[k].classList.toggle("is-active", k === name);
    });
    window.scrollTo(0, 0);
  }

  function renderQuestion() {
    var q = QUESTIONS[current];
    var n = current + 1;
    qCount.textContent = pad(n) + " / " + QUESTIONS.length;
    qText.textContent = q.q;
    progressBar.style.width = (n / QUESTIONS.length * 100) + "%";
    progress.setAttribute("aria-valuenow", n);
    backBtn.disabled = current === 0;

    answersEl.innerHTML = "";
    answersEl.classList.remove("fade");
    void answersEl.offsetWidth; // restart animation
    answersEl.classList.add("fade");

    q.a.forEach(function (opt, i) {
      var li = document.createElement("li");
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "answer" + (answers[current] === i ? " is-picked" : "");
      btn.innerHTML = '<span class="key">' + String.fromCharCode(65 + i) + '</span><span></span>';
      btn.lastChild.textContent = opt.t;
      btn.addEventListener("click", function () { choose(i, btn); });
      li.appendChild(btn);
      answersEl.appendChild(li);
    });
    qText.focus({ preventScroll: true });
  }

  var locked = false;
  function choose(i, btn) {
    if (locked) return;
    locked = true;
    answers[current] = i;
    save();
    if (btn) btn.classList.add("is-picked");
    setTimeout(function () {
      locked = false;
      if (current < QUESTIONS.length - 1) {
        current++;
        renderQuestion();
      } else {
        renderResults();
        show("results");
      }
    }, 220);
  }

  // ---------- matching ----------
  function bookVector(b) {
    var v = {};
    Object.keys(b.tags).forEach(function (k) { v[k] = b.tags[k]; });
    if (b.year < 1990) v.classic = 3;
    if (b.year >= 2020) v.recent = 2;
    return v;
  }

  function profile() {
    var p = {};
    answers.forEach(function (ai, qi) {
      var opt = QUESTIONS[qi] && QUESTIONS[qi].a[ai];
      if (!opt) return;
      Object.keys(opt.w).forEach(function (k) { p[k] = (p[k] || 0) + opt.w[k]; });
    });
    return p;
  }

  function norm(v) {
    var s = 0;
    Object.keys(v).forEach(function (k) { s += v[k] * v[k]; });
    return Math.sqrt(s) || 1;
  }

  function score(p, pNorm, b) {
    var v = bookVector(b);
    var dot = 0, contrib = [];
    Object.keys(v).forEach(function (k) {
      var c = (p[k] || 0) * v[k];
      dot += c;
      if (c > 0) contrib.push([k, c]);
    });
    contrib.sort(function (a, b) { return b[1] - a[1]; });
    return { book: b, sim: dot / (pNorm * norm(v)), why: contrib.slice(0, 3).map(function (c) { return c[0]; }) };
  }

  function recommend() {
    var p = profile();
    var pNorm = norm(p);
    var ranked = BOOKS.map(function (b) { return score(p, pNorm, b); })
      .sort(function (a, b) { return b.sim - a.sim; });

    // One book per author keeps the list varied.
    var seen = {}, picks = [];
    for (var i = 0; i < ranked.length && picks.length < 5; i++) {
      var r = ranked[i];
      if (seen[r.book.author]) continue;
      // Always give 3; add a 4th and 5th only if they're close to the top match.
      if (picks.length >= 3 && r.sim < picks[0].sim * 0.85) break;
      seen[r.book.author] = true;
      picks.push(r);
    }
    return { picks: picks, profile: p };
  }

  // ---------- results ----------
  function renderResults() {
    var out = recommend();
    var top = Object.keys(out.profile)
      .filter(function (k) { return out.profile[k] > 0; })
      .sort(function (a, b) { return out.profile[b] - out.profile[a]; });

    var arch = ARCHETYPES[top[0]] || ["The Weird Girl", "You contain multitudes. Here's what to read next."];
    $("results-title").textContent = arch[0];
    $("archetype-desc").textContent = arch[1];

    var prof = $("profile");
    prof.innerHTML = "";
    top.slice(0, 5).forEach(function (k) {
      var s = document.createElement("span");
      s.className = "chip";
      s.textContent = TAG_LABELS[k] || k;
      prof.appendChild(s);
    });

    var list = $("recs");
    list.innerHTML = "";
    out.picks.forEach(function (r, i) {
      var b = r.book;
      var li = document.createElement("li");
      li.className = "rec";
      li.style.animationDelay = (i * 0.09) + "s";

      // Raw similarity tops out around 0.75 with this many tags; stretch it
      // onto a friendlier 50–99 scale for display.
      var pct = Math.round(Math.max(50, Math.min(99, 60 + (r.sim - 0.3) / 0.45 * 39)));
      var whyText = r.why.map(function (k) { return TAG_LABELS[k] || k; }).join(" · ");
      var q = encodeURIComponent(b.title + " " + b.author);

      li.innerHTML =
        '<span class="match"></span>' +
        '<h3 class="rec-title"></h3>' +
        '<p class="rec-by"></p>' +
        '<p class="rec-blurb"></p>' +
        (whyText ? '<p class="rec-why">Why you: <strong></strong></p>' : "") +
        (b.cw ? '<p class="rec-cw"></p>' : "") +
        '<div class="rec-links">' +
          '<a target="_blank" rel="noopener" href="https://bookshop.org/search?keywords=' + q + '">Bookshop</a>' +
          '<a target="_blank" rel="noopener" href="https://search.worldcat.org/search?q=' + q + '">Find at a library</a>' +
          '<a target="_blank" rel="noopener" href="https://www.goodreads.com/search?q=' + q + '">Goodreads</a>' +
        '</div>';

      li.querySelector(".match").textContent = pct + "% match";
      li.querySelector(".rec-title").textContent = b.title;
      li.querySelector(".rec-by").textContent = b.author + " — " + b.year;
      li.querySelector(".rec-blurb").textContent = b.blurb;
      if (whyText) li.querySelector(".rec-why strong").textContent = whyText;
      if (b.cw) li.querySelector(".rec-cw").textContent = "Heads up: " + b.cw;
      list.appendChild(li);
    });

    $("copy").onclick = function () { copyList(arch[0], out.picks); };
    $("copy-status").textContent = "";
  }

  function copyList(archetype, picks) {
    var text = "My Weird Girl Lit reading (" + archetype + "):\n" +
      picks.map(function (r, i) { return (i + 1) + ". " + r.book.title + " by " + r.book.author; }).join("\n") +
      "\n" + location.href.split("#")[0];
    var status = $("copy-status");
    function done(ok) { status.textContent = ok ? "Copied. Go spread the weirdness." : "Couldn't copy — select the list and copy it by hand."; }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(false); });
    } else {
      done(false);
    }
  }

  function pad(n) { return n < 10 ? "0" + n : String(n); }

  // ---------- wiring ----------
  $("start").addEventListener("click", function () {
    // Resume where they left off if a partial survey is saved.
    current = Math.min(answers.length, QUESTIONS.length - 1);
    if (answers.length >= QUESTIONS.length) { renderResults(); show("results"); return; }
    renderQuestion();
    show("quiz");
  });

  backBtn.addEventListener("click", function () {
    if (current > 0) { current--; renderQuestion(); }
  });

  $("restart").addEventListener("click", function () {
    answers = [];
    current = 0;
    clear();
    renderQuestion();
    show("quiz");
  });

  document.addEventListener("keydown", function (e) {
    if (!screens.quiz.classList.contains("is-active") || e.metaKey || e.ctrlKey || e.altKey) return;
    var n = parseInt(e.key, 10);
    if (n >= 1 && n <= 4) {
      var btns = answersEl.querySelectorAll(".answer");
      if (btns[n - 1]) choose(n - 1, btns[n - 1]);
    } else if (e.key === "Backspace" && current > 0) {
      e.preventDefault();
      current--;
      renderQuestion();
    }
  });

  if (answers.length > 0 && answers.length < QUESTIONS.length) {
    $("start").firstChild.textContent = "Resume the survey ";
  }
})();
