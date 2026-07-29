# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Run all tests — works without credentials
npm test

# Lint source files
npm run lint

# Lint and auto-fix
npm run lint:fix
```

Tests use **mocha** (5s timeout) and **chai**, and fall into two groups:

- **Offline** (`test/version.test.js`) — mocks `axios` via `Module._load` to assert URL
  construction, version routing, and the endpoint surface of each version. Always runs.
- **Smoke** (`test/test.js`) — hits a real tenant, reading `WECLAPP_TENANT` and
  `WECLAPP_APIKEY` from the environment. **Skips itself** when either is unset, so a clean
  checkout is green (11 passing, 2 pending). Never hard-code a token here.

To run a single suite, use mocha's `--grep` flag with one of the suite names —
`version routing`, `endpoint surface`, `binary responses`, or `smoke`:

```bash
npx mocha --timeout 5000 --grep "version routing"
```

## Architecture

This is a Node.js library (`@icosense/connect`) that wraps the weclapp REST API v1. The public surface is a factory function in `src/app.js` that returns a bound method object.

### Core flow

1. **`src/app.js`** — Factory function. Accepts `{tenant, domain, apikey, protocol}`, constructs `fetchAPI` (axios-based), spreads all endpoint modules into one object, then binds `fetchAPI` as the first argument to every endpoint function via `.bind(null, fetchAPI)`. Returns the merged object plus a raw `fetch` escape hatch.

2. **`src/endpoints/*.js`** — Each file exports a plain object of `async` functions. Every function receives `fetch` as its first parameter (injected by `app.js`); callers never pass it. The rest endpoint module follows one consistent pattern:

   ```js
   async getSomething(fetch, {page, pageSize, sort, ...rest}) {
       return fetch(buildUrl('resource', {page, pageSize, sort, ...rest}))
   },
   async getSomethingById(fetch, id) {
       return fetch(`resource/id/${id}`)
   },
   async createSomething(fetch, body) {
       return fetch('resource', {method: 'POST', body})
   },
   async updateSomethingForId(fetch, id, body) {
       return fetch(`resource/id/${id}`, {method: 'PUT', body})
   }
   ```

3. **`src/utils.js`** — Exports `buildUrl(url, obj)`: appends truthy key/value pairs from `obj` as URL-encoded query parameters.

### Adding a new endpoint

Create `src/endpoints/<resourceName>.js` following the pattern above, then add a `...require('./endpoints/<resourceName>')` spread in the `endpoints` object in `src/app.js`.

### API URL pattern

All requests go to:  
`{protocol}://{domain || tenant.weclapp.com}/webapp/api/v1/{endpoint}`

Authentication is via the `AuthenticationToken` header. The current branch (`feature/2026-support-api-v2`) targets v2 API support.

## Code Style

- **Indentation**: tabs (enforced by ESLint and `.editorconfig`)
- **Line endings**: Windows (`\r\n`) — enforced by ESLint rule `linebreak-style: windows`
- **ES version**: ES2018 (async/await, object spread)
- **Modules**: CommonJS (`require`/`module.exports`)
