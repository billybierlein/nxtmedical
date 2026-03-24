# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   ├── api-server/         # Express API server
│   └── nxt-medical/        # NXT Medical marketing website (React + Vite)
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts (single workspace package)
│   └── src/                # Individual .ts scripts, run via `pnpm --filter @workspace/scripts run <script>`
├── pnpm-workspace.yaml     # pnpm workspace (artifacts/*, lib/*, lib/integrations/*, scripts)
├── tsconfig.base.json      # Shared TS options (composite, bundler resolution, es2022)
├── tsconfig.json           # Root TS project references
└── package.json            # Root package with hoisted devDeps
```

## NXT Medical Marketing Site

### Overview

Static marketing website for NXT Medical's remote patient care division.
Located at `artifacts/nxt-medical/`. Served at the root path `/`.

### Tech Stack

- React 18 + Vite 7 + TypeScript
- Tailwind CSS v4
- Wouter (client-side routing)
- react-helmet-async (SEO)
- Lucide React (icons)
- No backend needed — pure frontend/static

### Key Files

- `src/content/site.ts` — Nav, footer links, CTA labels, contact info
- `src/content/services.ts` — RPM, CCM, RTM service content
- `src/content/faqs.ts` — FAQ content per page
- `src/content/forms.ts` — GoHighLevel form embed placeholders
- `src/App.tsx` — Router with all 7 pages
- `src/index.css` — Design system tokens (colors, typography, radius)
- `HANDOFF.md` — Full agent handoff documentation

### Pages

| Route | File |
|-------|------|
| `/` | `src/pages/home.tsx` |
| `/remote-care` | `src/pages/remote-care.tsx` |
| `/rpm` | `src/pages/rpm.tsx` |
| `/ccm` | `src/pages/ccm.tsx` |
| `/rtm` | `src/pages/rtm.tsx` |
| `/about` | `src/pages/about.tsx` |
| `/contact` | `src/pages/contact.tsx` |
| `/for-chiropractors` | `src/pages/for-chiropractors.tsx` |
| `/who-we-serve` | `src/pages/who-we-serve.tsx` |

### Reusable Components

All section components in `src/components/sections/`:
- `Hero` — Dark hero with headline/CTAs
- `ServiceCard` — RPM/CCM/RTM card
- `FAQSection` — Accordion FAQ
- `FormEmbed` — GHL form wrapper
- `CTABand` — Bottom CTA strip
- `BenefitsGrid` — Benefit item grid
- `ProcessSteps` — Numbered steps
- `TrustStrip` — Value strip (homepage)
- `GoogleSchedulingButton` — Google Calendar appointment scheduling button (renders on all "Book a Demo" CTAs)

Layout in `src/components/layout/`: `Header`, `Footer`.

### Google Calendar Scheduling

All "Book a Demo" buttons use the `GoogleSchedulingButton` component (`src/components/GoogleSchedulingButton.tsx`), which loads Google's scheduling button script and renders an inline booking widget. The scheduling URL is hardcoded in the component. The contact page also has a full calendar iframe embed for inline appointment scheduling. The `ctas.bookDemoHref` in `src/content/site.ts` stores the short sharing link for fallback use.

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references. This means:

- **Always typecheck from the root** — run `pnpm run typecheck` (which runs `tsc --build --emitDeclarationOnly`). This builds the full dependency graph so that cross-package imports resolve correctly. Running `tsc` inside a single package will fail if its dependencies haven't been built yet.
- **`emitDeclarationOnly`** — we only emit `.d.ts` files during typecheck; actual JS bundling is handled by esbuild/tsx/vite...etc, not `tsc`.
- **Project references** — when package A depends on package B, A's `tsconfig.json` must list B in its `references` array. `tsc --build` uses this to determine build order and skip up-to-date packages.

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages that define it
- `pnpm run typecheck` — runs `tsc --build --emitDeclarationOnly` using project references

## Packages

### `artifacts/nxt-medical` (`@workspace/nxt-medical`)

NXT Medical marketing website. Frontend-only React + Vite application.
- Entry: `src/main.tsx`
- App: `src/App.tsx` — routing and layout wrapper
- Content: `src/content/` — centralized copy/config files
- Components: `src/components/sections/` and `src/components/layout/`
- Pages: `src/pages/`
- `pnpm --filter @workspace/nxt-medical run dev` — dev server
- `pnpm --filter @workspace/nxt-medical run build` — static build

### `artifacts/api-server` (`@workspace/api-server`)

Express 5 API server. Routes live in `src/routes/` and use `@workspace/api-zod` for request and response validation and `@workspace/db` for persistence.

- Entry: `src/index.ts` — reads `PORT`, starts Express
- App setup: `src/app.ts` — mounts CORS, JSON/urlencoded parsing, routes at `/api`
- Routes: `src/routes/index.ts` mounts sub-routers; `src/routes/health.ts` exposes `GET /health` (full path: `/api/health`)
- Depends on: `@workspace/db`, `@workspace/api-zod`
- `pnpm --filter @workspace/api-server run dev` — run the dev server
- `pnpm --filter @workspace/api-server run build` — production esbuild bundle (`dist/index.cjs`)
- Build bundles an allowlist of deps (express, cors, pg, drizzle-orm, zod, etc.) and externalizes the rest

### `lib/db` (`@workspace/db`)

Database layer using Drizzle ORM with PostgreSQL. Exports a Drizzle client instance and schema models.

- `src/index.ts` — creates a `Pool` + Drizzle instance, exports schema
- `src/schema/index.ts` — barrel re-export of all models
- `src/schema/<modelname>.ts` — table definitions with `drizzle-zod` insert schemas (no models definitions exist right now)
- `drizzle.config.ts` — Drizzle Kit config (requires `DATABASE_URL`, automatically provided by Replit)
- Exports: `.` (pool, db, schema), `./schema` (schema only)

Production migrations are handled by Replit when publishing. In development, we just use `pnpm --filter @workspace/db run push`, and we fallback to `pnpm --filter @workspace/db run push-force`.

### `lib/api-spec` (`@workspace/api-spec`)

Owns the OpenAPI 3.1 spec (`openapi.yaml`) and the Orval config (`orval.config.ts`). Running codegen produces output into two sibling packages:

1. `lib/api-client-react/src/generated/` — React Query hooks + fetch client
2. `lib/api-zod/src/generated/` — Zod schemas

Run codegen: `pnpm --filter @workspace/api-spec run codegen`

### `lib/api-zod` (`@workspace/api-zod`)

Generated Zod schemas from the OpenAPI spec (e.g. `HealthCheckResponse`). Used by `api-server` for response validation.

### `lib/api-client-react` (`@workspace/api-client-react`)

Generated React Query hooks and fetch client from the OpenAPI spec (e.g. `useHealthCheck`, `healthCheck`).

### `scripts` (`@workspace/scripts`)

Utility scripts package. Each script is a `.ts` file in `src/` with a corresponding npm script in `package.json`. Run scripts via `pnpm --filter @workspace/scripts run <script>`. Scripts can import any workspace package (e.g., `@workspace/db`) by adding it as a dependency in `scripts/package.json`.
