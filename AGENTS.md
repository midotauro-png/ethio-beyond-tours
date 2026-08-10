<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Ethio Beyond Tours

Marketing site for a locally owned Ethiopian tour operator. Next.js 16 (App
Router, Turbopack), React 19, Tailwind v4 — though almost all styling is plain
CSS: design tokens in `src/app/globals.css`, component-scoped rules in a
`<style>` block at the bottom of each component.

## Verify

```bash
npm run dev      # http://localhost:3000
npm run lint     # eslint (react-hooks rules are errors, not warnings)
npx tsc --noEmit
npm run build
```

## Conventions

- **Structure**: "chapter gates" — each section owns a ground colour
  (`.on-light`, `.on-vellum`, `.on-highland`, or basalt) and the page changes
  character as you descend. Keep that rhythm when adding sections.
- **Type**: Fraunces (display/italic quotes), Poppins (body, nav, headline
  caps — chosen to match the client's brand-mockup typography), IBM Plex Mono
  (labels and data), Noto Serif Ethiopic for Ge'ez (`.geez`). Never introduce a
  fourth Latin family.
- **Motion**: everything is driven by the single IntersectionObserver in
  `SiteChrome.tsx` via `.reveal`, `.reveal-wipe`, `.reveal-frame`. Don't add
  per-component observers. All motion respects `prefers-reduced-motion`.
- **Content** lives in `src/lib/tours.ts`; **imagery** in `src/lib/photos.ts`.
  Every photo ID there has been visually verified — if you add one, check that
  it loads *and* that it actually depicts Ethiopia. Note some Unsplash IDs live
  under `/flagged/` rather than `/photos/`.

## Outstanding

- `src/app/api/enquiry/route.ts` validates and logs; wire a transactional email
  provider (Resend/Postmark/SES) to actually deliver enquiries.
- Photography is licensed stock standing in for the client's own archive.
- Tour prices, licence number and review counts are plausible placeholders and
  must be confirmed before launch.
- Copy is deliberately in the company voice ("we"), with a signed personal
  letter from the named founder/lead guide, Alazar Gezaheghn, at the end of
  `Guide.tsx`. Keep that signature block if `Guide.tsx` is restructured.
