# Checkout Architecture (Demo)

`POST /checkout` executes three blocking stages:

1. Risk decision
2. Inventory reservation
3. Payment authorization

Each stage is represented with a configured timeout to emulate external dependencies.

For incident demos, the most likely regression point is `src/config.js`, especially risk timeout changes.
