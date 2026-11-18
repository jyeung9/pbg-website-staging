# PBG project rules

- Edit only `src/`; generate portable output with `python3 build.py`.
- Keep external destinations in `src/links.json` and one copy of each image in `src/assets/`.
- Preserve self-contained images in generated HTML and the flat green buttons, with no shadows or movement. Maintain WCAG AA text contrast and visible keyboard focus.
- User instruction: before modifying the approved local project or any public site, prepare changes in an isolated preview, test them, show the preview and change summary, and wait for explicit approval. Approval for local changes does not authorize public deployment.
- Preserve a recoverable backup before retiring existing files. Never change the live Squarespace site or domain as part of a local refactor.
