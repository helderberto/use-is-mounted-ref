# Contributing

## Setup

Use Node 22.12 or later.

```bash
npm ci
```

## Scripts

| Script                  | Does                         |
| ----------------------- | ---------------------------- |
| `npm test`              | Runs the Vitest suite        |
| `npm run test:coverage` | Fails below 100% coverage    |
| `npm run lint`          | Runs ESLint with Prettier    |
| `npm run typecheck`     | Type-checks source and tests |
| `npm run build`         | Builds `dist/`               |

## Git hooks

- **pre-commit**: formats staged files, runs `eslint --fix`, and runs related tests
- **commit-msg**: rejects messages that are not [Conventional Commits](https://www.conventionalcommits.org)

Run `npm run commit` for a guided prompt.

## Pull requests

1. Fork the repo and create a branch: `git checkout -b feat/my-feature`
2. Write a failing test first, then make it pass
3. Commit: `git commit -m 'feat: add my feature'`
4. Push and open a pull request against `main`

## Releases

[semantic-release](https://github.com/semantic-release/semantic-release) publishes from `main`. It sets the version and updates `CHANGELOG.md` from commit types, so don't edit either by hand.
