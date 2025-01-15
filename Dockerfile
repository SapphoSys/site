# syntax = docker/dockerfile:1

# Base image with pnpm setup
FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Enable corepack to use pnpm
RUN corepack enable

# Set working directory and copy files
WORKDIR /app
COPY . .

# Build stage
FROM base AS build
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
ENV ASTRO_TELEMETRY_DISABLED=1
RUN pnpm run build

# Final stage using Caddy
FROM caddy:latest

# Copy built static files to Caddy's serving directory
COPY --from=build /app/dist /var/www/html
COPY Caddyfile /Caddyfile

# Expose port and start Caddy
EXPOSE 8080
CMD ["caddy", "run", "--config", "/Caddyfile"]
