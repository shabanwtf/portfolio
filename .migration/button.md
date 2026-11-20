# button

2026-11-21, transformation engine (legacy `new-york` style, no base counterpart), migrated.

## Changed

- `components/ui/button.tsx`: replaced `@radix-ui/react-slot` and the `asChild` branch with `@base-ui/react/button`. The wrapper now renders `ButtonPrimitive` and forwards `render` through `ButtonPrimitive.Props`. Existing variant classes, including the custom `dashed` variant, are unchanged.
- `package.json` / `bun.lock`: added `@base-ui/react@1.9.0` and removed `@radix-ui/react-slot` after this component, the only Radix wrapper, was migrated.

Leftover scan is clean: `grep -n "radix-ui\|@radix-ui"` on `components/ui/button.tsx` returns no matches.

## Left alone

- `components/theme-toggle.tsx` calls `Button` as a native button and does not pass `asChild`, so the call site did not change.
- `components.json` still has `"style": "new-york"`. There is no `base-new-york` registry variant, and retargeting onto a base style would restyle the app. Future `shadcn add` will still deliver Radix variants until the style is switched.
- No cmdk, vaul, sonner, input-otp, react-day-picker, or recharts wrappers are installed.

## Behavior changes

- `asChild` is gone. Compose another element with Base UI's `render` prop. Set `nativeButton={false}` when `render` is not a `<button>`. Nothing in the app used `asChild`.
- Disabled styling still uses the `disabled:` variant. Base UI also sets `data-disabled` on the button; that attribute is unused by these classes.

## Verify by hand

- The only consumer is the theme toggle, and `SiteHeader` is commented out in `app/layout.tsx`, so the button is not on the page.
- If the header is enabled: tab to the theme toggle, confirm the focus ring, activate it with Enter and with a click, and confirm the theme still switches.
