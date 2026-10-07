# Idntik — Website (interim)

Four static pages, no build step needed to deploy, no dependencies. Built on the Idntik Style Guide 2026 (Rubik, `--off` background, `--red` accent, light only).

| File | Page |
|---|---|
| `index.html` | Home — hero, 5-step project brief, who we are, 4 stages, impact, clients, manifesto, contact |
| `about.html` | About — positioning, values, solutions, team with department filter |
| `contact.html` | Contact — channels, studio, contact form |
| `careers.html` | Careers — open roles, what to expect, open application |
| `styles.css` | All styling and animation |
| `site.js` | **All editable links and lists** (top of file) + shared behaviour |

## Run locally
Serve the folder: `python3 -m http.server 8000`, then open http://localhost:8000

## Edit content
- **Links, emails, WhatsApp, address:** top of `site.js`, in `IDNTIK_CONFIG`. Any value still starting with `[ADD_` shows on the page as a red dashed tag.
- **Company logo:** inline SVG in the header and footer, built on the logo's own pixel grid. Source files: `assets/idntik-logo.svg` (black), `assets/idntik-logo-white.svg`, `assets/idntik-logo.png`.
- **Client logos:** `IDNTIK_CONFIG.clients` → `{ name, logo:"assets/clients/x.svg" }`. Only clients who agreed. Set `totalClients` for the 008/060 counter.
- **Team:** `IDNTIK_CONFIG.team` → name, role, `dept`, and `photo` (each person's Cuber image in `assets/team/`).
- **Open roles:** `IDNTIK_CONFIG.jobs`. Delete a role to hide it; `applyUrl` can point to a form, otherwise "Apply" scrolls to the HR email.
- **Page text:** in each HTML file, written twice side by side: `<span class="en">…</span><span class="ar">…</span>`. Edit both.
- **Manifesto pairs** ("Systems over deliverables"…): in `site.js`, search `pairsEl`.

## Forms
The project brief (home) and contact form post JSON to `formEndpoint` in `IDNTIK_CONFIG`.
Easiest: a free Formspree form, or a Make/Zapier webhook writing to Google Sheets.
Until it is set, each form ends with a "Send on WhatsApp" button carrying the full message (needs `whatsappNumber`).

## SEO
Replace `[ADD_SITE_URL]` in every page `<head>` once the domain is live, (link previews use `assets/hero.jpg`).

## Deploy to GitHub Pages
1. Push this folder's contents to a repository's `main` branch (keep `.nojekyll`).
2. **Settings → Pages → Deploy from a branch → main / root.**
3. Live at `https://<user>.github.io/<repo>/` in a minute or two.

## Custom domain
1. **Settings → Pages → Custom domain** → enter the domain. GitHub adds a `CNAME` file.
2. DNS: four `A` records for the apex → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`; `CNAME` for `www` → `<user>.github.io`.
3. When DNS resolves, tick **Enforce HTTPS**.
