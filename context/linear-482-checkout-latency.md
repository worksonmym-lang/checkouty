# LINEAR-482: Checkout latency increased after rollout

## Reported by

Support via #customer-escalations

## Impact

- elevated checkout latency for EU region users
- conversion drop estimated at 3.1%

## Notes

- started shortly after deploy containing PR-184
- no significant error-rate increase
- likely configuration-level regression

## Expected resolution

- keep fix tightly scoped
- avoid touching business logic during mitigation
