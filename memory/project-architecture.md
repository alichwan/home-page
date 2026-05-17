---
name: project-architecture
description: PavelPedia portfolio build setup — Vite with HTML includes plugin, partials structure, i18n files, asset locations
metadata:
  type: project
---

Wikipedia-style personal portfolio page for Alex Pavel Medina Jorquera ("Pavel").

**Why:** Modularization for translation and section separation, enabling each article section to live in its own file.

**Build system:** Vite 5 with a custom `htmlIncludes` plugin in `vite.config.js` that resolves `<!-- #include src/partials/foo.html -->` comments at build time. Vercel runs `npm run build` and serves `dist/`.

**Structure:**
- `index.html` — slim shell with `#include` directives only (~60 lines)
- `src/partials/*.html` — one file per section (topbar, sidebar, article-tabs, article-head, infobox, lead, toc, early-life, education, career, research, skills, personal, references, external-links, categories, article-footer)
- `src/style.css` — all CSS, imported by `src/main.js`
- `src/main.js` — all JS (lang toggle, TOC collapse, tabs, search, print), imports i18n
- `src/i18n/en.js` and `src/i18n/es.js` — translation strings for JS-generated content
- `public/assets/` — portrait.png, portrait-casual.png, CV2026PavelMJ.pdf
- `public/tweaks-panel.jsx` — Babel CDN React library for the tweaks panel

**Translation system:** CSS `[data-lang="es"] .en { display: none }` pattern — bilingual `<span class="en">` / `<span class="es">` pairs in HTML; JS i18n files used for dynamically set text (TOC toggle label). Language dispatches a `langchange` CustomEvent so JS listeners can react.

**Tweaks panel:** React 18 + Babel CDN (not bundled by Vite). TweaksApp defined inline in index.html as `type="text/babel"`.

**How to apply:** When editing content, edit the relevant partial in `src/partials/`. When adding new JS strings, add to both i18n files. Run `npm run build` locally before deploying.
