# Scenrix Public Website

This is the production-ready frontend website for [Scenrix](https://scenrix.com). It presents Scenrix as a serious technical AI project with a multi-agent pipeline for content production.

## Expected Public Domain
[https://scenrix.com](https://scenrix.com)

## Contact Email
hello@scenrix.com

## Local Development

To run the site locally using Vite:

```bash
cd platform/frontend
npm install
npm run dev
```

## Production Build

To build the static assets for production:

```bash
cd platform/frontend
npm run build
```

## Docker Deploy

To deploy the website using Docker and Caddy:

```bash
cd platform
docker compose up -d --build
```

### Local Testing with Docker

If you don't have local domain routing configured for `scenrix.com`, you can access the local instance by navigating to:
[http://localhost](http://localhost)

Alternatively, you can map `scenrix.com` to `127.0.0.1` in your `hosts` file to test it with the expected domain.
