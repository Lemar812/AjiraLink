# AjiraLink

Premium Next.js landing page for an African youth-focused EdTech and employment platform.

## Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion, GSAP, Lenis
- Netlify deployment via `@netlify/plugin-nextjs`

## Commands

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run format:check
npm run build
```

Local development runs at `http://localhost:3000`.

## Project Structure

```txt
src/
  app/          Next.js routes, layouts, global CSS
  components/   Shared UI components
  sections/     Page-level marketing sections
  hooks/        Client hooks and browser integrations
  lib/          Shared utilities
  styles/       Tailwind theme extensions and design tokens
  constants/    Brand and app constants
  data/         Static landing-page content
```

## Deployment

Netlify uses `netlify.toml`:

```bash
npm run build
```

The Next.js runtime is handled by `@netlify/plugin-nextjs`.

Production deploys are triggered from GitHub Actions on every push to `main`. Add these repository secrets in GitHub:

```txt
NETLIFY_AUTH_TOKEN
NETLIFY_SITE_ID
```

You can also trigger the same workflow manually from the GitHub Actions tab.

## GitHub Setup

```bash
git remote add origin https://github.com/<owner>/<repo>.git
git branch -M main
git push -u origin main
```
