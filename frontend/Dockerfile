FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve using Caddy
FROM caddy:2.7-alpine

# Copy built assets from builder stage
COPY --from=builder /app/dist /srv

# Optional: Add a local Caddyfile if not using the main one from docker-compose
# Here we just serve the static files on port 80 since the main Caddy container proxies to this one.
# Actually, since the requirement states "Serve the production frontend build", we can use Caddy to serve it directly.
RUN echo ":80 { root * /srv ; encode gzip ; header X-Content-Type-Options nosniff ; header X-Frame-Options DENY ; header Referrer-Policy strict-origin-when-cross-origin ; file_server ; try_files {path} {path}.html /index.html }" > /etc/caddy/Caddyfile

EXPOSE 80

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
