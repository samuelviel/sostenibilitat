---
title: "Mesurant la sostenibilitat"
unitat: "UP5"
weight: 5
hores: 6
periode: "06/04 - 11/05"
ra: ["RA5"]
toc: true
description: "UP5 del mòdul de Sostenibilitat Aplicada al Sistema Productiu, 2n SMX."
---

---

## Què aprendràs

- Identificar els principals estàndards de mètriques per a avaluar l'acompliment en sostenibilitat *(RA1 e)*
- Descriure la inversió socialment responsable i el paper d'analistes, inversors, agències i índexs *(RA1 f)*
- Aplicar estratègies sostenibles i avaluar l'impacte de les activitats *(RA5 d, f)*
- Aplicar la normativa ambiental *(RA5 i)*

---

## 1. Per què mesurar

Sense mesura no hi ha gestió, i sense gestió el discurs de sostenibilitat es queda en publicitat. Mesurar servix per a tres coses:

1. **Saber on estàs.** Una línia base sense la qual qualsevol objectiu és arbitrari.
2. **Comparar.** Entre opcions, entre anys, entre empreses.
3. **Retre comptes.** Demostrar amb dades el que dius.

I servix, sobretot, per a distingir una empresa que fa coses d'una que en parla.

---

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

> **Sobre el PUE.** És l'indicador més citat i també el més manipulable. No diu res sobre si els servidors estan fent faena útil. Un CPD amb servidors inactius pot tindre un PUE excel·lent i estar malgastant energia. Sempre cal acompanyar-lo d'un indicador d'utilització.

---

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

---

## 4. Petjada hídrica i altres petjades

- **Petjada hídrica**: litres d'aigua consumits directament i indirectament. En TIC prové sobretot de la refrigeració de CPD i de la fabricació de semiconductors, que requerix aigua ultrapura en grans volums.
- **Petjada de materials**: quilos de material mobilitzats.
- **Petjada digital**: terme divulgatiu per a l'impacte de l'ús de servicis digitals. Útil per a comunicar, però cal manejar-lo amb cura perquè les estimacions publicades varien molt entre si.

---

## 5. L'efecte rebot

Descrit al segle XIX per William Stanley Jevons: quan una tecnologia fa més eficient l'ús d'un recurs, sovint el consum total **augmenta** en lloc de disminuir, perquè l'eficiència abarateix l'ús i n'estimula més.

Exemples del nostre sector:

- Els discos són més barats per terabyte, així que guardem molt més i esborrem molt menys.
- El vídeo es comprimix millor, així que augmenta la resolució i el consum de xarxa no baixa.
- Els servidors virtualitzats són més eficients, i s'acaben desplegant moltes més instàncies.

**Conclusió pràctica**: mai s'ha de presentar una millora d'eficiència com un estalvi automàtic. Cal mesurar el consum total abans i després, no només el rendiment per unitat.

---

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

> **Què certifica i què no.** ISO 14001 no diu que contamines poc. Diu que saps quant contamines, que compleixes la llei i que tens un procediment de millora. És molt més del que sembla i molt menys del que la publicitat suggerix.

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

---

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

---

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

---

## Conceptes clau

**KPI** · **Línia base** · **Indicadors absoluts i d'intensitat** · **PUE, WUE, CUE** · **CO₂e** · **Abasts 1, 2 i 3 del GHG Protocol** · **Factor d'emissió i mix elèctric** · **Petjada hídrica** · **Efecte rebot / paradoxa de Jevons** · **ISO 14001 i cicle PDCA** · **EMAS** · **ISO 50001, 14064, 14067** · **Etiqueta energètica, EPEAT, TCO Certified** · **ISR** · **Agències de qualificació ASG** · **SFDR i taxonomia europea** · **GRI, EFRAG, ISSB, SBTi, CDP**

---

## Per a pensar-hi

1. Una empresa publica que ha reduït un 20% la seua intensitat d'emissions per empleat. Quina altra dada necessites abans de felicitar-la?
2. Calcula el consum anual aproximat de l'aula on estàs i converteix-lo a CO₂e. Compara el resultat amb la petjada de fabricació d'un sol equip nou. Què conclous sobre la política de renovació?
3. Dues agències donen a la mateixa empresa una nota ASG molt diferent. Com ho investigaries per a decidir quina té més sentit?

---

## Fonts i per a saber-ne més

- GHG Protocol, estàndards corporatius: `ghgprotocol.org`
- MITECO, registre de petjada de carboni i factors d'emissió
- Red Eléctrica, dades del mix elèctric: `ree.es`
- ISO 14001:2015 i ISO 50001
- EMAS, Reglament (CE) 1221/2009
- Reglament (UE) 2019/2088 (SFDR) i Reglament (UE) 2020/852 (taxonomia)
- The Green Grid, definició de PUE i WUE
- CDP: `cdp.net` · SBTi: `sciencebasedtargets.org`
