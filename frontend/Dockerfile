# ──────────────────────────────────────────────────────────────
# Stage 1: No build step needed — the landing page is pure
# static HTML/CSS/JS already located in ./public/.
# Caddy serves it directly.
# ──────────────────────────────────────────────────────────────
FROM caddy:2.7-alpine

# Copy static landing page assets into Caddy's serve root
COPY public/ /srv/

# Copy the inner Caddyfile (plain static file server on :80)
COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 80

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
