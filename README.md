# Copy GitHub Project to Miro

## Config

Create /.env and write your Miro OAuth token like below.
```sh
MIRO_TOKEN='your Miro OAuth token with boards:read, boards:write'
```

## Run

Run Deno app.
```sh
% deno run --allow-env --allow-read mod.ts
```