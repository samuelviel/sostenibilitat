# Sostenibilitat Aplicada al Sistema Productiu · 2n SMX

Web del mòdul **1708 · Sostenibilitat Aplicada al Sistema Productiu** (curs 2026-2027), IES Maria Enríquez de Gandia.
Professor: Samuel Viel Malonda.

Feta amb [MkDocs](https://www.mkdocs.org/) i el tema [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/), amb la mateixa estructura que el curs de Python.

## Publicar a GitHub Pages

1. Puja tot el contingut d'aquesta carpeta, **inclosa la carpeta oculta `.github`**.
2. Comprova a `mkdocs.yml` que `site_url`, `repo_url` i `repo_name` coincidixen amb el nom real del repositori.
3. **Settings → Pages → Source: GitHub Actions.**
4. Cada `push` a `main` executa l'acció **Publica la web**. Pots seguir-la a la pestanya *Actions*.

> A diferència del curs de Python, aquest flux **no** usa la branca `gh-pages`: publica directament amb GitHub Actions.

## Treballar en local

```bash
python3 -m venv .venv
source .venv/bin/activate          # Windows: .venv\Scripts\activate
pip install -r requirements.txt
mkdocs serve                       # http://127.0.0.1:8000, es recarrega en guardar
```

Abans de pujar canvis, `mkdocs build --strict` avisa d'enllaços trencats.

## Estructura

```
mkdocs.yml                 Configuració i menú
docs/
  index.md                 Portada (pròxima classe, temari, FAQ)
  guia.md                  Com funciona: RA, totes les tasques i pesos, assistència, FE
  calendari.md             Calendari (es genera des de curs.js)
  recursos.md              Fonts, normativa, com preguntar
  unitats/up1 … up6.md     Teoria, activitats d'aula, tasques d'Aules i autoavaluació
  assets/js/curs.js        ← DADES DEL CURS: sessions, festius, horaris, correu
  assets/js/curs-app.js    Calendari, pròxima classe i qüestionaris
  assets/css/curs.css      Estils propis (paleta verda)
.github/workflows/publica.yml
```

## Canvis habituals

| Vull… | Edita… |
|---|---|
| Moure una sessió o canviar-ne el tema | `docs/assets/js/curs.js`, llista `sessions` |
| Afegir un festiu | `docs/assets/js/curs.js`, llista `noLectius` |
| Canviar una tasca o un qüestionari | `docs/unitats/upN.md` |
| Canviar colors | `docs/assets/css/curs.css`, variables del principi |

Si es canvia el pes d'una tasca, cal actualitzar-lo també a la taula de `docs/guia.md`. Cada RA ha de sumar el 100%.

## Blocs especials

- `!!! tasca "A1.1 · Títol"` → targeta de tasca d'Aules
- `!!! smx "Al taller"` → nota d'aplicació al perfil SMX
- ```` ```quiz ```` amb JSON → qüestionari d'autoavaluació (`p` pregunta, `o` opcions, `c` índex de la correcta començant per 0, `e` explicació, `pista` opcional)

## Llicència

[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.ca).
