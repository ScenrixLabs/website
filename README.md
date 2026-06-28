# Scenrix - AI Executive Producer for YouTube Creators

This is the public landing page and static website for **Scenrix**, a platform designed to help YouTube creators build, grow, and monetize successful content businesses using specialized AI agents.

## Project Structure
- `frontend/`: React/Vite source code and static HTML/CSS for the landing page.
- `docker-compose.yml`: Local deployment configuration.
- `Caddyfile`: Reverse proxy configuration for production deployment.

## Running Locally

To run the landing page locally:

```bash
docker-compose up -d --build
```
The website will be available at `http://localhost`.

## Tech Stack
- Frontend: React, Vite, TypeScript
- Styling: Pure CSS with custom design system
- Deployment: Docker, Nginx (static serving), Caddy (reverse proxy)
