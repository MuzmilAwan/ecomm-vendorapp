const stripeGateway = {
  name: "stripe",

  // pay: async (payload) => {
  //   console.log("Stripe Payload:", payload);

   pay: async (payload) => {

    // simulate scenarios
    if (payload.simulate === "CANCEL") {
      throw { code: "USER_CANCELLED" };
    }

    if (payload.simulate === "FAIL") {
      throw { code: "PAYMENT_FAILED" };
    }

    if (payload.simulate === "GATEWAY") {
      throw { code: "GATEWAY_UNAVAILABLE" };
    }

    if (payload.simulate === "TIMEOUT") {
      await new Promise((_, reject) =>
        setTimeout(() => reject({ code: "TIMEOUT" }), 5000)
      );
    }

    
    // Simulated delay (acts like API call)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Dummy success response
    return {
      success: true,
      gateway: "Stripe",
      data: {
        transactionId: "stripe_test_txn_001",
        status: "PAID",
        amount: payload.totalAmount,
        currency: payload.currency,
        items: payload.items,
        createdAt: new Date().toISOString(),
      },
    };
  },
};

export default stripeGateway;

