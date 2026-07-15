# AGENTS.md

Vue 3 + TypeScript + Vite single-page funnel for Bakanology / El Método Bakano.

## Commands

- Use `pnpm`; `.npmrc` requires the hoisted linker and `pnpm-lock.yaml` is the lockfile.
- `pnpm dev` starts Vite; `pnpm preview` serves the production bundle.
- `pnpm build` runs `vue-tsc -b` before `vite build`; use `pnpm exec vue-tsc -b` for typecheck-only verification.
- There is no lint, formatter, test, CI, or pre-commit setup. Do not invent corresponding commands.
- TypeScript is strict with unused locals and parameters rejected, so they also fail the build.

## App Wiring

- `src/main.ts` mounts Pinia and the router. `/` lazily loads `HomeView.vue`; `/pay-response` loads `PaymentResult.vue`.
- Keep `HomeView.vue` as composition only; funnel sections belong in `src/components/funnel/`. Keep source files below 400 lines.
- Structural layouts must use flex and `width: 100%`; do not introduce CSS Grid.
- `@` resolves to `src`. Vite injects `@use "@/styles/index.scss" as *;` into every SCSS block, so shared color/font variables need no local import.
- `src/styles/index.scss` defines project-local `lighten()` and `darken()` wrappers; account for those before changing Sass color math.

## API And Stripe

- New API services should extend `APIBase` instead of importing axios. It adds `/api`, sends `localStorage.access_token`, applies a 15-second timeout, emits `auth:token-expired` on 401, and throws normalized `{ status, message, data }` objects.
- Runtime hosts are selected strictly from the browser hostname in `src/config/environment.ts`: local API is `localhost:8101`, testing API is `testing-storybrand-backapp.bakano.ec`, and production API is `bakanology-backapp.vercel.app`.
- Funnel checkout calls `POST /api/stripe/funnel/create-session`; the existing academy continues using `POST /api/stripe/create-session`. Do not merge these contracts or change the academy's `$297` product.
- Frontend sends plan IDs `monthly`/`lifetime` and optional extras `crm`/`telegram_vip`; the backend calculates all authoritative amounts.
- Stripe secret and webhook keys belong only in `bakanology-backapp`. Local backend uses test keys when `NODE_ENV=development`; production automatically uses live keys.
- Stripe returns to `/pay-response?session_id=...`; `PaymentResult.vue` verifies via `/stripe/verify/:sessionId` and caches only approved results.

## Persisted State

- Auth is token-presence only. The guard can redirect protected routes to `/login`, but no local `/login` route exists; `useUserStore().hydrate()` is not called automatically.
