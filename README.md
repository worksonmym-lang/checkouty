# Checkouty Demo Service

This repository is a minimal checkout service intentionally set up with a configuration regression so you can demo investigation and scoped fix workflows with AI agents.

## Why this repo exists

Use it to simulate a realistic incident narrative:

- checkout latency rises suddenly
- investigation connects alerts, tickets, docs, and recent PRs
- fix is narrowly scoped to the bad config
- follow-up documents root cause and prevention

## Run locally

```bash
npm install
npm start
```

Then trigger checkout calls:

```bash
curl -X POST http://localhost:3000/checkout \
  -H "content-type: application/json" \
  -d '{"cartId":"cart-123"}'
```

## Expected behavior right now (regressed)

Average checkout latency is around ~1200ms because `riskEngineTimeoutMs` is set to `900` in `src/config.js`.

## Suggested "scoped fix PR" for demos

Change only `riskEngineTimeoutMs` from `900` back to `100` in `src/config.js` and leave all other checkout logic untouched.

## Context artifacts

- Incident runbook: `docs/runbook-checkout-latency.md`
- Architecture note: `docs/checkout-architecture.md`
- Example ticket: `context/linear-482-checkout-latency.md`
- Example PR summary: `context/pr-184-risk-engine-timeout-change.md`
- Example monitoring snapshots: `monitoring/`
