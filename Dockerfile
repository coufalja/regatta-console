FROM oven/bun:1.0.18 AS base

WORKDIR /app

COPY bun.lockb .
COPY package.json .

RUN bun install --frozen-lockfile

FROM base as build

WORKDIR /app
COPY . .

RUN bun run build

FROM oven/bun:1.0.18-alpine
WORKDIR /app

COPY --from=build /app/build /app
CMD ["bun", "index.js"]
