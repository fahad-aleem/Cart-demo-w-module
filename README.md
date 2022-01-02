
## Setup

this repository uses yarn workspaces. Simply run

```bash
yarn install
```

and it will resolve all dependencies from apps/packages

## Run your app

after installing dependencies run on root `yarn workspace @goldn/[app] [command]` e.g.

```bash
yarn workspace @goldn/brands-app dev
```

- reloves to `name` field in a package.json
- `[command]` resolve to the projects `script` declarations in `[app]` 's `package.json`

if you define `scripts` in a pacakge, you can also run it the same way e.g.

```bash
yarn workspace @goldn/ui storybook
```
