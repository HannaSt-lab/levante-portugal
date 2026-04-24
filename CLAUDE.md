# CLAUDE.md — Portugal Tours

## Project
Portugal tour guide business — booking website + automation stack.
Brand identity TBD. Build for Hanna to run herself + use as Upwork portfolio piece.

## Always Do First
- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Local Server
- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `node serve.mjs` (serves the project root at `http://localhost:3000`)
- `serve.mjs` lives in the project root. Start it in the background before taking any screenshots.
- If the server is already running, do not start a second instance.

## Screenshot Workflow
- Puppeteer is installed in `node_modules`. Chrome at `C:/Program Files/Google/Chrome/Application/chrome.exe`
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- After screenshotting, read the PNG with the Read tool — Claude can see and analyze the image directly.

## Reference Images
- If a reference image is provided: match layout, spacing, typography, and color exactly.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot, compare, fix, re-screenshot. At least 2 rounds. Stop only when no visible differences remain.

## Output Defaults
- Single `index.html` file, all styles inline, unless user says otherwise
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive

## Brand Assets
- Always check the `brand_assets/` folder before designing.
- If logo is present, use it. If color palette defined, use exact values.

## Anti-Generic Guardrails
- **Colors:** Never use default Tailwind palette. Pick a custom brand color and derive from it.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows.
- **Typography:** Never use the same font for headings and body. Pair display/serif with clean sans.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states.
- **Spacing:** Use intentional, consistent spacing tokens.
- **Depth:** Surfaces should have a layering system (base → elevated → floating).

## Hard Rules
- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color
