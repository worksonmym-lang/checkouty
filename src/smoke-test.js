const assert = require("node:assert/strict");

async function run() {
  const health = await fetch("http://localhost:3000/health");
  assert.equal(health.status, 200, "health endpoint should be up");

  const checkout = await fetch("http://localhost:3000/checkout", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ cartId: "cart-smoke" }),
  });
  assert.equal(checkout.status, 200, "checkout endpoint should return success");

  const payload = await checkout.json();
  assert.equal(payload.status, "approved");
  assert.ok(payload.latencyMs >= 1000, "latency should expose current regression");

  console.log("Smoke test passed.");
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
