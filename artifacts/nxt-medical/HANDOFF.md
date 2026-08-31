# NXT Medical Marketing Site — Agent Handoff Guide

This is a standalone marketing website for NXT Medical's remote patient care division.
It is built with React + Vite + TypeScript + Tailwind CSS and is structured for safe,
autonomous editing by AI agents (Quip and associated agents).

---

## Where Page Copy Lives

All content is centralized in the `src/content/` directory:

| File | What It Contains |
|------|-----------------|
| `src/content/site.ts` | Site name, contact details, nav items, footer links, CTA labels |
| `src/content/services.ts` | RPM, CCM, RTM service descriptions, benefits, process steps, partner benefits |
| `src/content/faqs.ts` | FAQ arrays organized by page (home, remoteCareOverview, rpm, ccm, rtm) |

**To update copy:** Edit the relevant content file. Components pull from these files at build time.
Do NOT hardcode copy directly in page or component files.

---

## How to Add or Edit Pages

### Adding a new page:

1. Create `src/pages/your-page.tsx`
2. Import and compose reusable section components from `src/components/sections/`
3. Add a `<Helmet>` block at the top with a unique `<title>` and `<meta name="description">`
4. Add the route in `src/App.tsx` inside the `<Switch>` block
5. Add the nav link in `src/content/site.ts` under `navItems` if it should appear in the nav

### Editing an existing page:

All pages live in `src/pages/`. Each page imports its content from `src/content/` —
so most copy changes only require editing the content files, not the page files.

---

## Reusable Components

All reusable components live in `src/components/`:

### Layout Components (`src/components/layout/`)
- `Header.tsx` — Sticky top navigation with mobile menu
- `Footer.tsx` — Full-width footer with links and contact info

### Section Components (`src/components/sections/`)
- `Hero.tsx` — Full-width dark hero section with headline, subheadline, and CTAs
- `ServiceCard.tsx` — Card for displaying a service (RPM/CCM/RTM) with link
- `FAQSection.tsx` — Accordion FAQ list with heading/subheading
- `CTABand.tsx` — Full-width dark CTA call-to-action strip at bottom of pages
- `BenefitsGrid.tsx` — Grid of benefit items with icons
- `ProcessSteps.tsx` — Numbered horizontal step process display
- `TrustStrip.tsx` — Four-column value strip (used on homepage)

**Pattern:** Every page uses the same section components in different configurations.
To add a new section type, add a new component to `src/components/sections/`.

---

## Design System

The visual design system is defined in `src/index.css` as CSS custom properties.

Key design tokens:
- **Primary color:** `--primary: 221 83% 53%` (NXT Blue / blue-600)
- **Background:** white (`0 0% 100%`)
- **Dark sections:** `bg-gray-950` (hero, footer, CTA bands)
- **Font:** Inter (loaded via `index.html`)
- **Border radius:** `0.5rem`

To change the brand color across the entire site: update `--primary` in `src/index.css`.

---

## SEO Notes

- Every page has a `<Helmet>` block with a unique `title` and `meta description`
- Pages use one `<h1>` (inside the Hero) and logical `h2`/`h3` heading hierarchy
- Internal links between service pages are present throughout
- No keyword stuffing — copy is written for clarity first

---

## Contact Details

Contact details are stored in `src/content/site.ts` under `siteConfig.contact`:

```ts
contact: {
  phone: "[PHONE_PLACEHOLDER]",
  email: "[EMAIL_PLACEHOLDER]",
}
```

Replace these placeholders with real contact information. They appear in the footer
and on the Contact page automatically.

---

## Tech Stack

- React 18 + Vite 7
- TypeScript
- Tailwind CSS v4
- Wouter (lightweight client-side routing)
- react-helmet-async (SEO meta tags)
- Lucide React (icons)
- No backend required — static marketing site
