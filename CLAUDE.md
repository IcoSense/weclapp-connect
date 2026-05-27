# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Run all tests (requires real weclapp credentials in test/test.js)
npm test

# Lint source files
npm run lint

# Lint and auto-fix
npm run lint:fix
```

Tests use **mocha** (5s timeout) and **chai**. To run a single test, use mocha's `--grep` flag:
```bash
npx mocha --timeout 5000 --grep "connect.auth"
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
