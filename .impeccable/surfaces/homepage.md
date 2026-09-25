---
version: 1
slug: "homepage"
primary_target: "homepage"
related_targets: []
---

## Direction contract

THESIS: A single-screen product showcase, not a scrollable marketing page — the entire site is one full-viewport carousel where one app glows as a saturated object in a dark violet void at a time; every supporting fact (features, screenshots, download, stars) lives inside that same view, never below a fold that doesn't exist.

OWN-WORLD: Deep violet canvas/gradient hero (`linear-gradient(160deg,#1a1040,#100829)`) fills the full viewport (`height:100vh`/`100dvh`, `overflow:hidden` on html/body — desktop has zero scroll by construction). One vivid magenta accent (`--accent #ff2f78`) carries every CTA, active state and label; each app keeps its own real logo as the sole saturated "art" — glowing (blurred color-matched halo), floating gently, ringed by a thin circular outline — never a full-bleed background wash. Sora for headlines/wordmark, Work Sans for body and labels. Supplementary content (FAQ, including the hobby-suggestion CTA) surfaces in a centered glass modal over a blurred/dimmed backdrop, opened from a "FAQ" nav trigger — never a scrolled section.

STORY: A visitor sees one app fully committed to — big glowing logo + auto-rotating placeholder-screenshot mini-carousel on one side, name/tagline/features/actions on the other — cycles through the other three via color-coded dots plus prev/next arrows and a numbered pager, each switch punctuated by a brief color-flash transition. The download button goes straight to that app's `.apk` release asset (fetched at build time from its real public GitHub repo); the star button shows its real star count and links to the repo. Opening "FAQ" from the nav raises a modal with collapsible Q&A, the last of which carries the hobby-suggestion CTA; closing it (✕, backdrop click, or Escape) returns to the single view untouched.

FIRST VIEWPORT (== only viewport, desktop): full-bleed dark violet hero, transparent nav overlaid at top (wordmark left; FAQ trigger, GitHub link, decorative hamburger right). Centered row: glowing tilted logo + screenshot mini-carousel on one side, kicker/name/tagline/features/download+star buttons on the other. Bottom bar: prev/next arrows, color-coded dot switcher, numeric pager. All sized with `clamp()`/`dvh` units so it holds with zero scroll from ~760px viewport height up; below ~900px width the layout stacks and a scroll fallback is allowed (single-screen is a desktop-carousel guarantee, not a mobile constraint the brief asked for).

FORM: Revision of the violet/glass/magenta world (unchanged), restructured per two explicit requests: (1) direct `.apk` download links resolved from GitHub release assets at build time, replacing links to the releases page; (2) collapse of the multi-section scrolling page (why-cards, four-app accordion, roadmap, FAQ section, footer) into this single carousel view plus one FAQ modal — the four-app accordion and roadmap sections were removed outright, their essential facts (open source, offline, stores-coming-soon, hobby CTA) folded into the FAQ modal or the per-app carousel content.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
