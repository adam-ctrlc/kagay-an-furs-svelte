# Contributing

Thanks for your interest in improving this project! This is a personal **fork**
of the [Kagay-an Furs website](https://github.com/Kagay-an-Furs/website-v2),
rebuilt with SvelteKit. Contributions to the code are welcome.

> **Heads up on assets:** the images, branding and the "Kagay-an Furs" name are
> **not** mine and are not part of the open-source license. Please don't add,
> change or redistribute media unless you own the rights to it. Code-only
> contributions are the safest bet.

## Getting set up

You'll need [Node.js](https://nodejs.org/) (v20+) and [pnpm](https://pnpm.io/).

```bash
pnpm install
pnpm dev
```

## Workflow

1. **Fork** this repo and create a branch off `main`:
   ```bash
   git checkout -b feat/short-description
   ```
2. Make your change.
3. Make sure it passes the type-check:
   ```bash
   pnpm check
   ```
   And that it builds:
   ```bash
   pnpm build
   ```
4. Commit with a clear message (see below), push, and open a Pull Request
   against `main` with a short description of what and why.

## Commit messages

Keep them short and imperative, e.g.:

- `add events filter to home page`
- `fix mobile nav not closing on route change`
- `refactor TeamCard role tags`

## Code style

- **Svelte 5 runes** (`$state`, `$props`, `$derived`): no legacy `export let`.
- **TypeScript** everywhere; keep `pnpm check` clean (0 errors, 0 warnings).
- Styling is **Tailwind CSS v4** plus the design tokens/components in
  `src/app.css`. Reuse existing tokens (`bg-gold`, `text-ink`, `.btn`, `.card`,
  …) instead of hard-coding new colors.
- Icons come from [`phosphor-svelte`](https://github.com/haruaki07/phosphor-svelte);
  **no raw inline `<svg>`**.
- Avoid em dashes (`—`) in copy; use commas, periods or a middot (`·`).

## Reporting issues

Open an issue describing the problem, steps to reproduce, and your
browser/OS. Screenshots help. If you're a rights holder asking for an asset to
be removed, please say so and it'll be handled promptly.
