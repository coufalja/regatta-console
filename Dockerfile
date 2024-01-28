FROM oven/bun:1.0.25 AS base

WORKDIR /app

COPY bun.lockb .
COPY package.json .

RUN bun install --frozen-lockfile

FROM base as build

WORKDIR /app
COPY . .

RUN bun run build

FROM oven/bun:1.0.25
WORKDIR /app

COPY --from=build /app/build /app
RUN bun install

CMD ["bun", "index.js"]
