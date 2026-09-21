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
    trimestres: [
      ["1r trimestre", "2026-09-01", "2026-12-31"],
      ["2n trimestre", "2027-01-01", "2027-04-05"],
      ["3r trimestre", "2027-04-06", "2027-06-30"]
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
    // UP1 · 6 sessions
    { tema: "Presentació del mòdul i qüestionari inicial", u: "up1", nota: "Qüestionari inicial sense nota. Tasca: una decisió tècnica en cinc línies." },
    { tema: "Què és la sostenibilitat. Tres dimensions i límits planetaris", u: "up1" },
    { tema: "Marcs internacionals: de Brundtland al Pacte Verd", u: "up1", nota: "Lliurament A1.1." },
    { tema: "Reptes ambientals. El sector TIC com a impacte", u: "up1" },
    { tema: "Reptes socials. Cadena de subministrament i bretxa digital", u: "up1", nota: "Lliurament A1.2." },
    { tema: "Mesures i aliances. Debat sobre el clima", u: "up1", nota: "A1.3 (debat). Formació de grups i tria del tema del treball (T1)." },
    // UP2 · 6 sessions
    { tema: "L'Agenda 2030 i el model del pastís de noces", u: "up2" },
    { tema: "Els 17 ODS. Els més rellevants per a SMX", u: "up2" },
    { tema: "Els ODS i tu: de la intenció a l'acció mesurable", u: "up2", nota: "Lliurament A2.1." },
    { tema: "Els ODS en l'empresa. Com detectar l'SDG washing", u: "up2", nota: "Lliurament A2.2." },
    { tema: "Crítiques raonables a l'Agenda 2030", u: "up2", nota: "Lliurament A2.3." },
    { tema: "Exposicions del treball d'investigació", u: "up2", examen: true, nota: "T2. Tanquen els qüestionaris Q1 i Q2 d'Aules." },
    // UP3 · 4 sessions
    { tema: "Grups d'interés. Matriu poder-interés", u: "up3" },
    { tema: "Els aspectes ASG. La lletra G i la ciberseguretat", u: "up3", nota: "Últim dia abans de Nadal. Lliurament A3.1." },
    { tema: "Materialitat simple i doble materialitat", u: "up3", nota: "Lliurament A3.2." },
    { tema: "Informació de sostenibilitat: CSRD, Òmnibus I i NEIS", u: "up3", nota: "Lliurament A3.3. Tanca el qüestionari Q3." },
    // UP4 · 8 sessions
    { tema: "El model lineal. Tipus d'obsolescència", u: "up4" },
    { tema: "Cicle de vida i ACV. On està realment la petjada", u: "up4", nota: "Lliurament A4.1." },
    { tema: "Materials crítics i dependència de subministrament", u: "up4" },
    { tema: "Economia verda i circular. Les 9R", u: "up4", nota: "Lliurament A4.2." },
    { tema: "Producció neta. Càlcul de costos de la IA", u: "up4", nota: "Lliurament A4.3." },
    { tema: "Ecodisseny. ESPR i passaport digital de producte", u: "up4" },
    { tema: "Etiqueta energètica, dret a reparar i RAEE", u: "up4", nota: "Lliurament A4.4." },
    { tema: "Exposicions del treball d'investigació", u: "up4", examen: true, nota: "T3. Tanca el qüestionari Q4." },
    // UP5 · 6 sessions (depén de les dates de la Formació en Empresa)
    { tema: "Per què mesurar. Indicadors absoluts i d'intensitat", u: "up5", nota: "Bloc provisional: depén de les dates de la Formació en Empresa." },
    { tema: "Indicadors TIC: PUE, WUE i vida del parc", u: "up5" },
    { tema: "Petjada de carboni. Abasts 1, 2 i 3", u: "up5", nota: "Lliurament A5.1." },
    { tema: "Efecte rebot i petjada hídrica", u: "up5" },
    { tema: "ISO 14001, EMAS i etiquetes ambientals", u: "up5", nota: "Lliurament A5.2." },
    { tema: "Inversió socialment responsable i posada en comú de la FE", u: "up5", nota: "Lliurament A5.3. Tanca el qüestionari Q5." },
    // UP6 · 5 sessions
    { tema: "La informació no financera. Mapa de documents", u: "up6" },
    { tema: "Estàndards de reporting. Lectura crítica d'una memòria", u: "up6", nota: "Lliurament A6.1." },
    { tema: "Com s'elabora un pla de sostenibilitat", u: "up6", nota: "Lliurament A6.2." },
    { tema: "Greenwashing i la Directiva 2024/825. Taller del pla", u: "up6" },
    { tema: "Lliurament i defensa del pla de sostenibilitat", u: "up6", examen: true, nota: "A6.3. Tanca el qüestionari Q6." }
  ]
};
