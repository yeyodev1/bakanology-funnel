# AGENTS.md

Vue 3 + TypeScript + Vite single-page funnel for Vital 360 / Luisa Pita Bejarano.

## Commands

- Use `pnpm`; `.npmrc` requires the hoisted linker and `pnpm-lock.yaml` is the lockfile.
- `pnpm dev` starts Vite; `pnpm preview` serves the production bundle.
- `pnpm build` runs `vue-tsc -b` before `vite build`; use `pnpm exec vue-tsc -b` for typecheck-only verification.
- There is no lint, formatter, test, CI, or pre-commit setup. Do not invent corresponding commands.
- TypeScript is strict with unused locals and parameters rejected, so they also fail the build.

## App Wiring

- `src/main.ts` mounts Pinia and the router. `/` lazily loads `HomeView.vue`; `/pay-response` loads `PaymentResult.vue`.
- Keep `HomeView.vue` as composition only; funnel sections belong in `src/components/funnel/`. Keep source files below 400 lines (`CheckoutModal.vue` is already close).
- Structural layouts must use flex and `width: 100%`; do not introduce CSS Grid.
- `@` resolves to `src`. Vite injects `@use "@/styles/index.scss" as *;` into every SCSS block, so shared color/font variables need no local import.
- `src/styles/index.scss` defines project-local `lighten()` and `darken()` wrappers; account for those before changing Sass color math.
- `wistia-player` is registered as a Vue custom element in `vite.config.ts`. Wistia and PayPhone SDK assets are loaded directly by `index.html`.

## API And Payments

- New API services should extend `APIBase` instead of importing axios. It adds `/api`, sends `localStorage.access_token`, applies a 15-second timeout, emits `auth:token-expired` on 401, and throws normalized `{ status, message, data }` objects.
- Runtime hosts are centralized in `src/config/environment.ts`: local frontend/API `localhost:5173`/`localhost:8101`; testing uses `testing-storybrand-*`; production uses `academia.luisapitabejarano.com` and `luisa-pita-bejarano-backapp.vercel.app`. `VITE_API_BASE_URL` overrides only the API base.
- Checkout fetches PayPhone token/store data from `POST /api/payments/prepare-box`; never put PayPhone credentials in frontend source or env. `VITE_VIP_UPGRADE_PRICE` defaults to `15`.
- Preserve `PaymentResult.vue`'s per-transaction result cache: repeated `/payments/confirm` calls resend welcome email and report another Meta Purchase event.
- PayPhone requires its registered origin and response URL; response URLs come from `getPaymentResponseUrl()`, not browser-relative strings.

## Persisted State

- Bonus and annual deadlines use separate two-hour localStorage keys: `luisa_pita_offer_expires_at` and `luisa_pita_annual_offer_expires_at`. Local/testing resets them once per page lifecycle; production preserves them.
- Auth is token-presence only. The guard can redirect protected routes to `/login`, but no local `/login` route exists; `useUserStore().hydrate()` is not called automatically.
