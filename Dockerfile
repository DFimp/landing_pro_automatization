# ── Stage 1: builder ────────────────────────────────────────────────────────
FROM node:20-alpine AS builder
WORKDIR /app

RUN apk add --no-cache libc6-compat

# Install deps first (layer cached until package*.json changes)
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ── Stage 2: runner ─────────────────────────────────────────────────────────
# standalone output bundles only what next.js actually needs (~50-150 MB vs ~500 MB)
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Non-root user for security
RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# standalone dir contains a minimal node_modules + server.js
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# static assets (JS/CSS chunks) must be added separately
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

# node server.js — no npm, no next CLI needed in the final image
CMD ["node", "server.js"]
