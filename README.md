# Copy GitHub Project to Miro

## Config

Create /.env and write your Miro OAuth token like below.

```sh
MIRO_TOKEN='your Miro OAuth token with boards:read and boards:write'
GITHUB_TOKEN='your GitHub personal access token with project'
```

## Run

Run Deno app.

```sh
% deno run --allow-env --allow-read --allow-net mod.ts
```
