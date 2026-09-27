# Kartik Suresh Katke — Portfolio

Personal portfolio website for **Kartik Suresh Katke** — AI/ML Engineer & Full-Stack Developer, Computer Science Engineering student (AI & ML) at Bharat College of Engineering, University of Mumbai.

**Link:** [https://github.com/Kraverse](https://kraverse.github.io/Portfolio/)

## Features

- Premium editorial design — warm cream palette, coral accent, soft gradient blobs
- Fully responsive (1440px → 390px), no horizontal scroll
- Subtle scroll-reveal animations with `prefers-reduced-motion` support
- Live project preview (DhobiXpert) with graceful fallback
- Semantic HTML, accessible navigation, visible focus states, skip link
- SEO metadata + Open Graph tags + SVG favicon
- Zero dependencies — pure HTML, CSS and vanilla JavaScript

## Project structure

```
├── index.html          # Single-page site — all sections
├── css/
│   └── styles.css      # Design tokens + all component styles
├── js/
│   ├── data.js         # Editable data: projects, links, skills, timeline
│   └── main.js         # Rendering, nav, scroll-reveal animations
└── assets/
    ├── kartik-profile.png
    └── favicon.svg
```

All content (projects, social links, skills, learning timeline) lives in `js/data.js` — edit it without touching layout code.

## Run locally

No build step required. Open `index.html` directly, or serve the folder:

```bash
python -m http.server 8477
# → http://localhost:8477
```

## Deploy to Vercel

The site is a fully static project — Vercel auto-detects it:

- **Framework preset:** Other (static)
- **Build command:** none
- **Output directory:** `./` (project root)

Or deploy with the CLI:

```bash
npm i -g vercel
vercel --prod
```

## License

© 2026 Kartik Suresh Katke. All rights reserved.
