# regatta-console

The UI console for Regatta server.

## Developing

Install dependencies with `bun install`, start a development server:

```bash
bun run dev
```

Regatta server address could be configured by `REGATTA_ADDRESS` env property.

```bash
REGATTA_ADDRESS=https://localhost:8443 bun run dev
```

## Building

To create a production version of the app:

```bash
bun run build
```

You can preview the production build with `bun run preview`.
