/* =========================================================
   DADES DEL CURS · Edita NOMÉS aquest fitxer per a canviar
   dates, horaris, correu o l'ordre de les sessions.
   El calendari es genera sol a partir d'aquestes regles.
   ========================================================= */

window.CURS = {
  professor: "Samuel Viel Malonda",
  // ⚠️ Comprova el correu abans de publicar
  correu: "s.vielmalonda@edu.gva.es",
  // ⚠️ Comprova l'adreça d'Aules del centre
  aules: "https://aules.edu.gva.es/fp",
  aula: "",
  curs: "2026-2027",

  // Una sola classe setmanal, sempre el mateix dia.
  torns: {
    dt: { dia: "Dimarts", nom: "", inici: "12:10", fi: "13:05", weekday: 2 }
  },

  calendari: {
    primeraSessio: "2026-09-15",
    fiCurs: "2027-06-18",
    // Dies no lectius (Comunitat Valenciana + Gandia 2026-2027)
    // A Gandia, el 22 de desembre és lectiu (acord del Consell Escolar Municipal).
    noLectius: [
      ["2026-10-05", "2026-10-05", "Festiu local"],
      ["2026-10-09", "2026-10-09", "9 d'Octubre"],
      ["2026-10-12", "2026-10-12", "Festa nacional"],
      ["2026-12-07", "2026-12-08", "Pont de la Constitució"],
      ["2026-12-23", "2027-01-06", "Vacances de Nadal"],
      ["2027-03-16", "2027-03-19", "Falles"],
      ["2027-03-25", "2027-04-05", "Vacances de Pasqua"],
      ["2027-05-01", "2027-05-01", "1 de maig"]
    ],
    // Formació en Empresa: no hi ha classes al centre durant aquest període.
    formacioEmpresa: [
      ["2027-03-01", "2027-04-30", "Formació en Empresa"]
    ],
    // Blocs per a agrupar el calendari
    trimestres: [
      ["1r trimestre", "2026-09-01", "2026-12-31"],
      ["2n trimestre", "2027-01-01", "2027-02-28"],
      ["Formació en Empresa", "2027-03-01", "2027-04-30"],
      ["Tornada: maig i juny", "2027-05-01", "2027-06-30"]
    ]
  },

  unitats: {
    up1: { n: "UP1", titol: "La sostenibilitat i els seus reptes",   url: "unitats/up1/" },
    up2: { n: "UP2", titol: "Les fites de la sostenibilitat: els ODS", url: "unitats/up2/" },
    up3: { n: "UP3", titol: "Empresa i medi ambient: els aspectes ASG", url: "unitats/up3/" },
    up4: { n: "UP4", titol: "Disseny i producció sostenible",        url: "unitats/up4/" },
    up5: { n: "UP5", titol: "Mesurant la sostenibilitat",            url: "unitats/up5/" },
    up6: { n: "UP6", titol: "El pla de sostenibilitat",              url: "unitats/up6/" }
  },

  // Les sessions, en ordre. Cada una ocupa el següent dimarts lectiu.
  // examen: true → sessió marcada com a lliurament o exposició important.
  sessions: [
    // ===== SETEMBRE A FEBRER: UP1-UP4 (21 sessions) =====
    // UP1 · 5 sessions
    { tema: "Presentació del mòdul i qüestionari inicial", u: "up1", nota: "Qüestionari inicial sense nota. Tasca: una decisió tècnica en cinc línies." },
    { tema: "Què és la sostenibilitat. Tres dimensions, límits planetaris i marcs internacionals", u: "up1" },
    { tema: "Reptes ambientals i socials. El sector TIC com a impacte", u: "up1", nota: "Lliurament A1.1. Formació dels grups del treball d'investigació." },
    { tema: "Reptes i economia. Mesures i aliances", u: "up1", nota: "Lliurament T1 (tria de tema)." },
    { tema: "Debat: qui ha de pagar la factura?", u: "up1", examen: true, nota: "A1.3 (debat). Lliurament A1.2. Tanca el qüestionari Q1." },
    // UP2 · 5 sessions
    { tema: "L'Agenda 2030, el pastís de noces i els 17 ODS", u: "up2" },
    { tema: "Els ODS i tu: els més rellevants per a SMX", u: "up2" },
    { tema: "Els ODS en l'empresa. Com detectar l'SDG washing", u: "up2", nota: "Lliurament A2.1." },
    { tema: "Crítiques raonables a l'Agenda 2030", u: "up2", nota: "Lliurament A2.2." },
    { tema: "Exposicions del treball d'investigació", u: "up2", examen: true, nota: "T2. Lliurament A2.3. Tanca el qüestionari Q2." },
    // UP3 · 4 sessions
    { tema: "Grups d'interés. Matriu poder-interés", u: "up3" },
    { tema: "Els aspectes ASG. La lletra G i la ciberseguretat", u: "up3", nota: "Lliurament A3.1." },
    { tema: "Materialitat simple i doble materialitat", u: "up3", nota: "Lliurament A3.2." },
    { tema: "Informació de sostenibilitat: CSRD, Òmnibus I i NEIS", u: "up3", nota: "Últim dia abans de Nadal. Lliurament A3.3. Tanca el qüestionari Q3." },
    // UP4 · 7 sessions
    { tema: "El model lineal i l'obsolescència. Cicle de vida i ACV", u: "up4" },
    { tema: "Materials crítics. Economia verda i circular", u: "up4" },
    { tema: "Les 9R al taller. Producció neta", u: "up4", nota: "Lliurament A4.1." },
    { tema: "Ecodisseny. ESPR i passaport digital de producte", u: "up4", nota: "Lliurament A4.2." },
    { tema: "Etiqueta energètica, dret a reparar i RAEE", u: "up4", nota: "Lliurament A4.3." },
    { tema: "Taller: ecodisseny d'un servei del centre", u: "up4", nota: "Sessió de treball en grup per a A4.4 i per a preparar la T3." },
    { tema: "Exposicions del treball d'investigació", u: "up4", examen: true, nota: "T3. Lliurament A4.4. Tanca el qüestionari Q4. Última classe abans de la Formació en Empresa." },
    // ===== MARÇ I ABRIL: FORMACIÓ EN EMPRESA =====
    // ===== MAIG I JUNY: UP5-UP6 (7 sessions) =====
    // UP5 · 3 sessions
    { tema: "Tornada de l'empresa: posada en comú. Per què mesurar i indicadors TIC", u: "up5", nota: "Porta les notes de l'estada: són la base de la A5.1." },
    { tema: "Petjada de carboni, abasts i efecte rebot", u: "up5", nota: "Lliurament A5.1." },
    { tema: "ISO 14001, etiquetes ambientals i inversió responsable", u: "up5", nota: "Lliurament A5.2. Tanca el qüestionari Q5." },
    // UP6 · 4 sessions
    { tema: "La informació no financera. Documents i estàndards", u: "up6" },
    { tema: "Lectura crítica d'una memòria. Com s'elabora un pla", u: "up6", nota: "Lliurament A6.1." },
    { tema: "Greenwashing i Directiva 2024/825. Taller del pla", u: "up6" },
    { tema: "Lliurament i defensa del pla de sostenibilitat", u: "up6", examen: true, nota: "A6.2. Tanca el qüestionari Q6." }
  ]
};
