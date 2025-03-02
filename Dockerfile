# syntax = docker/dockerfile:1

# Base image with pnpm setup
FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Enable corepack to use pnpm
RUN npm install -g corepack@latest
RUN corepack enable
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0

# Set working directory and copy files
WORKDIR /app
COPY . .

# Build stage
FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile --prod
ENV ASTRO_TELEMETRY_DISABLED=1
RUN pnpm run build

# Caddy builder stage for Cloudflare DNS
FROM caddy:builder-alpine AS caddy-builder

RUN xcaddy build \
  --with github.com/caddy-dns/cloudflare \
  --with github.com/jonaharagon/caddy-umami

# Final stage using Caddy
FROM caddy:alpine

# Copy the built Caddy with Cloudflare DNS support
COPY --from=caddy-builder /usr/bin/caddy /usr/bin/caddy

# Copy built static files to Caddy's serving directory
COPY --from=build /app/dist /var/www/html
COPY Caddyfile /Caddyfile

# Expose port and start Caddy
EXPOSE 8080
CMD ["caddy", "run", "--config", "/Caddyfile"]
