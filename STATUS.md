# Status

**Paused 2026-08-28.** A static one-page site lives here alongside the profile README.
Committed on `feat/lifecycle-portfolio-site`, not pushed, no PR opened yet.

## Updated 2026-10-27

**This repo had two clones on disk and now has one.** `shelf/product/github-profile-readme`
was a second working copy of this same GitHub repo, carrying a `CLAUDE.md` this clone did
not have at all - one commit unpushed, 48 further lines uncommitted. Both commits were
transferred here by `git fetch ../github-profile-readme main:main` (a fast-forward, so they
are byte-identical rather than retyped), merged as PR #1, and the retired clone was moved
to `~/Documents/coding/archive/github-profile-readme-clone/` with an `ARCHIVED.md` saying
where its content went. Work here, in `shelf/product/SathishKumarAI`.

`main` now carries that `CLAUDE.md`, which holds the Plane board conventions and - the part
worth knowing - that this Plane is the Community edition, so `workitem list` with a `pql`
is refused outright and filtering by the `repo:` label has to happen in your own head.

One thing left deliberately: that file still says the label is `repo:github-profile-readme`
while the surviving directory is `SathishKumarAI`. The label genuinely exists in Plane under
the old name, so renaming it is a Plane change and a doc change together, not a typo fix.

**The branch below is still undecided and still unpushed.** Nothing about it changed.

## Read this first

**There is a second, separate portfolio: `~/Documents/coding/shelf/product/personal-portfolio`**
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
3. Project facts came from that repo. The path moved in the workspace reorg and the
   file moved too: it is now `personal-portfolio/portfolio/src/constants/projects.js`,
   with the tool list beside it in `stack.js`. Re-check them there rather than editing
   copy here from memory.
