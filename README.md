# KALAKAR — Creative Agency Website

A cinematic Next.js App Router site for KALAKAR, built with TypeScript, CSS Modules and Framer Motion.

## Run

```bash
npm install
npm run dev
npm run lint
npm run format:check
npm run build
```

## Architecture

Pages live in `src/app`; page sections and shared components live in `src/components`. Every component keeps declarative JSX, a colocated CSS Module, behavior hook and barrel export. Shared brand/contact copy is in `src/data/site.ts`, services in `src/data/services.ts`, and Cloudinary-ready image metadata in `src/data/images.ts`.

## Brand assets

`public/brand` contains individually sourced artwork from the supplied KALAKAR asset folder, never pitch-deck pages or slide crops:

- `kalakar-mark.jpg`, `artist-mark.jpg`: optimized square character/logo marks
- `kalakar-wordmark.svg`: official vector wordmark
- `cave-painting.jpg`: supplied warm cave-painting/stone wall scene (`01.png`) optimized and composited onto a dark firelit backdrop for the intro background
- `camera-caveman.svg`: supplied camera caveman character artwork
- `jungle-cave.jpg`, `cinematic-cave.jpg`: optimized 1920×881 scene renders
- `sculptor-scene.svg`: supplied sculptor character artwork retained for the About section
- `creative-production.svg`, `design.svg`: service artwork
- `foliage-canopy.svg`, `foliage-ground.svg`, `waterfall-paradise.svg`: supplied environmental layers

Original user files are unchanged. Linked reference imagery (e.g. Shutterstock/Magnific) is never copied or shipped. Legacy `deck-*` and `brand-figure` files may remain in `public` but are not referenced by source.

## Intro behavior

The homepage opens with `IntroReveal`, a first-viewport scroll-choreographed reveal: the viewport starts covered by dense foliage, the leaves part toward the edges as you scroll, the warm cave-painting wall fades in, the camera caveman enters, the official KALAKAR wordmark assembles asymmetrically, and the multilingual subtitle cycles Malayalam → Hindi → Tamil → English and settles back on `ഹൗസ് ഓഫ് ഫിലിം` (`lang="ml"`). The track is a sticky scroll canvas, so completion flows straight into normal page scrolling.

- The full choreography runs once per tab/session via `sessionStorage`; returning loads show the settled first slide immediately.
- Skip intro and the Escape key both dismiss instantly to the settled slide.
- Reduced-motion users get a brief fade to the settled slide instead of the scroll choreography.
- The sticky canvas paints above the sticky Header while choreographing, then yields to it once settled; the homepage Hero below continues the slide as supporting copy instead of repeating the wordmark.

## Placeholders

Contact and social values in `src/data/site.ts` are placeholders and must be replaced before launch: `hello@kalakar.studio`, `+91 98765 43210`, the Mumbai sample address, and the Instagram/YouTube/LinkedIn URLs. The form validates client-side and opens a prefilled WhatsApp message, with a mailto fallback. There is no backend.

## V2 / launch points

- Set the Cloudinary cloud name and swap local paths for `cloudId` values from `src/data/images.ts`.
- Add production contact details, social profiles, analytics and final legal copy.
- Add case studies only after approved client work is available.
- The team section is intentionally deferred; no fictional team is shown.
