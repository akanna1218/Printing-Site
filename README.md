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

The GitHub Actions workflow builds the site on pushes to `Dev` and publishes the generated files to the `gh-pages` branch. The Pages base path is derived from the repository name, so it updates automatically if the repository is renamed. For a repository named `<owner>.github.io`, the site is published at the domain root.

In the repository's **Settings → Pages**, set **Source** to **Deploy from a branch**, choose `gh-pages` and `/(root)`, then save. For a project repository, the URL is `https://<owner>.github.io/<repository>/`.

## Project notes

- Shared brand details and clearly identified contact placeholders are in `src/config/company.js`.
- Service, product, capability, process and feature copy is kept in `src/data/siteContent.js`.
- The enquiry form currently performs browser-side validation only. Connect a backend or form service before using it to receive enquiries.
- Service and hero photographs use replaceable Unsplash image URLs; image fallbacks are shown if those URLs fail. Replace them with approved company photography when available.
