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
npm install
```

## Try it out
Test web app
```
npm run dev
```

Build web app
```
npm run build
```

## Run lighthouse locally

### lighthouse-ci
Install the lighthouse-ci npm package
```
npm install -g @lhci/cli@0.14.x
```

Run lighthouse-ci for the website
```
lhci autorun --config lighthouserc-dev.cjs
```

### lighthouse
Install lighthouse npm package
```
npm install -g lighthouse
```

Run lighthouse for the website
```
lighthouse http://localhost:4321/PersonalWebsite
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