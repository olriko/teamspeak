# TeamSpeak on Cloudflare Containers

A TeamSpeak server running as a [Cloudflare Container](https://developers.cloudflare.com/containers/), managed by a Cloudflare Worker.

## How it works

The Worker (`src/index.ts`) manages a single TeamSpeak container instance via a Durable Object. It exposes the TeamSpeak HTTP ServerQuery API (port 10080) through the Worker's fetch handler.

- `GET /` — Returns container status as JSON
- All other requests are proxied to the container's HTTP ServerQuery interface

> **Note:** Voice traffic (UDP 9987) is not supported through Cloudflare's HTTP-only routing. This setup exposes the ServerQuery API only.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [pnpm](https://pnpm.io/) (v10)
- [Docker](https://www.docker.com/) (for local development)
- A [Cloudflare account](https://dash.cloudflare.com/) with Containers enabled

## Setup

```sh
pnpm install
```

## Development

```sh
pnpm dev
```

Requires Docker running locally. Visit the Worker URL to see the container status.

## Deploy

```sh
pnpm deploy
```

First deploy takes a few minutes for container image provisioning. Check status with:

```sh
pnpm wrangler containers list
```

## Project structure

```
src/index.ts      # Worker entrypoint and TeamSpeakContainer class
Dockerfile        # TeamSpeak server image config
wrangler.jsonc    # Cloudflare Containers / Worker config
```

## Configuration

The container runs with these defaults:

| Setting | Value |
|---|---|
| Instance type | `basic` (1/4 vCPU, 1 GiB RAM) |
| Max instances | 1 |
| Sleep after | 24h of inactivity |
| ServerQuery protocol | HTTP (port 10080) |

## License

ISC
