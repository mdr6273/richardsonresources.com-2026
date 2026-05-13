# Richardson Resources — Site Guide & Cold Start Document
> This file is the single source of truth for the Richardson Resources website.
> Attach this file (or upload the site zip) to any future Claude conversation to instantly restore full context.
> Last updated: 2026-05-13

---

## HOW TO START A NEW CONVERSATION
Follow these steps exactly at the start of any future session:

1. Start a new chat in the Richardson Resources Claude project
2. The site zip is a project asset — Claude can access it directly
3. Open with this message (copy/paste):

```
I need to make some updates to the Richardson Resources website.
Please unzip richardson-resources-site.zip, confirm the files you see,
and read SITE_GUIDE.md before we begin.
```

4. Claude will unzip, confirm the file list, and be fully up to speed
5. Describe your changes in plain English
6. Claude makes the changes and delivers a new zip
7. Download the new zip, test it, then replace the project asset zip with the new version

**That's the entire workflow.** No re-explaining the site, no re-uploading logos, no remembering what was done before.

---

## HOW TO UPDATE THE PROJECT ASSET ZIP
After receiving an updated zip from Claude:
1. Download it
2. Test it locally or deploy to Cloudflare Pages
3. In the Claude project, delete the old zip and upload the new one
4. The project is now current for the next conversation

---

## BUSINESS OVERVIEW
- **Company:** Richardson Resources
- **Owner:** One-person operation
- **Location:** San Diego, California
- **Founded:** 2005
- **Phone:** 760-468-4357
- **Email:** info@richardsonresources.com
- **Live site:** https://www.richardsonresources.com
- **Staging/old site:** https://richardsonresources-com.pages.dev
- **Hosting:** Cloudflare Pages (deploy by uploading site/ folder, no build step)
- **Description:** Practical IT support and web development for small businesses (1–10 employees). No contracts, no complexity.

---

## SITE STRUCTURE
```
index.html          → Home
who-we-help.html    → Who We Help
portfolio.html      → Portfolio
our-services.html   → Our Services
about-us.html       → About Us
contact.html        → Contact
privacy-policy.html → Privacy Policy
sitemap.xml         → XML sitemap (update lastmod dates when pages change)
robots.txt          → Allows all crawlers, references sitemap
style.css           → All styles (single stylesheet, CSS variables at top)
nav.js              → Mobile nav, active links, dynamic copyright year, form handler
images/
  Logoh.jpg             → Header nav logo
  logof.jpg             → Footer logo
  MainLogo.png          → Full logo on dark background (about page)
  favicon.ico           → Browser favicon (manually added)
  microsoft365.jpg      → Microsoft 365 vendor logo
  microsoftazure.jpg    → Microsoft Azure vendor logo
  amazonaws.jpg         → AWS vendor logo
  cloudflare.jpg        → Cloudflare vendor logo
  og-image.jpg          → Social sharing image 1200x630px (manually added when ready)
  hero-home.jpg         → Home page hero background
  about-team.jpg        → Home about section
  hero-who-we-help.jpg  → Who We Help hero
  hero-services.jpg     → Our Services hero
  service-webdev.jpg    → Web dev service section
  service-microsoft.jpg → Microsoft 365 service section
  service-security.jpg  → Security service section
  hero-about.jpg        → About Us hero
  about-consultation.jpg→ About Us intro section
  san-diego.jpg         → San Diego skyline (About page)
  hero-portfolio.jpg    → Portfolio hero
  hero-contact.jpg      → Contact hero
404.html            → Custom 404 page
_redirects          → Cloudflare Pages redirect rules for old Nicepage URLs
SITE_GUIDE.md       → This file
```

### Manually added files (not auto-generated — must be in zip)
These files cannot be downloaded by Claude due to network restrictions.
They must be present in the zip for the site to be complete:
- `images/favicon.ico` — from https://richardsonresources-com.pages.dev/images/favicon.ico
- `images/og-image.jpg` — 1200x630px social sharing image (to be created)
- All 12 stock photos listed in STOCK IMAGES section below

---

## STOCK IMAGE DOWNLOAD LINKS
Save each file to images/ with the exact filename shown:

| Filename | Download URL |
|---|---|
| hero-home.jpg | https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80 |
| about-team.jpg | https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80 |
| hero-who-we-help.jpg | https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=80 |
| hero-services.jpg | https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80 |
| service-webdev.jpg | https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80 |
| service-microsoft.jpg | https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=800&q=80 |
| service-security.jpg | https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80 |
| hero-about.jpg | https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1400&q=80 |
| about-consultation.jpg | https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80 |
| san-diego.jpg | https://images.unsplash.com/photo-1622572090318-babb0ca046de?w=800&q=80 |
| hero-portfolio.jpg | https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1400&q=80 |
| hero-contact.jpg | https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1400&q=80 |

---

## BRAND COLORS (CSS Variables)
```css
--navy:        #1C3A6B   /* Primary brand navy */
--navy-dark:   #122848   /* Darker navy — footer, hero gradient */
--navy-light:  #2A4F8A   /* Lighter navy — hero gradient end */
--steel:       #8A9BB5   /* Mid steel — footer text */
--steel-light: #C8D3E2   /* Light steel — hero body text */
--steel-pale:  #EEF1F6   /* Near-white tinted — alt sections */
--accent:      #2A6496   /* Action blue — buttons, links */
--accent-light:#3A7AB0   /* Hover state */
--text-dark:   #1A2133   /* Primary body text */
--text-mid:    #3D4F6B   /* Secondary body text */
--text-light:  #6A7A94   /* Labels, captions */
--border:      #DDE3EE   /* Card and section borders */
--off-white:   #F7F9FC   /* Alt section background */
```

---

## TYPOGRAPHY
- **Display / Headings:** Barlow Condensed (700) — h1–h4, nav, buttons, labels
- **Body:** Barlow (300/400/500/600) — paragraphs, general text
- **Source:** Google Fonts via @import in style.css

---

## DESIGN PATTERNS
- **Section label:** Small uppercase accent text above headings. Class: `.section-label`
- **Page heroes:** Navy gradient bg, white heading, steel-light body. `.page-hero` for inner pages, `.hero` for home
- **Hero images:** CSS background-image with navy gradient overlay. Pattern:
  `style="background-image: linear-gradient(135deg, rgba(18,40,72,0.93) 0%, rgba(28,58,107,0.87) 100%), url('images/hero-name.jpg'); background-size: cover; background-position: center;"`
- **Cards:** White bg, `--border` border, 12px radius, `--shadow-sm`. Hover lifts
- **Buttons:** `.btn-primary` (blue fill), `.btn-outline` (white border on dark), `.btn-ghost` (border on light)
- **Two-column:** `.about-split` (1fr 1fr, 72px gap, align center)
- **Alt sections:** `.section--alt` for off-white background
- **Stats bar:** `.stats-bar` navy bg
- **CTA band:** `.cta-band` navy gradient, centered

---

## NAVIGATION
- Fixed top, 72px height, white backdrop-blur
- Logo: `Logoh.jpg` + "Richardson Resources" + "IT & Web Services" subtext
- Links: Who We Help | Portfolio | Our Services | About Us | [Contact Us button]
- Mobile: hamburger → `.nav__mobile` dropdown
- Internal links use clean URLs: `/about-us` not `about-us.html`

---

## FOOTER
- Dark navy (`--navy-dark`) background
- 3 columns: Brand description | Pages | Contact
- Copyright: `© <span class="copyright-year">1973</span>` — JS updates to current year. 1973 = JS-disabled fallback (intentional)

---

## HEAD TAG STANDARD (REQUIRED ON EVERY PAGE)
Every page must have this complete set in `<head>`:
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Page Title | Richardson Resources</title>
<meta name="description" content="Page-specific description">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:site_name" content="Richardson Resources">
<meta property="og:title" content="Page Title | Richardson Resources">
<meta property="og:description" content="Page-specific description">
<meta property="og:url" content="https://www.richardsonresources.com/page-url">
<meta property="og:image" content="https://www.richardsonresources.com/images/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Richardson Resources — Small Business IT & Web Services">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Page Title | Richardson Resources">
<meta name="twitter:description" content="Page-specific description">
<meta name="twitter:image" content="https://www.richardsonresources.com/images/og-image.jpg">
<meta name="twitter:image:alt" content="Richardson Resources — Small Business IT & Web Services">

<!-- Theme & Icons -->
<meta name="theme-color" content="#1C3A6B">
<link rel="icon" href="images/favicon.ico" type="image/x-icon">
<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
<link rel="canonical" href="https://www.richardsonresources.com/page-url">
<link rel="sitemap" type="application/xml" href="/sitemap.xml">
<link rel="stylesheet" href="style.css">
```

---

## SERVICES (4 core — do not add others without instruction)
1. **Web Development & Hosting** — Custom sites, Cloudflare Pages, DNS, SSL
2. **Microsoft 365 & Azure** — Setup, migration, ongoing management
3. **Cloud Security & Support** — Cloudflare, backups, MFA, access reviews
4. **IT Consulting & Project Work** — One-time projects, assessments, second opinions

**Technology partners shown:** Microsoft 365, Microsoft Azure, AWS, Cloudflare
**Do not add other vendor logos or product references without explicit instruction.**

---

## PORTFOLIO
**To add a new entry, provide:**
1. Client/business name
2. URL of live site
3. One sentence description
4. Category tag (e.g. "Plumbing", "Law Firm", "Consulting")
5. Screenshot URL or uploaded image (optional — initials placeholder used if none)

**Add new cards below this comment in portfolio.html:**
`<!-- ADD NEW ENTRIES BELOW THIS LINE -->`

---

## TONE & VOICE
- Warm but professional — not corporate, not salesy
- Direct and honest — specific over vague
- No hype — no superlatives, buzzwords, or exclamation points
- First person plural ("we") throughout
- Technology named specifically: "Microsoft 365, Azure, Cloudflare" not "cloud solutions"

---

## PRIVACY POLICY
- Effective Date: April 20, 2026
- Business Name: Richardson Resources
- Location: California, United States
- **Do not change any wording without explicit instruction from the owner**

---

## SITEMAP
- Update `lastmod` dates in `sitemap.xml` whenever a page changes significantly
- After go-live, submit to Google Search Console: `https://www.richardsonresources.com/sitemap.xml`

---

## GO-LIVE CHECKLIST
Tasks after deploying — not code changes, done in dashboards or browsers:

### Cloudflare Dashboard
- [ ] **Transform Rule — lowercase URLs:** Rules → Transform Rules → URL Rewrite. Create rule to lowercase URI path for all requests. Makes /About-Us = /about-us. One rule, no code needed.
- [ ] **Verify `_redirects` works** by visiting `/who-we-help.html` — should redirect to `/who-we-help`

### Google Search Console
- [ ] Add property for `https://www.richardsonresources.com`
- [ ] Verify ownership (HTML meta tag — Claude can generate, add to index.html)
- [ ] Submit sitemap: `https://www.richardsonresources.com/sitemap.xml`

### PageSpeed / Core Web Vitals
- [ ] Run through https://pagespeed.web.dev — target 90+ mobile and desktop
- [ ] Main risk: large hero images. If score is low, compress or convert to WebP

### Contact Form
- [ ] Replace mailto fallback in nav.js with POST URL
- [ ] Add Cloudflare Turnstile for spam protection

---

## COMMON UPDATE TASKS

### Add a portfolio entry
`portfolio.html` → find `<!-- ADD NEW ENTRIES BELOW THIS LINE -->` → paste card block → fill in details.

### Change phone or email
Search and update all HTML files. Update this guide too.

### Change home page hero text
`index.html` → `<section class="hero">` → edit `<h1>` and `<p>`.

### Add a new page
1. Copy closest existing page as template
2. Update all meta tags, canonical URL, og:url
3. Add to nav in ALL pages (both `.nav__links` and `.nav__mobile`)
4. Add to footer in ALL pages
5. Add to `sitemap.xml`
6. Follow complete head tag standard above

### Replace a stock photo
Drop replacement into `images/` with exact same filename. No code changes needed.

### Update OG/social image
Replace `images/og-image.jpg` with new 1200x630px file. No code changes needed.

### Update copyright fallback year
Search all HTML for `copyright-year">` and update the number in the span.

---

## CHANGELOG
| Date | Change |
|---|---|
| 2026-05-13 | Full site rebuilt from Nicepage original. Plain HTML/CSS/JS, Barlow font, same brand colors. |
| 2026-05-13 | Added Portfolio page — new, not in original site. |
| 2026-05-13 | Added 12 Unsplash stock images. Local filenames set, manual download required. |
| 2026-05-13 | Vendor logos added — microsoft365, microsoftazure, amazonaws, cloudflare. |
| 2026-05-13 | Removed all WordPress references. Replaced with Cloudflare Pages. |
| 2026-05-13 | Clean URLs — all internal links use /page-name not page-name.html. |
| 2026-05-13 | sitemap.xml and robots.txt added. |
| 2026-05-13 | Privacy Policy page added — exact text from live site, no wording changes. |
| 2026-05-13 | favicon.ico — all pages updated to reference .ico. Manual file placement required. |
| 2026-05-13 | Logo split — Logoh.jpg header, logof.jpg footer, all pages. |
| 2026-05-13 | Dynamic copyright year via JS. Fallback: 1973 (intentional). |
| 2026-05-13 | Complete OG + Twitter Card tags on all 7 pages. og-image.jpg = 1200x630px (manual). |
| 2026-05-13 | SITE_GUIDE.md upgraded to full cold-start document. |
| 2026-05-13 | Schema markup (JSON-LD LocalBusiness) added to index.html. |
| 2026-05-13 | Keywords meta tags removed from all pages. |
| 2026-05-13 | 404.html custom error page added. |
| 2026-05-13 | Scroll to top button added to privacy-policy.html only. |
| 2026-05-13 | _redirects file added for old Nicepage URLs. |
| 2026-05-13 | Go-live checklist added to SITE_GUIDE (Search Console, PageSpeed, Cloudflare Transform Rule, contact form). |
