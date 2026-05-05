const express = require("express");
const { checkoutConfig } = require("./config");

const app = express();
const port = Number(process.env.PORT || 3000);

app.use(express.json());

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runStage(stage, timeoutMs) {
  const startedAt = Date.now();
  await sleep(timeoutMs);
  return {
    stage,
    durationMs: Date.now() - startedAt,
  };
}

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "checkout-service",
    checkoutConfig,
  });
});

app.post("/checkout", async (req, res) => {
  const requestStartedAt = Date.now();
  const cartId = req.body?.cartId || "cart-demo";

  const risk = await runStage("risk-engine", checkoutConfig.riskEngineTimeoutMs);
  const inventory = await runStage("inventory", checkoutConfig.inventoryTimeoutMs);
  const payment = await runStage(
    "payment-gateway",
    checkoutConfig.paymentGatewayTimeoutMs
  );

  const latencyMs = Date.now() - requestStartedAt;
  const response = {
    cartId,
    status: "approved",
    latencyMs,
    timeline: [risk, inventory, payment],
  };

  // Basic operational log to imitate data a monitoring tool could capture.
  console.log(
    JSON.stringify({
      event: "checkout_completed",
      cartId,
      latencyMs,
      timeline: response.timeline,
      config: checkoutConfig,
      at: new Date().toISOString(),
    })
  );

  res.json(response);
});

app.listen(port, () => {
  console.log(`checkout-service listening on ${port}`);
});
