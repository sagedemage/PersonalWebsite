# Personal Website
[![GitHub Pages Status](https://github.com/sagedemage/PersonalWebsite/actions/workflows/deploy.yml/badge.svg)](https://github.com/sagedemage/PersonalWebsite/actions/workflows/deploy.yml)
[![Lighthouse Production Workflow](https://github.com/sagedemage/PersonalWebsite/actions/workflows/lighthouse-prod.yml/badge.svg)](https://github.com/sagedemage/PersonalWebsite/actions/workflows/lighthouse-prod.yml)
[![Lighthouse Development Workflow](https://github.com/sagedemage/PersonalWebsite/actions/workflows/lighthouse-dev.yml/badge.svg)](https://github.com/sagedemage/PersonalWebsite/actions/workflows/lighthouse-dev.yml)

[Personal Website](https://sagedemage.github.io/PersonalWebsite/)

## About
My Personal website in Astro.

## Setup

Install Node.js for Debian, and Ubuntu based distributions: [Installation Instructions (DEB) - NodeSource N|Solid & Node.js Binary Distributions](https://github.com/nodesource/distributions?tab=readme-ov-file#installation-instructions-deb)

Install Node.js for Windows: [nodejs download page](https://nodejs.org/en/download/prebuilt-installer)

Install the dependencies
```
pnpm install
```

## Try it out
Test web app
```
pnpm dev
```

Build web app
```
pnpm build
```

## Run lighthouse locally

### lighthouse-ci
Run lighthouse-ci for the website
```
npx lhci autorun --config lighthouserc-dev.cjs
```

## Dev Toolbar
To disable the dev toolbar for a specific project on your PC:
```
astro preferences disable devToolbar
```

To enable back the dev toolbar
```
astro preferences enable devToolbar
```

## Why use pnpm?
1. Save disk space
2. Boost installation speed