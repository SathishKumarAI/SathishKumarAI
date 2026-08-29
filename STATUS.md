# Status

**Paused 2026-08-28.** A static one-page site lives here alongside the profile README.
Committed on `feat/lifecycle-portfolio-site`, not pushed, no PR opened yet.

## Read this first

**There is a second, separate portfolio: `~/coding/shelf/sathishkumarai.github.io`**
(Next.js, "a portfolio in five chapters", 15 projects). It is the one meant for
<https://sathishkumarai.github.io>, and its `STATUS.md` step 5 says to shrink *this*
repo's README to a tagline plus a link to it. Keeping both was a deliberate call on
2026-08-28 — but the two will drift, and this one has no automation keeping it in sync.
Whichever you edit, edit the other or accept the drift knowingly.

## What is here

| File | Owns |
|---|---|
| `README.md` | The GitHub profile page. Unrelated to the site below. |
| `index.html` | Markup and copy for the site. Lucide icon sprite is inlined at the top. |
| `style.css` | Every visual decision. Catppuccin Mocha, Latte under `[data-theme="light"]`. |
| `main.js` | The only behaviour: appearance toggle, and the rail that tracks the current stage. |

The page is an LLM lifecycle rendered as a trace: a waterfall of six spans — ingest,
retrieve, train, evaluate, serve, operate — over a pinned rail that marks the span you
are reading.

**The one invariant: a span's bar width is the number of repos in that stage, and the
column count in `style.css` is their sum.** 15 repos today, so `repeat(15, 1fr)` and
`calc(100% / 15)`. Add a project and three things move together: the card, the `--start`
/`--len` on both the waterfall span and the rail entry, and the grid column count. Miss
one and the bars lie.

## Verified 2026-08-28

- Chrome at 1440×900 and 390×844: no console messages, no horizontal overflow
  (`scrollWidth` 486 ≤ `innerWidth` 502 at 390px).
- Every stated span count equals the real card count in that stage: 3/3/2/1/5/1 = 15.
- No dead in-page anchors.
- Light and dark both render; the toggle persists to `localStorage` and the pre-paint
  script in `<head>` stops the wrong theme flashing.

## Next action

1. Decide whether to push. `gh pr create` from this branch, or drop it.
2. If GitHub Pages is wanted here: Settings → Pages → deploy from `main`, root. The site
   would land at <https://sathishkumarai.github.io/SathishKumarAI/>, which competes with
   the Next.js site's URL. Read that repo's `docs/DECISIONS.md` before choosing.
3. Project facts came from `sathishkumarai.github.io/src/data/site.ts`. Re-check them
   there rather than editing copy here from memory.
