# design.md — KALAKAR Design System

### Single source of truth for visual decisions. Check every new component against this file before building it.

---

## 1. Brand Core

- **Name:** KALAKAR — ഹൗസ് ഓഫ് ഫിലിം ("House of Film")
- **Tagline:** Stories that Build Brands.
- **Narrative thread:** cave painting → first storyteller → modern creative agency. Every visual decision should trace back to "carved in stone" / "first fire" / "origin of storytelling."
- **Bilingual pairing rule:** Where a headline has a Malayalam companion line in the deck, keep that pairing on the site (Malayalam line first/above, English line reinforcing it) — this is a brand signature, not a translation afterthought.

---

## 2. Color Palette

| Token                  | Hex (extract/confirm from deck) | Usage                                |
| ---------------------- | ------------------------------- | ------------------------------------ |
| `--color-bg-base`      | #0E0E0C (near-black charcoal)   | Primary backgrounds, hero sections   |
| `--color-ember`        | #E8622C (warm ember orange)     | Primary accent, CTAs, highlight text |
| `--color-moss`         | #4A5D3A (jungle green)          | Secondary accent, tags, hover states |
| `--color-stone`        | #C9B99A (carved stone tan)      | Card backgrounds, texture base       |
| `--color-off-white`    | #F5F1E8                         | Body text on dark, logo mark color   |
| `--color-text-primary` | #F5F1E8                         | Body copy on dark backgrounds        |
| `--color-text-inverse` | #0E0E0C                         | Body copy on light/stone backgrounds |

**Rule:** Never introduce a new color outside this table without adding it here first. If a component "needs" a new shade, check if an existing token at different opacity solves it before adding one.

---

## 3. Typography — FINALIZED

| Role                        | Font                    | Notes                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Display / Headlines**     | **Bebas Neue**          | Used for: nav wordmark, hero headline, all section headings (h1/h2/h3), card titles. Condensed and bold by nature — matches the "BUILD BRANDS" deck treatment without needing all-caps CSS tricks. **Note:** Bebas Neue has no true lowercase — lowercase input renders as smaller cap-height letterforms. This is expected font behavior, not a bug; write headline copy in normal sentence case and let the font handle the display treatment. |
| **Body / UI**               | **Montserrat**          | Used for: body copy, nav links, buttons, labels, form fields, card descriptions. Variable weight (100–900) and italic available — use regular (400)/medium (500) for body text, semibold (600) for small labels/eyebrows.                                                                                                                                                                                                                        |
| **Malayalam pairing lines** | **Noto Sans Malayalam** | Weights 500/700. Used exclusively for the bilingual Malayalam lines paired under English headlines (e.g. "ഹൗസ് ഓഫ് ഫിലിം", "കലാകാരൻ വന്നല്ലോ"). Verified to render cleanly at both small (pairing-line) and large (dramatic reveal, e.g. "The Artist Is Here" moment) sizes.                                                                                                                                                                     |

**Rule:** Three type families total, each with a fixed job (display / body / Malayalam pairing) — don't introduce a fourth. Any new heading or label must use Bebas Neue or Montserrat; never fall back to a system default.

---

## 4. Visual/Asset System (the fix for inconsistent deck assets)

This is the tiered system — **do not use all deck assets as equals.**

### Tier 1 — Signature hero asset (use sparingly, 1–2 placements max)

- The 3D caveman-sculptor render (carving the stone totem)
- Reserved for: Home hero and/or About Us origin-story section only

### Tier 2 — Core icon system (primary visual language, used everywhere)

- Based on the flat vector camera-caveman mark: angular, geometric, "carved" silhouette style, off-white on dark
- Extend into a small icon set (4–8 icons) for: services (Branding, Creative Production, Marketing, Design), the four pillars (Strategic, Creative, Cinematic, Partnership), and any UI iconography
- **New icons must match:** flat fill (no gradients/shading), angular/blocky shapes, consistent stroke-free silhouette style
- Build as SVG components in `/components/icons/`

### Tier 3 — Texture & background system (no photography required)

- Carved-stone relief pattern, subtle grain/noise overlay, torch-glow radial gradients, jungle-canopy silhouette shapes
- Used as background layers behind content — CSS/SVG generated, not photographic

### Tier 4 — Placeholder policy (for anything not yet sourced)

- Any section without a final asset gets a **solid `--color-stone` or `--color-bg-base` block with a subtle texture overlay** — never a generic gray box or lorem-ipsum image placeholder
- All image references route through a single config (`/lib/siteImages.ts`) so swapping placeholder → final asset is a one-line change

---

## 5. Motion Principles

- **Minimal, purposeful, on-theme.** Motion should feel like "revealing something carved/hidden," not generic UI polish.
- Scroll reveals: elements "carve in" (mask/stroke-draw or stagger reveal) rather than plain fade-up
- Hover states: subtle scale (1.02–1.05) or ember-glow highlight, never bounce/elastic easing
- Page-load intro (leaf-parting reveal): one-time per session, reduced-motion fallback = simple dissolve
- Respect `prefers-reduced-motion` everywhere, not just the intro

---

## 6. Component Rules

- Every component: markup file + styling file + logic hook — no exceptions
- Icons live in `/components/icons/`, one file per icon, following Tier 2 style rules above
- No component may introduce a new color, font, or icon style without first updating this file
- Spacing scale: base unit 8px, use multiples only (8/16/24/32/48/64/96) — no arbitrary pixel values in styles

---

## 7. Checklist Before Adding Any New Visual Asset

- [ ] Does it match an existing tier (1–4) above, or does it require creating a new tier?
- [ ] Does it use only colors from the palette table?
- [ ] If it's an icon, does it match the angular/carved silhouette style?
- [ ] If no final asset exists yet, is a Tier 4 placeholder used instead of a generic gray box?
- [ ] Is the image path added to `/lib/siteImages.ts` rather than hardcoded?

---

## Implementation notes (as-built)

These record how the spec maps onto this codebase; keep them accurate as the build evolves.

- **Styling files:** components use colocated `Component.module.css` (CSS Modules) rather than `.styles.ts`. This preserves the required markup / styling / logic separation while matching the project's established styling system. Design tokens below are the contract; the file extension is the only deviation.
- **Design tokens:** the palette and type families live in `src/app/globals.css` as CSS custom properties. Canonical names follow the tables above (`--color-*`); legacy token names are aliased to them so a palette change stays a one-file edit.
- **Fonts** are loaded via `next/font/google` in `src/app/layout.tsx` (Bebas Neue, Montserrat, Noto Sans Malayalam) and exposed as `--font-display`, `--font-body`, `--font-malayalam`.
- **Icons:** Tier 2 flat carved SVG icons live in `src/components/icons/`, one file per icon.
- **Image config:** all brand image references route through `src/lib/siteImages.ts`.
- **Yellow:** the previous bright yellow accent is retired; ember (`--color-ember`) is the single vivid highlight, per the finalized palette.

---

## Open items to finalize

- [ ] Confirm exact hex codes from deck source files (currently estimated from visual inspection)
- [ ] Finalize the full icon set list and commission/build any beyond the initial 8
- [ ] Decide final Services nav label (placeholder: "The Craft")
