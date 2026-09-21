---
title: "Mesurant la sostenibilitat"
---

<p class="unit-num">Unitat de programació 5</p>

# Mesurant la sostenibilitat

<p class="unit-meta"><span class="chip ra">RA5</span> <span class="chip" data-unit-chip="up5"></span> <span class="chip">6 sessions</span></p>

Sense mesura no hi ha gestió. Indicadors, petjada de carboni, certificacions i inversió responsable, amb els indicadors propis del sector TIC.

## Què aprendràs

- Identificar els principals estàndards de mètriques per a avaluar l'acompliment en sostenibilitat *(RA1 e)*
- Descriure la inversió socialment responsable i el paper d'analistes, inversors, agències i índexs *(RA1 f)*
- Aplicar estratègies sostenibles i avaluar l'impacte de les activitats *(RA5 d, f)*
- Aplicar la normativa ambiental *(RA5 i)*

### Sessions d'aquesta unitat

<div class="unit-sessions" data-unit-sessions="up5" markdown="0"></div>

!!! info "Dates provisionals"

    Esta unitat es treballa després de la Formació en Empresa. Si les dates de l'estada canvien, el calendari d'esta unitat es reajustarà i s'avisarà per Aules.

## 1. Per què mesurar

Sense mesura no hi ha gestió, i sense gestió el discurs de sostenibilitat es queda en publicitat. Mesurar servix per a tres coses:

1. **Saber on estàs.** Una línia base sense la qual qualsevol objectiu és arbitrari.
2. **Comparar.** Entre opcions, entre anys, entre empreses.
3. **Retre comptes.** Demostrar amb dades el que dius.

I servix, sobretot, per a distingir una empresa que fa coses d'una que en parla.

## 2. Indicadors

Un **indicador clau d'acompliment (KPI)** és una magnitud que representa el comportament d'un aspecte. Un bon indicador és:

- **Específic**: mesura una cosa concreta.
- **Mesurable**: amb una font de dades identificada.
- **Comparable**: es pot contrastar amb la línia base o amb altres.
- **Rellevant**: està lligat a un assumpte material.
- **Temporal**: té període i data.

### Absoluts contra d'intensitat

| Tipus | Què mesura | Exemple | Risc |
|---|---|---|---|
| **Absolut** | Quantitat total | 120 tCO₂e a l'any | Creix si creix l'empresa |
| **D'intensitat** | Per unitat d'activitat | 0,8 kgCO₂e per usuari atés | Pot millorar mentre el total puja |

Cal donar **els dos**. Una empresa que només publica indicadors d'intensitat pot estar dient que és més eficient mentre contamina més en termes absoluts. És un truc habitual i cal saber detectar-lo.

### Indicadors útils en el nostre sector

| Indicador | Què mesura | Referència |
|---|---|---|
| **PUE** (*Power Usage Effectiveness*) | Energia total del CPD dividida per l'energia de l'equipament TI | 1,0 seria perfecte. Un CPD eficient se situa prop d'1,2 |
| **WUE** (*Water Usage Effectiveness*) | Litres d'aigua per kWh de TI | Cada vegada més vigilat |
| **CUE** (*Carbon Usage Effectiveness*) | kgCO₂e per kWh de TI | Depén del mix elèctric |
| **Vida mitjana del parc** | Anys mitjans dels equips en servici | Com més alt, millor |
| **Taxa de reparació** | Incidències resoltes reparant sobre el total | Indicador de circularitat |
| **Taxa de reutilització de RAEE** | Equips reutilitzats sobre retirats | |
| **kWh per lloc de treball** | Consum per usuari | Permet comparar seus |
| **Percentatge d'energia renovable** | Sobre el consum total | Comprovar si és certificat |

!!! warning "Sobre el PUE"

    És l'indicador més citat i també el més manipulable. No diu res sobre si els servidors estan fent faena útil. Un CPD amb servidors inactius pot tindre un PUE excel·lent i estar malgastant energia. Sempre cal acompanyar-lo d'un indicador d'utilització.

## 3. La petjada de carboni

És l'indicador més usat. Mesura els gasos d'efecte d'hivernacle associats a una activitat, expressats en **equivalents de CO₂ (CO₂e)** perquè el metà, l'òxid nitrós i altres gasos tenen potencials d'escalfament diferents.

### Els tres abasts del GHG Protocol

| Abast | Què inclou | Exemple en una empresa informàtica |
|---|---|---|
| **1 · Directes** | Emissions de fonts pròpies | Combustible dels vehicles de la flota, calderes |
| **2 · Indirectes d'energia** | Electricitat comprada | Consum de l'oficina i del CPD propi |
| **3 · Altres indirectes** | Tota la cadena de valor | Fabricació dels equips comprats, desplaçaments de la plantilla, servicis al núvol, RAEE |

En el sector TIC, **l'abast 3 sol ser la part més gran i la més ignorada**, perquè inclou la fabricació del maquinari. És coherent amb el que vas veure a la UP4: si la petjada està en la fabricació, la petjada està en l'abast 3.

### Càlcul bàsic

```
Emissions (kgCO₂e) = Dada d'activitat × Factor d'emissió
```

Per a electricitat:

```
kgCO₂e = kWh consumits × factor del mix elèctric (kgCO₂e/kWh)
```

El factor del mix elèctric espanyol el publiquen Red Eléctrica i el Ministeri per a la Transició Ecològica, i varia cada any segons quanta renovable hi haja hagut. Si contractes energia amb garantia d'origen renovable, el factor de mercat pot ser zero, però el factor de localització no.

### Exercici model: l'aula d'informàtica

Suposem 25 equips de 90 W en ús, 6 hores al dia, 175 dies lectius:

```
Energia = 25 × 90 W × 6 h × 175 dies = 236.250 Wh = 236,25 kWh
```

Amb un factor de 0,15 kgCO₂e/kWh:

```
Emissions = 236,25 × 0,15 ≈ 35 kgCO₂e a l'any
```

Ara compara-ho amb la fabricació. Si la fabricació d'un equip de sobretaula ronda els 200-300 kgCO₂e segons les fitxes de fabricant, **fabricar un sol equip nou equival a diversos anys de funcionament de tota l'aula**. Torna a llegir esta frase abans de proposar una renovació de parc.

## 4. Petjada hídrica i altres petjades

- **Petjada hídrica**: litres d'aigua consumits directament i indirectament. En TIC prové sobretot de la refrigeració de CPD i de la fabricació de semiconductors, que requerix aigua ultrapura en grans volums.
- **Petjada de materials**: quilos de material mobilitzats.
- **Petjada digital**: terme divulgatiu per a l'impacte de l'ús de servicis digitals. Útil per a comunicar, però cal manejar-lo amb cura perquè les estimacions publicades varien molt entre si.

## 5. L'efecte rebot

Descrit al segle XIX per William Stanley Jevons: quan una tecnologia fa més eficient l'ús d'un recurs, sovint el consum total **augmenta** en lloc de disminuir, perquè l'eficiència abarateix l'ús i n'estimula més.

Exemples del nostre sector:

- Els discos són més barats per terabyte, així que guardem molt més i esborrem molt menys.
- El vídeo es comprimix millor, així que augmenta la resolució i el consum de xarxa no baixa.
- Els servidors virtualitzats són més eficients, i s'acaben desplegant moltes més instàncies.

**Conclusió pràctica**: mai s'ha de presentar una millora d'eficiència com un estalvi automàtic. Cal mesurar el consum total abans i després, no només el rendiment per unitat.

## 6. Sistemes de gestió i certificacions

### ISO 14001 · Sistema de Gestió Ambiental

És l'estàndard internacional de referència. Certifica que l'organització té un **sistema** per a gestionar el seu impacte ambiental, no que siga verda.

Funciona amb el cicle **PDCA**:

| Fase | Contingut |
|---|---|
| **Planificar** | Context, parts interessades, identificació d'aspectes ambientals, requisits legals, objectius |
| **Fer** | Recursos, competències, comunicació, control operacional, preparació davant d'emergències |
| **Verificar** | Seguiment, mesurament, auditoria interna, revisió per la direcció |
| **Actuar** | No conformitats, accions correctives, millora contínua |

Passos per a implantar-lo: diagnòstic inicial, identificació i avaluació d'aspectes ambientals significatius, revisió de requisits legals, definició d'objectius, documentació, formació, auditoria interna, auditoria de certificació per entitat acreditada i manteniment amb auditories de seguiment.

!!! note "Què certifica i què no"

    ISO 14001 no diu que contamines poc. Diu que saps quant contamines, que compleixes la llei i que tens un procediment de millora. És molt més del que sembla i molt menys del que la publicitat suggerix.

### Altres normes i esquemes

| Norma / esquema | Objecte |
|---|---|
| **EMAS** | Esquema europeu, més exigent que ISO 14001. Obliga a publicar una declaració ambiental verificada |
| **ISO 50001** | Gestió de l'energia |
| **ISO 14064** | Quantificació i informe de gasos d'efecte d'hivernacle |
| **ISO 14067** | Petjada de carboni de producte |
| **ISO 14024/14021/14025** | Tipus d'etiquetes ambientals |
| **Registre de petjada de carboni del MITECO** | Registre estatal voluntari de càlcul, reducció i compensació |

### Etiquetes rellevants en informàtica

- **Etiqueta energètica europea**: obligatòria per a mòbils i tauletes des del juny de 2025, amb classe d'eficiència i puntuació de reparabilitat.
- **ENERGY STAR**: eficiència energètica d'equips.
- **EPEAT**: registre de productes electrònics amb criteris ambientals per a compra institucional.
- **TCO Certified**: criteris ambientals i socials, incloent-hi condicions de fabricació.
- **Blue Angel** i **Nordic Swan**: ecoetiquetes de tipus I amb verificació independent.

**Com valorar una etiqueta**: mira qui la concedix, si hi ha verificació de tercers, quins criteris exigix i si es revisen periòdicament. Una etiqueta autodeclarada pel fabricant no val el mateix que una de verificada.

## 7. La inversió socialment responsable

La **ISR** és la que incorpora criteris ambientals, socials i de governança a les decisions d'inversió, junt amb la rendibilitat i el risc.

### Estratègies

| Estratègia | En què consistix |
|---|---|
| **Exclusió** | No invertir en sectors determinats: armament, tabac, carbó |
| **Best in class** | Triar les millors empreses ASG dins de cada sector |
| **Integració ASG** | Incorporar factors ASG a l'anàlisi financera ordinària |
| **Inversió temàtica** | Fons centrats en energies renovables, aigua, eficiència |
| **Inversió d'impacte** | Buscar un impacte positiu mesurable a més del retorn |
| **Implicació accionarial** | Usar els drets de vot per a canviar la companyia des de dins |

### Qui hi juga

- **Agències de qualificació ASG**: MSCI, Sustainalytics, ISS ESG. Puntuen empreses.
- **CDP**: plataforma on les empreses reporten dades de clima, aigua i boscos.
- **Índexs**: Dow Jones Sustainability Index, FTSE4Good, MSCI ESG.
- **Reguladors**: el **Reglament SFDR** obliga els productes financers europeus a informar sobre sostenibilitat, i la **taxonomia europea** definix què és una activitat ambientalment sostenible.

### La crítica que cal conéixer

Les qualificacions ASG de diferents agències sobre una mateixa empresa **divergixen molt**. Diversos estudis acadèmics han trobat correlacions baixes entre agències, mentre que en qualificació creditícia financera la correlació és altíssima. El motiu és que cada agència pondera i definix les coses de manera diferent.

Conclusió: una nota ASG és una opinió, no una mesura objectiva. Cal saber qui la dona i amb quina metodologia.

## 8. Organismes de referència

| Organisme | Paper |
|---|---|
| **GRI** | Estàndards de reporting més usats internacionalment |
| **EFRAG** | Elabora els ESRS europeus |
| **ISSB** (IFRS) | Normes globals d'informació financera sobre sostenibilitat |
| **SBTi** | Valida objectius de reducció d'emissions alineats amb la ciència |
| **CDP** | Recollida i publicació de dades ambientals |
| **AENOR** | Normalització i certificació a Espanya |
| **MITECO** | Registre de petjada de carboni i normativa estatal |

## Conceptes clau

<div class="conceptes" markdown="0"><span>KPI</span><span>Línia base</span><span>Indicadors absoluts i d&#x27;intensitat</span><span>PUE, WUE, CUE</span><span>CO₂e</span><span>Abasts 1, 2 i 3 del GHG Protocol</span><span>Factor d&#x27;emissió i mix elèctric</span><span>Petjada hídrica</span><span>Efecte rebot / paradoxa de Jevons</span><span>ISO 14001 i cicle PDCA</span><span>EMAS</span><span>ISO 50001, 14064, 14067</span><span>Etiqueta energètica, EPEAT, TCO Certified</span><span>ISR</span><span>Agències de qualificació ASG</span><span>SFDR i taxonomia europea</span><span>GRI, EFRAG, ISSB, SBTi, CDP</span></div>

## Activitats d'aula

No tenen nota. Les fem a classe, sovint en parella, i servixen per a preparar les tasques i els debats.

#### 1. La trampa de la intensitat <span class="nivell n1">Bàsic</span>

Una empresa publica que ha reduït un 20% les emissions per empleat. Quina altra dada necessites abans de felicitar-la?

??? question "Pista per a l'activitat 1"

    Què passa si la plantilla ha crescut un 50%?

#### 2. L'aula en CO₂e <span class="nivell n2">Mitjà</span>

Calcula el consum anual aproximat de l'aula on estàs i converteix-lo a CO₂e. Compara el resultat amb la petjada de fabricació d'un sol equip nou. Què conclous sobre la política de renovació?

??? question "Pista per a l'activitat 2"

    Seguix l'exercici model de la unitat, però amb les dades reals de l'aula: nombre d'equips, potència, hores i dies.

#### 3. Notes ASG que no quadren <span class="nivell n3">Repte</span>

Dues agències donen a la mateixa empresa una nota ASG molt diferent. Com ho investigaries per a decidir quina té més sentit?

## Tasques d'Aules

Estes són les que compten. La rúbrica de cada tasca està a Aules des del dia que s'obri. **S3** vol dir que es lliura abans de començar la sessió 3; les dates exactes estan al [calendari](../calendari.md).

!!! tasca "A5.1 · Mesurar l'aula"

    <div class="fitxa" markdown="0"><span class="chip">Parelles</span> <span class="chip">Lliurament: S27</span> <span class="chip ra">RA5 f)</span> <span class="chip pes">20% del RA5</span></div>

    **Què has de fer.** Compareu el consum de **dues configuracions** d'un mateix equip: per exemple, la gestió d'energia per defecte contra una d'optimitzada. Si hi ha mesurador endollable, useu-lo; si no, les dades de la fitxa tècnica. Calculeu kWh anuals i CO₂e amb un factor d'emissió oficial.

    **Què lliures.** Un informe breu amb les mesures, el càlcul pas a pas, la font del factor d'emissió i una reflexió sobre possibles efectes rebot.

    **Com s'avalua.** Rigor en la mesura i el càlcul, font del factor d'emissió i qualitat de la reflexió.

!!! tasca "A5.2 · Fitxa ISO 14001"

    <div class="fitxa" markdown="0"><span class="chip">Individual</span> <span class="chip">Lliurament: S29</span> <span class="chip ra">RA5 i)</span> <span class="chip pes">15% del RA5</span></div>

    **Què has de fer.** Explica quins passos hauria de seguir una empresa informàtica local per a certificar-se en ISO 14001, organitzats segons el cicle PDCA.

    **Què lliures.** Dues pàgines. Inclou un apartat final sobre què certifica la norma i què no.

    **Com s'avalua.** Correcció del procés, bona correspondència amb el PDCA i precisió sobre l'abast real del certificat.

!!! tasca "A5.3 · Informe de l'estada formativa"

    <div class="fitxa" markdown="0"><span class="chip">Individual</span> <span class="chip">Lliurament: S30</span> <span class="chip ra">RA5 d) f) h)</span> <span class="chip pes">25% del RA5</span></div>

    **Què has de fer.** A partir de l'estada a l'empresa, identifica els indicadors de sostenibilitat que s'hi usen o que s'hi podrien usar, les bones pràctiques que has observat, i fes **dues propostes de millora justificades**.

    **Què lliures.** Un informe de tres pàgines com a màxim.

    **Com s'avalua.** Qualitat de l'observació, pertinença dels indicadors i viabilitat de les propostes. Si no has fet la Formació en Empresa, faràs un estudi equivalent sobre les empreses col·laboradores del cicle.

!!! tasca "Q5 · Qüestionari d'Aules"

    <div class="fitxa" markdown="0"><span class="chip">Individual</span> <span class="chip">Tanca a la S30</span> <span class="chip pes">10% del RA5</span></div>

    Qüestionari a Aules sobre tota la unitat. És diferent del d'autoavaluació d'esta pàgina, i és el que compta per a la nota.

## Comprova-ho

Autoavaluació sense nota. Pots repetir-la totes les vegades que vulgues.

```quiz
[
 {
  "p": "Com es calcula el PUE d'un centre de dades?",
  "o": [
   "Energia de l'equipament TI dividida per l'energia total",
   "Energia total dividida per l'energia de l'equipament TI",
   "Emissions dividides per l'energia",
   "Litres d'aigua per kWh"
  ],
  "c": 1,
  "e": "Un PUE d'1,0 seria perfecte: tota l'energia aniria a l'equipament TI."
 },
 {
  "p": "En quin abast del GHG Protocol entra la fabricació dels ordinadors que compra una empresa?",
  "o": [
   "Abast 1",
   "Abast 2",
   "Abast 3",
   "En cap"
  ],
  "c": 2,
  "e": "L'abast 3 cobrix tota la cadena de valor. En el sector TIC sol ser la part més gran."
 },
 {
  "p": "Com es calculen les emissions d'una activitat?",
  "o": [
   "Dada d'activitat per factor d'emissió",
   "Energia consumida per preu",
   "Factor d'emissió dividit pels kWh",
   "Emissions de l'any anterior més un 10%"
  ],
  "c": 0,
  "e": "Per a l'electricitat: kWh consumits per kgCO₂e/kWh del mix elèctric."
 },
 {
  "p": "Què és l'efecte rebot?",
  "o": [
   "Que una millora d'eficiència reduïx el consum a zero",
   "Que una millora d'eficiència pot acabar augmentant el consum total",
   "Que les emissions tornen a pujar cada hivern",
   "Que els equips reparats tornen a avariar-se"
  ],
  "c": 1,
  "e": "També s'anomena paradoxa de Jevons. Per això cal mesurar el total, no només l'eficiència."
 },
 {
  "p": "Què certifica la ISO 14001?",
  "o": [
   "Que l'empresa no contamina",
   "Que l'empresa té un sistema de gestió ambiental amb millora contínua",
   "Que l'empresa és neutra en carboni",
   "Que els productes són reciclables"
  ],
  "c": 1,
  "e": "Certifica el sistema, no el resultat. És molt més del que sembla i molt menys del que suggerix la publicitat."
 },
 {
  "p": "Per què no n'hi ha prou amb publicar indicadors d'intensitat?",
  "o": [
   "Perquè són més difícils de calcular",
   "Perquè poden millorar mentre les emissions totals pugen",
   "Perquè la llei no els accepta",
   "Perquè només valen per a empreses grans"
  ],
  "c": 1,
  "e": "Cal donar sempre els absoluts i els d'intensitat."
 }
]
```

## Per a saber-ne més

- GHG Protocol, estàndards corporatius: `ghgprotocol.org`
- MITECO, registre de petjada de carboni i factors d'emissió
- Red Eléctrica, dades del mix elèctric: `ree.es`
- ISO 14001:2015 i ISO 50001
- EMAS, Reglament (CE) 1221/2009
- Reglament (UE) 2019/2088 (SFDR) i Reglament (UE) 2020/852 (taxonomia)
- The Green Grid, definició de PUE i WUE
- CDP: `cdp.net` · SBTi: `sciencebasedtargets.org`
