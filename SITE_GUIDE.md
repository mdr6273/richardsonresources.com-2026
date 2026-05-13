# Richardson Resources — Site Guide
> Attach this file to any future Claude conversation to instantly restore full context.
> Last updated: 2025-05

---

## Business Overview
- **Company:** Richardson Resources
- **Owner:** One-person operation
- **Location:** San Diego, California
- **Founded:** 2005
- **Phone:** 760-468-4357
- **Email:** info@richardsonresources.com
- **Description:** Practical IT support and web development for small businesses (1–10 employees). No contracts, no complexity.

---

## Site Structure
```
index.html          → Home (hero, services overview, about preview, CTA)
who-we-help.html    → Who We Help (client types, fit checklist)
portfolio.html      → Portfolio (client websites with links)
our-services.html   → Services (4 services, feature grids)
about-us.html       → About (background, timeline, skills)
contact.html        → Contact (form, phone, email, FAQ)
privacy-policy.html → Privacy Policy (TODO: add)
sitemap.xml         → XML sitemap (update lastmod dates when pages change)
robots.txt          → Allows all crawlers, references sitemap
style.css           → All styles (single file)
nav.js              → Mobile nav toggle, active link marking, form handler
images/
  MainLogo.png      → Full logo (dark background, used in about page)
  LogoR.jpg         → Small R logo (used in nav and footer)
  favicon.jpg       → Browser favicon
```

---

## Brand Colors (CSS Variables)
```css
--navy:        #1C3A6B   /* Primary brand navy — headings, nav, hero */
--navy-dark:   #122848   /* Darker navy — hero gradient, footer */
--navy-light:  #2A4F8A   /* Lighter navy — hero gradient end */
--steel:       #8A9BB5   /* Mid steel — footer text, labels */
--steel-light: #C8D3E2   /* Light steel — hero body text */
--steel-pale:  #EEF1F6   /* Near-white tinted — alt section backgrounds */
--accent:      #2A6496   /* Action blue — buttons, links, CTAs */
--accent-light:#3A7AB0   /* Hover state for accent */
--text-dark:   #1A2133   /* Primary body text */
--text-mid:    #3D4F6B   /* Secondary body text */
--text-light:  #6A7A94   /* Labels, captions, helper text */
--border:      #DDE3EE   /* Card and section borders */
--off-white:   #F7F9FC   /* Alt section background */
```

---

## Typography
- **Display / Headings:** Barlow Condensed (700 weight) — used for h1–h4, nav links, buttons, labels
- **Body:** Barlow (300/400/500/600) — used for paragraphs and general text
- **Source:** Google Fonts (loaded via @import in style.css)

---

## Design Patterns
- **Section label:** Small uppercase text in `--accent` color, above headings. Uses `.section-label` class
- **Page heroes:** Navy gradient background, white heading, steel-light body text. `.page-hero` for inner pages, `.hero` for home
- **Cards:** White bg, `--border` border, `--radius-lg` (12px) radius, `--shadow-sm`. Hover lifts with `--shadow-md`
- **Buttons:** `.btn-primary` (blue fill), `.btn-outline` (white border, dark bg), `.btn-ghost` (border on light bg)
- **Stats bar:** Navy background, white numbers, steel labels
- **CTA band:** Navy gradient, white text, centered
- **Two-column layouts:** Use `.about-split` (grid 1fr 1fr, 72px gap, items center)

---

## Navigation
- Fixed top nav, 72px height, white background with backdrop blur
- Logo: LogoR.jpg + "Richardson Resources" text + "IT & Web Services" subtext
- Nav links: Who We Help | Portfolio | Our Services | About Us | [Contact Us button]
- Mobile: hamburger toggle reveals `.nav__mobile` dropdown
- Active state: JS in nav.js marks active link by matching current filename

---

## Footer
- Dark navy (`--navy-dark`) background
- 3-column grid: Brand description | Pages | Contact
- Bottom bar: copyright + Cloudflare notice
- Copyright year: update manually when needed (currently 2025)

---

## Services (4 core)
1. **Web Development & Hosting** — Custom sites, hosting, DNS, SSL, Cloudflare
2. **Microsoft 365 & Azure** — Setup, migration, management
3. **Cloud Security & Support** — Cloudflare, backups, MFA, access reviews
4. **IT Consulting & Project Work** — One-time projects, assessments, second opinions

---

## Portfolio
**File:** `portfolio.html`
**To add a new entry:** Copy the commented portfolio card block in the HTML and fill in:
- Client name
- URL (for the "View Site" button)
- Category tag (e.g., "Restaurant", "Law Firm", "Medical")
- Short description (1–2 sentences)
- Thumbnail: either an `<img>` tag with a screenshot, or leave the placeholder div with initials

---

## Tone & Voice
- Warm but professional — not corporate, not salesy
- Direct and honest — "this tends to work well for..." not "we're the best at..."
- Specific over vague — "Microsoft 365, Azure, Cloudflare" not "cloud solutions"
- No hype — avoid superlatives, buzzwords, exclamation points
- First person plural ("we") even though it's one person — consistent with existing copy

---

## Common Update Tasks

### Change a phone number or email
Edit every instance in: `index.html`, `who-we-help.html`, `our-services.html`, `about-us.html`, `contact.html`, `portfolio.html`, and `style.css` (footer). Also update SITE_GUIDE.md.

### Add a portfolio entry
Open `portfolio.html`. Find the comment `<!-- ADD NEW ENTRIES BELOW THIS LINE -->`. Copy the card block above it, paste below, fill in the new client info.

### Change the tagline / hero text
Open `index.html`. Find the `<section class="hero">`. Edit the `<h1>` and `<p>` tags.

### Add a new nav link
Edit the `.nav__links` div and the `.nav__mobile` div in every HTML file. Same link in both places.

### Update the copyright year
Search all HTML files for `© 2025` and replace with the new year.

### Change brand colors
Edit the `:root {}` block at the top of `style.css`. All colors are CSS variables so one change propagates everywhere.

---

## Hosting Notes
- Previous site was on Cloudflare Pages at `richardsonresources-com.pages.dev`
- Deploy by uploading the `site/` folder to Cloudflare Pages (or GitHub repo connected to Pages)
- No build step required — plain HTML/CSS/JS, deploy as-is

---

## Changelog
| Date    | Change | Notes |
|---------|--------|-------|
| 2025-05 | Initial build | Full site rebuild from Nicepage original. All new code, Barlow font, same brand colors. Added Portfolio page. |

