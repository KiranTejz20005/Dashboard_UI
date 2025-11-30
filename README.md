# Dashboard_UI

# Dashboard 

Modern React + TypeScript dashboard starter built with Vite, Tailwind CSS, shadcn-ui components, and Radix primitives.

## Getting Started

Prerequisites: Node.js (LTS) and npm installed locally.

```sh
git clone <REPO_URL>
cd dashboard-revamp
npm install
npm run dev
```

Development server runs on `http://localhost:8080`.

## Scripts

```sh
npm run dev       # Start dev server
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # Lint sources
```

## Project Structure

```
src/
	components/      Reusable UI + dashboard modules
	pages/           Route-level pages
	hooks/           Custom React hooks
	lib/             Utilities
	index.css        Global styles & Tailwind layers
```

## Customization

- Update theme colors in `tailwind.config.ts`.
- Add or edit UI components under `src/components/ui`.
- Extend utility functions in `src/lib/utils.ts`.

## Deployment

Any static hosting (Netlify, Vercel, etc.): build with `npm run build` and deploy the `dist/` folder.