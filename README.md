# XXXX Graphics

A responsive, single-page printing and packaging website for XXXX Graphics, a Tamil Nadu-based business. Built with React, Vite and Material UI.

## Run locally

```sh
npm install
npm run dev
```

## Build and lint

```sh
npm run build
npm run lint
```

## GitHub Pages

The site is configured for the `React-Updated` repository path. The GitHub Actions workflow builds the site on pushes to `Dev` and publishes the generated files to the `gh-pages` branch.

In the repository's **Settings → Pages**, set **Source** to **Deploy from a branch**, choose `gh-pages` and `/(root)`, then save. The site URL is `https://akanna1218.github.io/React-Updated/`.

## Project notes

- Shared brand details and clearly identified contact placeholders are in `src/config/company.js`.
- Service, product, capability, process and feature copy is kept in `src/data/siteContent.js`.
- The enquiry form currently performs browser-side validation only. Connect a backend or form service before using it to receive enquiries.
- Service and hero photographs use replaceable Unsplash image URLs; image fallbacks are shown if those URLs fail. Replace them with approved company photography when available.
