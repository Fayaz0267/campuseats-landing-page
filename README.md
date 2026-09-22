# CampusEats — Landing Page

The public marketing/landing page for CampusEats. This is a **separate**
React app from the existing CampusEats product (Student/Canteen/College
Admin/Super Admin portals) and its backend — it does not touch either.

```
CampusEats/
├── landing-page/   ← this project
├── frontend/       ← your existing CampusEats app (untouched)
└── backend/        ← your existing CampusEats backend (untouched)
```

## What's inside

- React 18 + Vite, plain CSS (no framework) — fast to run, nothing to configure.
- All 11 sections from the brief: navbar, hero, AI demo, one-platform
  cards, AI features, phone-first showcase, how-it-works, smart campus
  flow, dashboard preview, final CTA, footer.
- A working **AI demo** (`src/sections/AIDemo.jsx` +
  `src/services/aiSearch.js`): typing a craving runs a small intent
  extractor and filters a **demo menu** (`src/data/demoMenu.js`). It is
  wired so that flipping one env var (`VITE_USE_MOCK_AI=false`) switches
  it to call your real backend at `POST {VITE_API_URL}/ai/food-search`
  instead — no other code changes needed.
- Reduced-motion support, mobile nav, scroll-reveal on section content,
  a navbar that reacts to scroll.

## Install & run

```bash
cd landing-page
npm install
npm run dev        # http://localhost:5173
```

Production build:

```bash
npm run build       # outputs to dist/
npm run preview     # serve the build locally to sanity-check it
```

## Connecting to your existing app

Everything that points at the existing product lives in `.env` (copy
from `.env.example`) and is read in one place, `src/config.js`:

```bash
VITE_APP_URL=http://localhost:3000     # existing frontend
VITE_API_URL=http://localhost:5000/api # existing backend
VITE_LOGIN_PATH=/login                 # path on the existing frontend
VITE_START_PATH=/login                 # where "Start Ordering" goes
VITE_USE_MOCK_AI=true                  # false = call the real AI endpoint
```

**"Login"** and **"Get Started" / "Start Ordering"** are plain `<a>` tags
pointing at `${VITE_APP_URL}${VITE_LOGIN_PATH}` /
`${VITE_APP_URL}${VITE_START_PATH}` (see `src/config.js` → `LINKS`).
Clicking them does a normal browser navigation into your existing
frontend's own login/auth flow — there is no second auth system here.

For deployment, set `VITE_APP_URL` / `VITE_API_URL` to your real domains
at build time (Vercel/Netlify env vars, or a `.env.production` file).
Nothing is hardcoded.

## Wiring up the real AI search later

`src/services/aiSearch.js` already expects the real endpoint's shape:

```
POST /api/ai/food-search   { query: string }
  → { filters: [{ key, label }], results: [...menu items from MongoDB] }
```

The frontend never invents prices, stock or menu items — in mock mode it
only filters the local demo array; in real mode it just renders whatever
the backend returns. Set `VITE_USE_MOCK_AI=false` once that route exists.

## Notes

- Brand tokens (colors, radii, spacing, motion) live at the top of
  `src/styles/globals.css` — the one file to touch for site-wide visual
  tweaks.
- Nothing in this project modifies the existing frontend, backend,
  database, or auth. It's purely additive.
