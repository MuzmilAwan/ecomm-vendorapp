import { useState } from "react";
import gateways from "./index";

export const PAYMENT_STATUS = {
  IDLE: "IDLE",
  PROCESSING: "PROCESSING",
  SUCCESS: "SUCCESS",
  FAILED: "FAILED",
  CANCELLED: "CANCELLED",
  PENDING: "PENDING",
};

const normalizeError = (err) => {
  if (!err) return "Unknown payment error";

  const map = {
    USER_CANCELLED: "Payment cancelled by user",
    PAYMENT_FAILED: "Payment failed. Please retry.",
    TIMEOUT: "Gateway timeout. Try again.",
    INVALID_PAYLOAD: "Invalid order details",
    GATEWAY_UNAVAILABLE: "Payment service unavailable",
  };

  return map[err.code] || err.message || "Unexpected payment error";
};

const validatePayload = (payload) => {
  if (!payload.items || payload.items.length === 0)
    throw { code: "INVALID_PAYLOAD" };

  if (!payload.totalAmount || payload.totalAmount <= 0)
    throw { code: "INVALID_PAYLOAD" };

  if (!payload.currency)
    throw { code: "INVALID_PAYLOAD" };
};

const usePayment = () => {
  const [status, setStatus] = useState(PAYMENT_STATUS.IDLE);
  const [error, setError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const initiatePayment = async (gatewayName, payload) => {
    try {
      if (isProcessing) return;

      setIsProcessing(true);
      setStatus(PAYMENT_STATUS.PROCESSING);
      setError(null);

      validatePayload(payload);

      const gateway = gateways[gatewayName];
      if (!gateway) throw { code: "GATEWAY_UNAVAILABLE" };

      const response = await gateway.pay(payload);

      if (response?.cancelled) {
        setStatus(PAYMENT_STATUS.CANCELLED);
        return response;
      }

      if (!response?.success) {
        setStatus(PAYMENT_STATUS.FAILED);
        throw { code: "PAYMENT_FAILED" };
      }

      setStatus(PAYMENT_STATUS.SUCCESS);
      return response;
    } catch (err) {
      const message = normalizeError(err);
      setError(message);

      if (err.code === "USER_CANCELLED") {
        setStatus(PAYMENT_STATUS.CANCELLED);
      } else if (err.code === "TIMEOUT") {
        setStatus(PAYMENT_STATUS.PENDING);
      } else {
        setStatus(PAYMENT_STATUS.FAILED);
      }

      return { success: false, error: message };
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    initiatePayment,
    status,
    error,
    isProcessing,
  };
};

export default usePayment;
