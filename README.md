<div align="center">
  <h1>ARAS <span style="color:#C9A84C;font-weight:300;">·</span></h1>
  <h3>Design Your Dreams</h3>
  <br>
  <p>
    <img src="https://img.shields.io/badge/Three.js-3D_Background-000000?style=for-the-badge&logo=three.js&logoColor=white"/>
    <img src="https://img.shields.io/badge/Responsive-✓-C9A84C?style=for-the-badge"/>
    <img src="https://img.shields.io/badge/Light_%2F_Dark_Mode-✓-C9A84C?style=for-the-badge"/>
    <img src="https://img.shields.io/badge/Vercel-Ready-000000?style=for-the-badge&logo=vercel&logoColor=white"/>
  </p>
</div>

---

## Overview

Interactive 3D landing page for **ARAS** — a construction and technical services company. Built with Three.js for the architectural/engineering-themed 3D background, featuring a full company profile with services, divisions, clients, and contact info.

### Live Demo

Deploy instantly to Vercel — see [Deployment](#deployment) below.

---

## Features

- **3D Architectural Background** — Blueprint-style grid floor, wireframe buildings, floating trusses, and measurement dots powered by Three.js
- **Dark / Light Mode** — Toggle between themes with a single click, preference saved to localStorage
- **Responsive Design** — Fully adaptive on mobile, tablet, and desktop
- **Interactive Service Cards** — Click any service to expand details
- **Client Showcase** — Grid layout with initial-based SVG badges
- **Smooth Animations** — Scroll-triggered fade-ins, mouse parallax on the 3D scene

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [Three.js](https://threejs.org/) | 3D interactive background |
| HTML5 / CSS3 | Structure & styling with CSS variables |
| Vanilla JavaScript | UI interactions, theme toggle, animations |
| [Vercel](https://vercel.com/) | Deployment (static site) |

---

## Sections

1. **Hero** — Brand intro with animated tagline
2. **About** — Company philosophy
3. **Mission** — Core values (4 pillars)
4. **Divisions** — Civil, Structural, Architectural, MEP, Electrical, Plumbing, HVAC
5. **Services** — 14 service categories with expandable details
6. **Quote** — "Imagination is the beginning of creation"
7. **Clients** — Trusted partners with branded badges
8. **Contact** — Phone & email with direct links

---

## Getting Started

### Prerequisites

- A modern web browser
- (Optional) Python or Node.js for local development server

### Local Development

```bash
# Clone the repository
git clone https://github.com/your-username/aras-landing.git
cd aras-landing

# Serve with Python
python -m http.server 3000

# Or with Node.js
npx http-server -p 3000
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Adding Images

Place project / service images in the `images/` folder and reference them in `index.html`:

```html
<img src="images/your-image.jpg" alt="Project name">
```

Images inside service cards are revealed on click (see service card markup).

---

## Customization

### Colors

Edit the CSS variables in `:root` inside `index.html`:

```css
:root {
  --gold: #C9A84C;       /* Primary accent */
  --dark: #0A0A0F;       /* Dark mode background */
  --text: #E8E8EC;       /* Body text */
  --text-muted: #8888A0; /* Secondary text */
}
```

Light mode overrides are in `html.light-mode`.

### 3D Scene

The Three.js scene is in the `<script>` block at the end of `index.html`. You can adjust:
- Building positions & sizes (the `buildingLayouts` array)
- Grid size & opacity
- Color palette (`blueprintColor`, `accentColor` variables)

---

## Deployment

### Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **Add New → Project** and select your repository
4. Vercel auto-detects it as a static site — click **Deploy**
5. Your site is live at `https://your-project.vercel.app`

```bash
# Or use the Vercel CLI
npm install -g vercel
vercel --prod
```

A `vercel.json` is included for static deployment configuration.

---

## Project Structure

```
aras-landing/
├── index.html        # Main landing page (single file)
├── images/           # Project & service images
├── vercel.json       # Vercel deployment config
└── README.md         # This file
```

---

## License

© 2026 ARAS — AL RIMAL AL SAFRA TECHNICAL SERVICES L.L.C.

---

<div align="center">
  <sub>Built with ❤️ by ARAS</sub>
  <br>
  <sub>📞 050-467 0636 &nbsp;·&nbsp; ✉️ alrimalts@hotmail.com</sub>
</div>
