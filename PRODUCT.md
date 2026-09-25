# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: Astro — content/marketing site, four app showcases sharing one layout, no backend or account system needed, fast static output, easy to deploy anywhere.

## Users

Prospective users of Arthur's ORY apps (Gameory, Ludory, Showry, Libory) — people evaluating whether to install one of these personal collection-tracking apps, arriving via GitHub (current distribution channel), a shared link, or search. Secondary: Arthur himself, using the site as a portfolio hub for the suite; and hobbyists whose hobby isn't covered yet, who the site invites to say so.

## Product Purpose

A showcase ("site vitrine") for the four ORY apps: present what each app does and drive installs. Not a support portal, not an account/dashboard product — purely marketing/informational.

## Positioning

The four apps share a naming pattern and a product philosophy under Arthur's personal "-ory" brand: each is a local-first, offline, no-account-required collection tracker for a specific hobby domain.

- **Gameory** (repo: `Gamely`) — video game collection & backlog tracker (IGDB-backed): status tracking, play sessions/stopwatch, custom lists, friend comparison via QR code, trophies, stats. Dark UI by default (`#0B0B12`).
- **Ludory** — board game collection tracker ("ludothèque personnelle") *and* TCG deck manager, covering Magic, Pokémon, Lorcana, and Yu-Gi-Oh decks (currently supported games — list may grow): games, play sessions ("parties"), wishlist, plus deck building/tracking for the supported TCGs. Automatic light/dark theme with a user-chosen accent color.
- **Showry** — movies & TV series tracker (TMDB-backed): episode-by-episode tracking, release calendar, watchlist, ratings, rewatch history, stats. Dark UI by default (`#131313`).
- **Libory** — library tracker covering manga, BD/comics, *and* regular books/novels: barcode/ISBN search, release calendar, owned volumes, loans, wishlist, plus reading-progress tracking for books. Automatic light/dark theme with a user-chosen accent color.

All four: local-first, fully offline, no account or backend, SQLite-based storage, built with Expo/React Native, French and English localized, Android-first (some also iOS). Currently distributed via public `Ory-team/<App>-releases` GitHub repos (not yet on app stores) — those repos host releases and issues, not the source. **Not open source**: the source repos are private on purpose. Roughly half the current codebase is AI-assisted and, in Arthur's own judgment, not clean enough to publish yet; the near-term priority is working apps, with a deliberate human-authored pass over the whole codebase before open-sourcing is reconsidered. Arthur is nonetheless very responsive to feedback via email (`arthur.decaen33@gmail.com`) or GitHub issues on the releases repos. Standard app-store availability (Play Store/App Store) is not live yet, for two concrete reasons: legal risk (API terms and anti-scraping rules some apps rely on could cause problems once officially listed) and budget (store publishing isn't free, and Arthur doesn't want to spend money on this project — the suite is meant to stay 100% free and ad-free). The ambition is to keep growing the "-ory" family to eventually cover any hobby, not just the four current domains. The site's job is to present the current apps as one coherent family while giving each app room to read on its own terms, and to invite visitors to suggest hobbies not yet covered.

## Operating Context

Source material for the site's content and visuals lives in the four sibling app repositories, not in this repo: `../Gamely` (Gameory), `../Ludory`, `../Showry`, `../Libory`. Each has an `app.json` (icons, theme colors, bundle id) and, for Showry/Libory, a French README with a feature list to draw from.

## Capabilities and Constraints

- Site structure: a single, non-scrolling full-screen view on desktop (≥901px). No separate pages or sections — the hero carousel IS the site: switching the featured app (via dots/arrows) swaps its logo, screenshots, tagline, features and actions in place. Supplementary content (FAQ, including the hobby-suggestion CTA) lives in a modal, not a scrolled section.
- Below 901px (phones/small tablets), the hero switches to a stacked, internally-scrolling layout: the nav bar (with FAQ/GitHub links, no hidden hamburger) stays pinned to the top, and the bottom of the screen has two stacked `position: fixed` floating panels that stay visible regardless of scroll position — the download/star CTA row directly above the app-switcher (prev/thumbs/next). Both panels are inset 16px from the screen edges with rounded corners and a shadow (a floating-card look, not flush bars), so the CTAs and the app-switcher never require scrolling to reach. Only the visual (icon, screenshots), name, tagline and feature list scroll in between. The decorative icon shrinks drastically and is repositioned as a badge floating in front of (overlapping) the bottom of the screenshot fan, instead of sitting above it — this saves vertical space and reads as an app-icon badge over the product screenshots. Info text (kicker, name, tagline, feature list) is left-aligned on mobile for easier scanning, with bullet markers restored on the feature list.
- The app-switcher (desktop and mobile) shows each app icon at full color, no dimming/grayscale filter — the active app is simply larger and at full opacity, inactive ones smaller and semi-transparent. The auto-advance countdown is a circular progress ring drawn around the active icon (SVG rounded-rect with `pathLength="100"` for percentage-based `stroke-dashoffset` animation) instead of a bar underneath it. The numeric "01 — 04" pager was removed as redundant with the icon highlighting.
- Screenshot/wireframe cards always render at the real phone aspect ratio (`aspect-ratio: 23/50`, matching the actual Gameory screenshots) instead of a distorted box, with a tighter 12px border-radius so the phone shape reads clearly. Real screenshots never get cropped and wireframe placeholders stay visually consistent with them.
- On desktop, the fanned screenshots are the dominant visual (sized up to 420px wide) and the app icon is a smaller supporting brand mark beside them (down to ~100–170px, from its original 160–320px) — the real product screens carry more visual weight than the decorative icon, matching the hierarchy already used on mobile (icon as a small badge over the screens).
- The screenshot lightbox grows the tapped/clicked image dramatically larger, sized directly from the shared 23:50 phone aspect ratio (`width: min(96vw, 1200px, calc(93vh * 23 / 50))`, `aspect-ratio: 23/50`) so the rendered box exactly matches the photo with no letterboxed gap — border-radius and shadow hug the real image edges instead of framing empty space. Source screenshots are kept at their original captured resolution (~1080×2340, `public/screenshots/<app>-*.jpg`, JPEG quality 88) rather than downsized for the small card thumbnails — a first pass that resized down to 554×1200 still looked visibly soft in the lightbox on high-DPI (retina) screens, since the CSS display size × device pixel ratio there can exceed that. Full resolution gives enough headroom for the lightbox to render crisp on typical retina displays; the fanned-stack cards just downscale the same files, no separate small version needed. Opens with a scale-in grow animation; prev/next/close controls use a darker blurred background so they stay legible over any photo content.
- Each app's download button links directly to its release `.apk` asset (not a redirect to the GitHub releases page), and the star button/count links to the repo. Both pull real data (latest release tag + asset URL, star count) from the public GitHub repo at build time (`Ory-team/<App>-releases`), not the private source repos. Falls back to a GitHub releases-page link / "Download latest" / "★ –" when the GitHub API is unreachable (e.g. rate-limited) rather than showing stale or invented numbers.
- The site should mention that standard app-store availability (Play Store/App Store) is coming soon for the apps.
- Screenshots: all four apps now show 3 real in-app screenshots each (`public/screenshots/<app>-*.jpg`) in the fanned stack, no "MOCKUP" label left anywhere — `OryApp.screenshots` in `src/data/apps.ts` is optional per app; the fan and the "MOCKUP" tag switch automatically based on whether it's set, so the mechanism still supports a future app shipping without screenshots yet. For each app, the 3 shown (out of 4 provided each time) were chosen to visually back specific stated feature bullets rather than just using the first three: Libory shows the collection grid, release calendar and reading-streak home screen; Showry shows the yearly Wrapped-style stats screen (its headline feature), a movie detail/rating screen, and episode-progress tracking (its core "episode by episode" tagline); Ludory shows the board-game collection grid, a game detail page, and a Magic deck view, deliberately covering both the board-game and TCG sides of the app. One provided Ludory screenshot (a two-player Magic life counter) was intentionally left out — its UI is rendered upside-down on purpose for tabletop use between two facing players, which would look like a broken/mirrored image in the screenshot fan taken out of that context.
- The fanned stack auto-rotates which card sits in front every 4s (pauses on hover, respects `prefers-reduced-motion`) for every app, wireframe or real. When an app has real screenshots, each card is also clickable/focusable and opens a lightbox with the full-size screenshot, with prev/next and Escape/backdrop-close, matching the FAQ modal's visual language. Wireframe-only apps aren't clickable — there's nothing real to enlarge yet.
- The site is bilingual (English/French), toggled from the nav. Default language is detected from the browser (`navigator.language`), overridable by the visitor and remembered via `localStorage`; the server-rendered default (for no-JS/crawlers) is English. All UI strings and per-app copy have both locales — see `src/data/i18n.ts` and the `tagline`/`features` fields in `src/data/apps.ts`.

## Brand Commitments

The user asked for a modern but simple art direction that draws on the visual style of the four individual apps (dark UI defaults for Gameory/Showry, accent-color theming for Ludory/Libory, each app's own icon set). This is a volunteered visual constraint to honor going forward — the specific site-wide visual world is still an open decision for new-work, not decided here.

## Evidence on Hand

- App source repos with real product detail, icons, and locale strings: `../Gamely`, `../Ludory`, `../Showry`, `../Libory`. These private source repos are not the public GitHub presence.
- The real public GitHub presence is the `Ory-team` organization, with one `<App>-releases` repo per app (e.g. `Ory-team/Gameory-releases`) — used for the site's download/star links and build-time data.
- No existing site copy, screenshots, or logos specific to `ory-website` itself yet — state this rather than fabricating testimonials, download counts, or store ratings.

## Product Principles

- Present the four apps as one coherent family without flattening their individual identities.
- Each app's feature list leads with its strongest real differentiator, not a generic capability — Gameory: a "find a game" wizard that recommends 3 titles from your own backlog; Ludory: scan a physical TCG card with the camera to add it straight to a deck (Magic, Pokémon, Lorcana, Yu-Gi-Oh); Showry: a Wrapped-style yearly recap deck; Libory: tracking who a physical volume was lent to. Visually distinguished (bold, accent-colored, sparkle marker) from the supporting feature bullets below it. The full, code-verified feature inventory per app (far larger than what fits on-screen) lives in this conversation's research — see `src/data/apps.ts` for what actually shipped to the site.
- Keep the site itself simple and modern — it should not compete visually with the apps it showcases.
- Local-first, offline, no-account is a real differentiator across the suite and should carry through the messaging.
- Every app section should drive toward trying the app via its GitHub releases repo (no app-store presence yet) and inviting a star on that repo.
- Responsiveness to feedback (email or GitHub issues, answered quickly) is a differentiator worth surfacing — but never claim the source itself is open; it isn't, and the FAQ says why honestly (AI-assisted code not yet clean enough, human pass planned first).
- Give visitors a clear way to suggest an uncovered hobby, framed as shaping the suite's next app rather than a generic contact form — the real contact channel is email (`arthur.decaen33@gmail.com`).
- Set expectations honestly: today's channel is GitHub releases, not the source; standard app stores are "not yet, for legal and budget reasons," not "coming soon" as a vague promise — the FAQ gives the real reasons (API/scraping terms, store publishing cost, wanting the suite to stay free and ad-free).
