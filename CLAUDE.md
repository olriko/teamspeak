# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TeamSpeak server deployed as a Cloudflare Container via Wrangler. The project uses TypeScript with pnpm as the package manager.

## Commands

- **Install dependencies:** `pnpm install`
- **Dev server:** `pnpm wrangler dev`
- **Deploy:** `pnpm wrangler deploy`
- **Type check:** `pnpm tsc --noEmit`

## Architecture

This is a Cloudflare Containers project (not a traditional Worker). The `wrangler.jsonc` config references a container image (`registry.cloudflare.com/.../teamspeak`) rather than defining Worker routes. The entrypoint is `src/index.ts`.

## Tech Stack

- **Runtime:** Cloudflare Containers
- **Language:** TypeScript
- **Package manager:** pnpm (v10.23.0)
- **Deploy tool:** Wrangler v4
