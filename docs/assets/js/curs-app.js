/* =========================================================
   curs-app.js · calendari, pròxima sessió i qüestionaris
   per a la web MkDocs (tema Material)
   Adaptat del curs de Python: una sola classe setmanal fixa
   ========================================================= */
(function () {
  "use strict";

  /* ---------- utilitats de dates en valencià ---------- */
  const MESOS = ["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"];
  const MESOS_CURTS = ["gen", "febr", "març", "abr", "maig", "juny", "jul", "ag", "set", "oct", "nov", "des"];
  const DIES = ["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"];
  const parseDate = (s) => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
  const deMes = (m) => (/^[aeiou]/i.test(MESOS[m]) ? "d'" : "de ") + MESOS[m];
  const fmtLong = (d) => `${DIES[d.getDay()]} ${d.getDate()} ${deMes(d.getMonth())}`;
  const fmtShort = (d) => `${d.getDate()} ${MESOS_CURTS[d.getMonth()]}`;
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function isoWeek(date) {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const day = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - day);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  }

  function baseUrl() {
    try {
      return JSON.parse(document.getElementById("__config").textContent).base.replace(/\/$/, "");
    } catch (e) { return "."; }
  }

  /* ---------- generació del calendari ---------- */
  let PLA = null;
  function plan() {
    if (PLA) return PLA;
    const C = window.CURS, cal = C.calendari;
    const start = parseDate(cal.primeraSessio), end = parseDate(cal.fiCurs);
    const offRanges = cal.noLectius.map(([a, b, motiu]) => [parseDate(a), parseDate(b), motiu]);
    const offReason = (d) => { const r = offRanges.find(([a, b]) => d >= a && d <= b); return r ? r[2] : null; };
    const tornKeys = Object.keys(C.torns);
    const slots = [];
    if (tornKeys.length === 1) {
      // Una classe setmanal sempre el mateix dia
      const torn = tornKeys[0], wd = C.torns[torn].weekday;
      const d = new Date(start);
      d.setDate(d.getDate() + ((wd - d.getDay() + 7) % 7));
      for (; d <= end; d.setDate(d.getDate() + 7)) slots.push({ date: new Date(d), torn, off: offReason(d) });
    } else {
      // Dos torns alterns (com al curs de Python)
      const firstTorn = tornKeys.find((k) => C.torns[k].weekday === start.getDay());
      const otherTorn = tornKeys.find((k) => k !== firstTorn);
      const monday = new Date(start);
      monday.setDate(monday.getDate() - ((monday.getDay() + 6) % 7));
      for (let w = new Date(monday), k = 0; w <= end; w.setDate(w.getDate() + 7), k++) {
        const torn = cal.paritat === "alterna"
          ? (k % 2 === 0 ? firstTorn : otherTorn)
          : (isoWeek(w) % 2 === 0 ? "dj" : "dc");
        const d = new Date(w);
        d.setDate(d.getDate() + C.torns[torn].weekday - 1);
        if (d < start || d > end) continue;
        slots.push({ date: d, torn, off: offReason(d) });
      }
    }

    const rows = [];
    let i = 0;
    for (const s of slots) {
      if (s.off) { rows.push(s); continue; }
      if (i >= C.sessions.length) break;
      const ses = C.sessions[i];
      const [h, m] = C.torns[s.torn].fi.split(":").map(Number);
      const endTime = new Date(s.date); endTime.setHours(h, m, 0, 0);
      rows.push(Object.assign({}, s, { n: i + 1, ses, end: endTime }));
      i++;
    }
    if (i < C.sessions.length) console.warn(`Calendari: falten ${C.sessions.length - i} dies de classe per a les sessions previstes.`);
    PLA = { rows, sessions: rows.filter((r) => r.ses) };
    return PLA;
  }

  function unitLink(key, text) {
    const u = window.CURS.unitats[key];
    return u ? `<a href="${baseUrl()}/${u.url}">${esc(text || u.titol)}</a>` : esc(text || "");
  }

  /* ---------- bitllet de la pròxima sessió ---------- */
  function buildTicket() {
    const el = document.getElementById("pròxima-sessio") || document.getElementById("proxima-sessio");
    if (!el) return;
    const C = window.CURS;
    const now = new Date();
    const list = plan().sessions;
    const idx = list.findIndex((s) => s.end > now);
    if (idx < 0) {
      el.innerHTML = `<div class="ticket-top"><div class="ticket-label">Classes del mòdul</div><div class="ticket-date">Curs acabat</div></div>`;
      return;
    }
    const s = list[idx], after = list[idx + 1], t = C.torns[s.torn];
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const days = Math.round((s.date - today) / 86400000);
    const when = days === 0 ? "Hui hi ha classe" : days === 1 ? "Pròxima classe: demà" : `Pròxima classe: d'ací ${days} dies`;
    el.innerHTML = `
      <div class="ticket-top">
        <div class="ticket-label">${when}</div>
        <div class="ticket-date">${cap(fmtLong(s.date))}</div>
        <div class="ticket-time">${t.inici}–${t.fi}${t.nom ? " · " + t.nom : ""}${C.aula ? " · " + esc(C.aula) : ""}</div>
      </div>
      <div class="ticket-cut" aria-hidden="true"></div>
      <div class="ticket-bottom">
        <div class="ticket-topic">S${s.n} · ${esc(s.ses.tema)}</div>
        ${s.ses.nota ? `<p>${esc(s.ses.nota)}</p>` : ""}
        <p>${s.ses.u ? unitLink(s.ses.u, "Obri els apunts") + " · " : ""}<a href="${baseUrl()}/calendari/">Calendari complet</a></p>
        ${after ? `<p class="ticket-next">Després: ${fmtLong(after.date)} · ${esc(after.ses.tema)}</p>` : ""}
      </div>`;
  }

  /* ---------- calendari complet ---------- */
  function buildCalendar() {
    const el = document.getElementById("calendari-sessions");
    if (!el) return;
    const C = window.CURS;
    const now = new Date();
    const { rows, sessions } = plan();
    const next = sessions.find((s) => s.end > now);
    const groups = C.calendari.trimestres.map(([nom, a, b]) => ({
      nom, rows: rows.filter((r) => r.date >= parseDate(a) && r.date <= parseDate(b))
    }));
    el.innerHTML = groups.filter((g) => g.rows.length).map((g) => `
      <h2 id="${g.nom.replace(/\W+/g, "-").toLowerCase()}">${g.nom}</h2>
      <ol class="cal-list">
        ${g.rows.map((r) => {
          const t = C.torns[r.torn];
          if (!r.ses) {
            return `<li class="cal-off"><span class="cal-n"></span><span class="cal-date">${cap(fmtLong(r.date))}</span><span class="cal-topic">No lectiu · ${esc(r.off)}</span></li>`;
          }
          const cls = [r.ses.examen ? "cal-exam" : "", next === r ? "cal-now" : "", r.end < now ? "cal-past" : ""].join(" ").trim();
          return `<li class="${cls}">
            <span class="cal-n">S${r.n}</span>
            <span class="cal-date">${cap(fmtLong(r.date))}<small>${t.inici}–${t.fi}${t.nom ? " · " + t.nom : ""}</small></span>
            <span class="cal-topic">${r.ses.u ? unitLink(r.ses.u, r.ses.tema) : esc(r.ses.tema)}
              ${r.ses.u ? `<small>${C.unitats[r.ses.u].n}</small>` : ""}
              ${r.ses.nota ? `<small class="cal-note">${esc(r.ses.nota)}</small>` : ""}</span>
          </li>`;
        }).join("")}
      </ol>`).join("");
  }

  /* ---------- sessions d'una unitat ---------- */
  function buildUnitSessions() {
    const C = window.CURS;
    document.querySelectorAll("[data-unit-chip]").forEach((el) => {
      const ss = plan().sessions.filter((s) => s.ses.u === el.dataset.unitChip);
      if (!ss.length) { el.remove(); return; }
      const a = ss[0], b = ss[ss.length - 1];
      el.textContent = ss.length === 1
        ? `S${a.n} · ${fmtShort(a.date)}`
        : `S${a.n}–S${b.n} · ${fmtShort(a.date)} – ${fmtShort(b.date)}`;
    });
    document.querySelectorAll("[data-unit-sessions]").forEach((el) => {
      const ss = plan().sessions.filter((s) => s.ses.u === el.dataset.unitSessions);
      if (!ss.length) { el.remove(); return; }
      el.innerHTML = `<table><thead><tr><th>Sessió</th><th>Data</th><th>Què fem</th></tr></thead><tbody>
        ${ss.map((s) => `<tr><td>S${s.n}</td><td>${cap(fmtLong(s.date))}, ${C.torns[s.torn].inici}</td><td>${esc(s.ses.tema)}</td></tr>`).join("")}
      </tbody></table>`;
    });
  }

  function fillConfig() {
    const C = window.CURS;
    document.querySelectorAll("[data-c]").forEach((el) => {
      const k = el.dataset.c;
      if (k === "correu") { el.textContent = C.correu; if (el.tagName === "A") el.href = "mailto:" + C.correu; }
      else if (k === "aules" && el.tagName === "A") el.href = C.aules;
      else if (C[k] != null) el.textContent = C[k];
    });
  }

  /* ---------- qüestionaris ---------- */
  function buildQuizzes() {
    document.querySelectorAll("div.quiz").forEach((box) => {
      if (box.dataset.ready) return;
      let qs;
      try { qs = JSON.parse(box.textContent); } catch (e) { box.textContent = "Error al qüestionari: " + e.message; return; }
      box.dataset.ready = "1";
      let i = 0, score = 0, answered = false;
      box.innerHTML = `<div class="quiz-count"></div><p class="quiz-q"></p><div class="quiz-opts"></div>
        <div class="quiz-fb" aria-live="polite"></div>
        <div class="quiz-nav"><button type="button" class="md-button quiz-hint">Vull una pista</button>
        <button type="button" class="md-button md-button--primary quiz-next" disabled>Següent pregunta</button></div>`;
      const $ = (s) => box.querySelector(s);
      const nextBtn = $(".quiz-next"), hintBtn = $(".quiz-hint");
      function render() {
        answered = false;
        const q = qs[i];
        $(".quiz-count").textContent = `Pregunta ${i + 1} de ${qs.length} · encerts: ${score}`;
        $(".quiz-q").textContent = q.p;
        $(".quiz-fb").textContent = "";
        nextBtn.disabled = true;
        nextBtn.textContent = "Següent pregunta";
        hintBtn.hidden = !q.pista;
        const opts = $(".quiz-opts");
        opts.innerHTML = "";
        q.o.forEach((txt, k) => {
          const b = document.createElement("button");
          b.type = "button"; b.textContent = txt;
          b.addEventListener("click", () => {
            if (answered) return;
            answered = true;
            const ok = k === q.c;
            if (ok) score++;
            [...opts.children].forEach((x, j) => { x.disabled = true; if (j === q.c) x.classList.add("right"); });
            if (!ok) b.classList.add("wrong");
            $(".quiz-fb").textContent = (ok ? "Correcte. " : "No és correcte. ") + (q.e || "");
            $(".quiz-count").textContent = `Pregunta ${i + 1} de ${qs.length} · encerts: ${score}`;
            nextBtn.disabled = false;
            if (i === qs.length - 1) nextBtn.textContent = "Veure resultat";
          });
          opts.append(b);
        });
      }
      hintBtn.addEventListener("click", () => { $(".quiz-fb").textContent = "Pista: " + qs[i].pista; });
      nextBtn.addEventListener("click", () => {
        if (i < qs.length - 1) { i++; render(); return; }
        if (i === qs.length) { i = 0; score = 0; render(); return; }
        const pct = Math.round((score / qs.length) * 100);
        $(".quiz-count").textContent = "Resultat";
        $(".quiz-q").textContent = `Has encertat ${score} de ${qs.length} (${pct}%).`;
        $(".quiz-opts").innerHTML = "";
        $(".quiz-fb").textContent = pct >= 80 ? "Molt bé: tens la unitat ben assentada." : "Repassa els apartats on has fallat i torna a provar. Recorda que el qüestionari d'Aules és el que compta.";
        hintBtn.hidden = true;
        nextBtn.textContent = "Torna a començar";
        i = qs.length;
      });
      render();
    });
  }

  function init() {
    if (!window.CURS) return;
    fillConfig();
    buildTicket();
    buildCalendar();
    buildUnitSessions();
    buildQuizzes();
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(init);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
