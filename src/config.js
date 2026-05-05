const checkoutConfig = {
  // Regression: this was recently raised from 100 to 900 in PR-184.
  riskEngineTimeoutMs: Number(process.env.RISK_ENGINE_TIMEOUT_MS || 900),
  paymentGatewayTimeoutMs: Number(process.env.PAYMENT_GATEWAY_TIMEOUT_MS || 200),
  inventoryTimeoutMs: Number(process.env.INVENTORY_TIMEOUT_MS || 120),
};

module.exports = { checkoutConfig };
