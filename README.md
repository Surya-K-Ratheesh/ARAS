<div align="center">
  <h1>ARAS <span style="color:#C9A84C;font-weight:300;">·</span></h1>
  <h3>Design Your Dreams</h3>
  <br>
  <p>
    <img src="https://img.shields.io/badge/Gemini-AI_Chatbot-8E75B2?style=for-the-badge&logo=google&logoColor=white"/>
    <img src="https://img.shields.io/badge/Responsive-✓-C9A84C?style=for-the-badge"/>
    <img src="https://img.shields.io/badge/Light_%2F_Dark_Mode-✓-C9A84C?style=for-the-badge"/>
    <img src="https://img.shields.io/badge/Vercel-Ready-000000?style=for-the-badge&logo=vercel&logoColor=white"/>
  </p>
</div>

---

## Overview

Interactive landing page for **ARAS** — a construction and technical services company. Featuring a full company profile with services, divisions, clients, and contact info, along with a built-in AI chatbot to instantly answer client queries.

### Live Demo

Deploy instantly to Vercel — see [Deployment](#deployment) below.

---

## Features

- **AI Chatbot** — Intelligent virtual assistant powered by the Gemini API to instantly answer company-related queries
- **Modern Static Design** — Clean, performant, and professional static background
- **Dark / Light Mode** — Toggle between themes with a single click, preference saved to localStorage
- **Responsive Design** — Fully adaptive on mobile, tablet, and desktop
- **Interactive Service Cards** — Click any service to expand details
- **Client Showcase** — Grid layout with initial-based SVG badges
- **Smooth Animations** — Scroll-triggered fade-ins, mouse parallax on the 3D scene

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [Gemini API](https://aistudio.google.com/) | AI Chatbot capabilities |
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

### Environment Variables

Create a `.env` file in the root directory and add your Gemini API Key for the chatbot to work:

```env
GEMINI_API_KEY=your_api_key_here
```

### Local Development

To run the site locally along with the serverless functions (for the chatbot), use the Vercel CLI:

```bash
# Clone the repository
git clone https://github.com/your-username/aras-landing.git
cd aras-landing

# Install Vercel CLI if you haven't already
npm i -g vercel

# Run local development server
vercel dev
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

### AI Chatbot Prompt

The AI instructions and knowledge base are located in `api/chat.js`. You can modify the system prompt to change the bot's behavior or add new services to its knowledge base.

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
├── api/
│   └── chat.js       # Vercel serverless function for AI Chatbot
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
