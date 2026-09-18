# AGENTS.md

Personal portfolio site (owner: Ardi, github.com/miner46er). Next.js 16 Pages Router, React 19, plain JavaScript (no TypeScript), plain CSS with CSS Modules (no Sass), exported as a fully static site.

## Commands

- `npm run dev` — dev server
- `npm run build` — static site is emitted to `out/` (`output: 'export'` in `next.config.js`)
- `npm run lint` / `npm run lint:fix` — [standard.js](https://standardjs.com)

No tests and no typecheck exist in this repo.

## Static export constraint (important)

The build uses `output: 'export'`, so every page must be statically renderable. Do not add API routes, `getServerSideProps`, ISR, or other server-side features — `next build` will fail. There is no `next export` CLI step; export is configured in `next.config.js`.

## Structure

- `pages/` — four routes: `index.jsx` (/), `experience.jsx`, `projects.jsx`, `about.jsx`. `_app.jsx` renders the shared shell (skip link, backdrop, reading-progress bar, Header, `main#main`, Footer) and loads `styles/global.css` + `styles/reset-css.css`; `_document.jsx` holds `<html lang>` + theme attributes, a no-flash theme script, favicon/manifest links, and Google Fonts (Space Grotesk, IBM Plex Sans, JetBrains Mono, Newsreader).
- `components/` — `Header`, `Navbar`, `ThemeToggle`, `ProgressBar`, `Typewriter`, `ProjectCard`, `Footer`, `Icons`. Presentational, props-driven function components with a default export.
- `data/projects.js` — the project entries shared by the home and projects pages. Edit that file to change project content; bio/contact copy is inline in `pages/about.jsx` and `pages/experience.jsx`.
- `styles/` — plain CSS: `global.css` (design tokens as CSS custom properties, base styles, shared utilities: `.wrap`, `.view`, `.btn`, `.tag`, `.badge`, `.eyebrow`, `.section-head`, `.project-grid`, …), `reset-css.css`, and one CSS Module per page/component (`page_home.module.css`, `header.module.css`, …). Theming is done at runtime via `data-theme` on `<html>` (dark is the default; light + system modes via the header toggle), not via SCSS variables.
- `public/` — favicons, PWA `manifest.json`, and `public/projects/*.jpg` screenshots referenced by the project cards.

## Conventions

- standard.js style: no semicolons, single quotes, space before function parentheses. lint-staged runs `standard --fix` on `*.{js,jsx,ts,tsx}` via the husky pre-commit hook, so commits will fail until files are standard-compliant.
- Components follow the existing pattern: `function Name () { ... }` + `export default Name`.
- Page-specific styles go in the page's CSS Module and are referenced via `styles.className`; shared design-system classes from `global.css` are used as plain `className` strings.
- Relative imports (`../components/...`); there are no path aliases. Use Next `<Link>` (no nested `<a>`) for internal navigation.

## Git

`master` is the primary branch; work happens on `development` and is merged to `master` via PRs. Commit messages follow Conventional Commits (`feat:`, `chore:`, `style:`, …).
