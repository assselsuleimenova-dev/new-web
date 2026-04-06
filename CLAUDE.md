@AGENTS.md

# Figma Design System Rules — iDoctor

## Project Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS v4 — utility classes only, no CSS Modules or styled-components
- **UI primitives:** `@base-ui/react` + shadcn (for Button, Accordion, Card, etc.)
- **Animation:** Framer Motion — use existing motion wrappers for scroll sections; hero uses `motion.*` directly (load animation, not scroll-triggered)
- **Icons:** `lucide-react` — use only icons already imported; do not install new icon libraries
- **Font:** ALS Sirius (Light 300, Regular 400, Medium 500, Bold 700, Black 900) — loaded via `@font-face` in `globals.css`

## Design Tokens

All tokens live in `src/app/globals.css` as CSS custom properties under `:root`:

| Token | Value | Use |
|---|---|---|
| `--foreground` / `#1a3b5d` | Deep navy | Primary text, headings |
| `--primary` / `#3d6d9d` | Mid blue | Buttons, links, accents |
| `#5d87a8` | Muted blue | Secondary text, subtitles |
| `#5384c4` | Light blue | Specialty tags, list items |
| `#dce8f5` | Pale blue | Borders, dividers |
| `#f7fbff` | Off-white | Section backgrounds (alternating) |
| `bg-white` | White | Card backgrounds (service-includes, reviews) |
| `#3eb87d` | Green | WhatsApp / CTA button |
| `#1a3b5d` | Dark navy | Dark section backgrounds |

**IMPORTANT:** Never hardcode colors that aren't in this palette. Never add new colors without asking.

## Project Structure

```
src/
  app/
    [lang]/
      layout.tsx     ← Ticker + Header, loads dict
      page.tsx       ← All sections assembled here
    layout.tsx       ← Root html/body shell only
    globals.css      ← Tailwind imports + tokens + @font-face
  components/
    layout/
      header.tsx     ← Sticky header with lang switcher
      ticker.tsx     ← Marquee banner
    motion/
      fade-up.tsx         ← FadeUp({ children, delay?, className? })
      stagger-grid.tsx    ← StaggerGrid + StaggerItem wrappers
      parallax-image.tsx  ← ParallaxHeroImage (not used in hero — parallax removed)
    sections/            ← One file per page section
    ui/                  ← shadcn primitives (Button, Card, etc.)
  dictionaries/
    ru.ts            ← Russian content (source of Dictionary type)
    kk.ts            ← Kazakh content
    index.ts         ← getDictionary(lang) + type exports
  proxy.ts           ← Locale redirect (/ → /ru) — Next.js 16 uses proxy.ts, NOT middleware.ts
```

## Bilingual Content

**IMPORTANT:** All user-facing strings live in `src/dictionaries/ru.ts` and `src/dictionaries/kk.ts`. Never hardcode text in components.

- `Dictionary` type is derived from `ru.ts` (`export type Dictionary = typeof ru`)
- `kk.ts` must satisfy the same type: `export const kk: Dictionary = { ... }`
- Every section component receives its slice via `dict` prop: `({ dict }: { dict: Dictionary['sectionName'] })`
- Routes: `/ru/...` and `/kk/...`; middleware redirects `/` → `/ru`

## Animation Primitives

For scroll sections use wrappers:

```tsx
// Fade-in on scroll — wrap headings + subtitle
<FadeUp delay={0.1}>...</FadeUp>

// Staggered grid — wrap card grids
<StaggerGrid className="grid grid-cols-3 gap-4">
  <StaggerItem>...</StaggerItem>
</StaggerGrid>
```

Hero uses `motion.*` directly (page load animation, not scroll):
```tsx
// fadeUp helper: { initial: { opacity:0, y:16 }, animate: { opacity:1, y:0 }, transition: spring }
// fadeIn helper: { initial: { opacity:0 }, animate: { opacity:1 }, transition: { ease: [0.4,0,0.2,1] } }
// IMPORTANT: ease must be a bezier array, not a string — framer-motion TypeScript will error on "easeOut"
```

Ticker — seamless marquee: render items twice, animate `translateX(0 → -50%)`:
```tsx
{row}{row} // duplicate for seamless loop
animation: "marquee 8s linear infinite"
```

## Typography Scale

4 levels — do not introduce new sizes without asking:

| Level | Mobile | Desktop | Usage |
|---|---|---|---|
| Display | `38px / leading-[36px]` | `56px / leading-[52px]` | Hero h1 |
| Heading | `34px / leading-[31px]` | `44px / leading-[1.1]` | Section h2 |
| Large | `18px` | `18px` | Card titles, subtitles, hero subtitle |
| Body | `15px` | `15px` | Body text, list items, meta |

- All headings: `font-semibold tracking-[-1px] text-[#1a3b5d]`
- Hero h1: `font-medium tracking-[-1.5px]` mobile / `tracking-[-2px]` desktop
- Subtitles: `text-[#5d87a8]`
- Decorative price: `font-bold` / `font-black` — exception to scale, keep as-is

## Section Layout Patterns

- Max width: `max-w-6xl mx-auto px-6`
- Section padding: `py-16 md:py-24`
- All section backgrounds: `bg-[#f7fbff]` (unified — no alternating)
- Headings: `text-[34px] leading-[31px] md:text-[44px] md:leading-[1.1] font-semibold tracking-[-1px] text-[#1a3b5d]`
- Subtitles: `text-[15px] text-[#5d87a8]`
- Mobile: centered text; Desktop: varies per section (center or left)
- Hero mobile image: `w-screen -mx-4` to break out of container padding (full bleed)
- All CTA buttons (`href="#cta"`) scroll to `<section id="cta">` in cta-banner.tsx
- service-includes: `grid-cols-1 md:grid-cols-2`, bag card `md:row-span-2`, price banner `md:col-span-2`

## Asset Handling

- Static assets: `public/images/` and `public/fonts/`
- Hero + bag images currently served from Figma CDN (`figma.com/api/mcp/asset/...`) — these are dev-only; download to `public/images/` for production
- Use `next/image` with `fill` + `unoptimized` for Figma CDN sources
- Add `priority` prop to above-the-fold images

## Figma MCP Integration Flow

1. Call `get_design_context` with `nodeId` and `fileKey` (react + next.js + typescript)
2. Call `get_screenshot` for visual reference
3. Translate output to this project's conventions:
   - Replace inline Tailwind colors with palette tokens above
   - Replace raw `motion.*` with `FadeUp` / `StaggerGrid` wrappers
   - Extract all strings to `ru.ts` + `kk.ts` dictionaries
   - Place new section files in `src/components/sections/`
4. If component needs a shadcn primitive, check `src/components/ui/` first — do not install duplicates
5. Validate visually against screenshot before finishing

## Button Pattern

```tsx
// Always wrap Button in <a> for scroll anchors
<a href="#cta">
  <Button className="h-[80px] w-[260px] rounded-[16px] bg-[#3d6d9d] text-[20px] font-medium text-white hover:bg-[#345e87]">
    {dict.cta}
  </Button>
</a>
```

Primary CTA color: `bg-[#3d6d9d] hover:bg-[#345e87]`. WhatsApp CTA: `bg-[#3eb87d] hover:bg-[#35a56e]`.
