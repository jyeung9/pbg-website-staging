# PBG website — rules for AI agents

Staging redesign of the Partnership Behavior Group site. Facts (how to build,
publish, content sources) live in README.md; rules live here. Read
DECISIONS.md before starting work, and add a dated line to it whenever the user
makes a lasting decision.

## Safety and approvals
- Never change the live Squarespace site, its domain, or DNS.
- Four approval levels, each needing the user's explicit go-ahead:
  1. build a preview  2. apply it to `src/`  3. commit and push  4. publish to GitHub Pages.
  A yes to one level is not a yes to the next. If a reply is ambiguous
  ("okay", "looks good"), ask which level it approves.
- Stop and ask before: changing wording or claims, adding or removing pages or
  links, adding third-party scripts, fonts or analytics, deleting files, or
  anything that touches a public site.

## Where things live
- Edit only `src/` and `build.py`. Never edit `dist/`, the root `index.html`
  shortcut, or the zip; regenerate them with `python3 build.py`.
- One copy of each image in `src/assets/`, referenced as `{{asset:name}}`.
- External destinations live only in `src/links.json`, referenced as `{{url:key}}`.
  Allowed: intake form, Careers listing, phone, Facebook. Menus and page links
  stay on this site; never link to partnershipbehavior.com.
- The build uses only standard-library Python 3.9+ and must work on macOS and Linux.

## Previews
- Build previews in `previews/<yyyy-mm-dd>-<short-name>/` (gitignored): copy
  `src/` and `build.py` there and build inside it. Don't touch `src/` while a
  preview is pending.
- After approval, apply the same edits to `src/`, rebuild and re-verify. Leave
  old preview folders for the user to remove.

## Styles
- Edit the existing rule; never add a later override for the same selector.
  One rule per selector per breakpoint.
- Colors, font sizes, spacing and radii come from the variables in `:root`.
  Don't add new raw hex values or one-off sizes; add a named variable if one is
  missing. (Older raw values are being consolidated; see the refactor plan.)
- Breakpoints: max-width 1050px, 800px, 480px, written the same way everywhere.
- Buttons stay flat green: no shadows, no movement.

## Accessibility (must pass)
- WCAG 2.2 AA: text contrast at least 4.5:1 (3:1 for text 24px and up); focus
  indicators at least 3:1 against their background; visible focus on every
  interactive element.
- Body text at least 16px; nothing smaller than 12px.
- Menus work by keyboard and close with Escape. Meaningful alt text; empty alt
  for decorative images. Respect prefers-reduced-motion.

## Content
- Wording comes from PBG (their current site or the user). Don't write new
  claims about services, credentials, outcomes or insurance. Draft new copy
  only when asked, and label it as a draft.
- Record the source and retrieval date of copied text, photos and logos in
  README.md under "Content provenance".
- No client information, testimonials or client photos unless the user
  supplies them with permission.

## Definition of done (every change)
1. `python3 build.py` succeeds with no unresolved tokens.
2. Every `#anchor` link resolves; the only external links are those in `links.json`.
3. Screenshots of each affected page at 1440, 768 and 390px wide, compared
   before and after; no console errors.
4. Keyboard pass through the menu.
5. Report: files changed, how it was verified, screenshots, open questions, and
   which approval level comes next.

## Git
- Commit only after approval to apply: one logical change per commit, with a
  message saying what changed and why. Never force-push or rewrite history.
- Publish only a build of a committed, reviewed source, and name the commit in
  the report.
- Before retiring a file, make sure it's in git history or move it to `_to_delete/`.
