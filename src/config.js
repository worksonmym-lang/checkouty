const checkoutConfig = {
  // Fix: restore baseline value while keeping checkout logic unchanged.
  riskEngineTimeoutMs: Number(process.env.RISK_ENGINE_TIMEOUT_MS || 100),
  paymentGatewayTimeoutMs: Number(process.env.PAYMENT_GATEWAY_TIMEOUT_MS || 200),
  inventoryTimeoutMs: Number(process.env.INVENTORY_TIMEOUT_MS || 120),
};

module.exports = { checkoutConfig };
