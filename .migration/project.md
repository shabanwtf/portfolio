# project

2026-11-21, whole-project migration, one Radix wrapper.

## Changed

- Dependency swap: installed `@base-ui/react@1.9.0`, then removed `@radix-ui/react-slot` after `button` was migrated. `bun.lock` updated. No other Radix packages were present.
- App-code sweep: searched for `asChild` and `@radix-ui` outside `components/ui`. No call sites needed prop changes. `components/theme-toggle.tsx` uses `Button` as a native button.
- `components.json` was not flipped. Style remains `new-york`, which the CLI still treats as Radix. Flagged, not changed, because there is no `base-new-york` and a base style would restyle the app.

## Left alone

- Google Analytics and Vercel Analytics in `app/layout.tsx`.
- No third-party primitives that the migration must skip (cmdk, vaul, sonner, input-otp, react-day-picker, recharts).

## Behavior changes

- See `.migration/button.md`. No other primitives were in use.

## Verify by hand

- `bunx tsc --noEmit` passed.
- `bun run build` passed on Next.js 16.4.6.
- Homepage does not mount the button. Confirm the theme toggle separately if the header is uncommented.

0 wrappers remain on Radix.
