# Checkly

A fast, calm checklist workspace built with Next.js, React, TypeScript and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

Push this repository to GitHub, then import the repository in Vercel. Vercel should automatically detect the Next.js framework. No database or environment variables are required for the V1 app.

## V1 storage

Checklists are stored in the browser's LocalStorage. This means data is local to each browser/device and is not synced between devices.
