# Checkout Latency Runbook

## Symptoms

- p95 checkout latency > 900ms for 10+ minutes
- increased cart drop-off
- no increase in checkout error rate

## First checks

1. Confirm latency in monitoring dashboard.
2. Compare deploy timeline and recent PRs touching checkout config.
3. Validate whether external dependency latency changed.

## Known risky settings

- `riskEngineTimeoutMs` above `300` often degrades checkout p95.
- `paymentGatewayTimeoutMs` above `400` can cause user-visible delays.

## Fast mitigation

- Roll back `riskEngineTimeoutMs` to `100`.
- Redeploy and re-check p95/p99 for 15 minutes.

## Follow-up tasks

- Add alert for config deltas in checkout pipeline.
- Require review tag `checkout-performance` for timeout changes.
