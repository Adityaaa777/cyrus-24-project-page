# Cyrus-24 project page

This Vite/React project implements the eight Figma sections in the supplied order. Open the app root for the continuous page, or append `?section=1` through `?section=8` for an individual section.

| Query | Section |
| --- | --- |
| `?section=1` | Cover |
| `?section=2` | Project summary |
| `?section=3` | Rider screen gallery |
| `?section=4` | Rider and driver app showcase |
| `?section=5` | Driver screen gallery |
| `?section=6` | Colors and typography |
| `?section=7` | Related projects |
| `?section=8` | Footer |

The galleries use individual PNGs exported from the corresponding Figma image layers. They were copied into `public/assets` without further processing. The cover and related-project source assets retain their original file bytes. Figma exports are archived under `design-assets` for review.

Run `pnpm build` to make a production bundle. No local server is required for the build.
