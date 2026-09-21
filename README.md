# Sostenibilitat Aplicada al Sistema Productiu · 2n SMX

Materials del mòdul professional 1708, impartit a 2n del cicle de Sistemes Microinformàtics i Xarxes a l'IES Maria Enríquez de Gandia.

Lloc estàtic generat amb [Hugo](https://gohugo.io) i desplegat a Netlify. Sense tema extern ni dependències: les plantilles i els estils són propis, de manera que el lloc no es trenca quan s'actualitza res de fora.

## Estructura

```
content/
  _index.md            Pàgina d'inici
  calendari.md         Calendari de sessions del curs
  temes/
    _index.md          Índex de les unitats
    up1.md … up6.md    Les sis unitats de programació
layouts/               Plantilles HTML
static/css/main.css    Estils
hugo.toml              Configuració del lloc
netlify.toml           Configuració de desplegament
```

## Editar el contingut

Els temes són fitxers Markdown normals. La capçalera de cada fitxer controla les dades que es mostren:

```yaml
---
title: "La sostenibilitat i els seus reptes"
unitat: "UP1"
weight: 1          # ordre al menú
hores: 6           # sessions
periode: "15/09 - 20/10"
ra: ["RA1","RA2"]
toc: true          # índex de la pàgina
---
```

Per a afegir una unitat nova, copia un fitxer de `content/temes/`, canvia la capçalera i el `weight`.

## Provar-ho en local

Cal tindre Hugo instal·lat.

```bash
hugo server -D
```

I obrir `http://localhost:1313`.

## Publicar

Cada `git push` a la branca principal dispara un desplegament automàtic a Netlify. La versió de Hugo està fixada a `netlify.toml`; si es canvia en local, cal canviar-la també ahí.

**Després del primer desplegament**, posa la URL definitiva a `hugo.toml`:

```toml
baseURL = "https://el-nom-del-lloc.netlify.app/"
```

## Llicència

Contingut publicat sota [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.ca). Es pot reutilitzar i adaptar citant l'autoria i mantenint la mateixa llicència.

## Avís sobre les dades

Les xifres i les referències normatives estan actualitzades a setembre de 2026. La normativa europea de sostenibilitat està en transposició i canvia sovint; convé revisar-la cada curs.
