# INFRONIXX Technologies & Solutions LLP — Cybersecurity Website

A complete, modern, responsive corporate website for **INFRONIXX Technologies**, built with **React 18, Vite, and React Router v6**. Delivers a futuristic visual identity with dark cyber backgrounds, electric cyan accents, professional typography, subtle glassmorphism, and deep technical focus on zero-trust architecture, cybersecurity services, and the Indian DPDP Act, 2023.

---

## 🚀 Quick Start (Development)

Make sure [Node.js](https://nodejs.org/) is installed.

```bash
# 1. Install dependencies (if not already installed)
npm install

# 2. Run local development server
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## 📦 Production Build

```bash
# Build production bundle to /dist
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```text
├── public/                      # Static assets served at root
│   ├── assets/
│   │   ├── images/              # Logos, DPDP diagram, graphics, building banner
│   │   └── icons/               # SVG cybersecurity icons
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Glass navigation, drawer, responsive active states
│   │   ├── Footer.jsx           # 5-column corporate footer, dynamic year
│   │   └── ScrollToTop.jsx      # Route-change & anchor hash scroll restoration
│   ├── pages/
│   │   ├── HomePage.jsx         # Hero, stats, 8 services, DPDP banner, process, full-width CTA
│   │   ├── AboutPage.jsx        # Company identity, mission, vision, expertise
│   │   ├── ServicesPage.jsx     # 9 in-depth cybersecurity services with hash anchors
│   │   ├── DPDPPage.jsx         # India DPDP Act 2023 framework & advisory
│   │   ├── ContactPage.jsx      # Channels, capability grid, office card with opacity control
│   │   └── NotFoundPage.jsx     # Custom 404 page
│   ├── styles/
│   │   └── style.css            # Complete cyber design system
│   ├── App.jsx                  # React Router routes & legacy .html redirects
│   └── main.jsx                 # React root entry point
├── backup-static/               # Original static HTML/CSS/JS backup
├── package.json                 # Dependencies & build scripts
├── vite.config.js               # Vite bundler configuration
└── README.md
```

---

## 🎨 Design System & Palette

- **Primary Background:** `#020B19` (Deep Cyber Navy)
- **Secondary Background:** `#06162B` (Dark Tech Blue)
- **Card / Surface Background:** `#071C33` / Glassmorphism with `backdrop-filter: blur(12px)`
- **Primary Accent:** `#00BFFF` (Electric Blue / Deep Sky Blue)
- **Secondary Accent:** `#087DFF` (Vibrant Corporate Tech Blue)
- **Main Text:** `#F5F8FC`
- **Muted Text:** `#A8B8CC`
- **Subtle Borders:** `rgba(0, 191, 255, 0.14)` and `rgba(8, 125, 255, 0.22)`
- **Typography:** `Inter` font with system fallbacks, `JetBrains Mono` for tags

---

## 🌐 Deploy to Vercel / Netlify / Cloudflare Pages

### Option 1: Vercel (Recommended)
1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository `cyber-security-website`.
4. Framework preset **Vite** will be detected automatically.
5. Click **Deploy**.

### Option 2: Netlify
1. Connect repository in [netlify.com](https://www.netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Click **Deploy site**.
