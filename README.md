# Partnership Behavior Group — website refresh

Public staging redesign with self-contained photography, Insurance content, Careers navigation, flat accessible green buttons, and a lighter family-outcomes section.

## Source and build

- `src/index.html`: page markup.
- `src/styles.css`: shared responsive styles.
- `src/navigation.js`: menu behavior.
- `src/links.json`: shared external destinations.
- `src/assets/`: original image files, stored once.
- `build.py`: Python standard-library build; no dependencies.

Run `python3 build.py`. This generates `dist/index.html` and `pbg-github-pages-staging.zip`. Open `dist/index.html` locally or serve `dist/`. All images, styles, and scripts are embedded in the generated HTML. External resource, intake, and Careers links need internet access. The local root `index.html` shortcut preserves the existing preview address.

## Publishing

Source is maintained on `main`. GitHub Pages serves the generated files on `gh-pages`, at https://jyeung9.github.io/pbg-website-staging/. Publish only a build generated from the reviewed source commit. The site requests no indexing; it is publicly accessible. No custom domain is configured and the Squarespace site remains separate.

## Review policy

Before future changes to the approved local site or public deployment, prepare an isolated preview, verify it, show the user the visual result and change summary, and wait for approval. Do not edit generated output or maintain parallel HTML copies.

## Content provenance

Original PBG photos and logo were supplied with the staging package. Insurance wording, photo, and four insurer logos were retrieved from https://www.partnershipbehavior.com/insurance-groups on November 18, 2026. Careers follows the Indeed listing linked by the PBG homepage. The intake link remains PBG’s Microsoft Forms destination.
