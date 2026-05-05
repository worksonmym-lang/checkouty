# PR-184: Increase risk engine timeout for fraud provider retries

## Change summary

- changed `riskEngineTimeoutMs` from `100` to `900`
- intended to reduce false declines caused by provider jitter

## Side effects observed later

- checkout p95 and p99 latency both regressed
- user flow slowed even when downstream systems were healthy

## Recommendation

Revert only the risk timeout change first, then revisit fraud-provider reliability with asynchronous handling.
