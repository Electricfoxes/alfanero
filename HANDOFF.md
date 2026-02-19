# ALFA NERO — Handoff Notes

## What This Is
Next.js 15 rebuild of the ALFA NERO superyacht website, originally built on Manus AI.

**Original Manus site:** https://alfanero-imduai6s.manus.space  
(May go down — reference files saved in `../alfa-nero-reference/`)

## Stack
- Next.js 16 (App Router)
- Tailwind CSS v4
- TypeScript
- Static export (all pages SSG)

## Status: ~85% Complete

### What's Done ✅
- All pages built with content (20+ routes)
- Hero section with video background
- Responsive layout
- SEO metadata on all pages
- Sitemap + robots.txt
- Footer with nav links + specs
- Deployed to Vercel: project `alfa-nero`
- GitHub: `Electricfoxes/alfanero`

### What Needs Fixing ⚠️
1. **Navigation** — Currently flat links. Original uses dropdown menus: "Overview ▾", "Design & Build ▾", "Gallery"
2. **Homepage layout** — Needs to match original section order: Oceanco Icon intro → Interior cards (Master Cabin, Guest Cabins, Wellness) → Pool-to-Helipad feature → Tech specs grid → Outdoor & Adventure cards
3. **Footer** — Original has 3 columns (description, Navigate, Information + Download Brochure). Ours has 4.
4. **Remove "Made with Manus"** — obviously
5. **Self-host images** — Currently pointing to `files.manuscdn.com`. Download and move to `/public/images/` before Manus CDN dies.

## Reference Files
In `../alfa-nero-reference/`:
- `index.html` — Full extracted HTML from Manus site
- `index.css` — Complete stylesheet
- `index.js` — Bundled JS (React SPA source)
- `assets/` — Extracted JS page components
- `image-urls.txt` — All image/video URLs from Manus CDN

## Key URLs
- Vercel: https://alfa-nero.vercel.app (check if live)
- Manus original: https://alfanero-imduai6s.manus.space
- Canonical domain: alfaneroyacht.com

## Running Locally
```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # Static build
```
