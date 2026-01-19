const stripeGateway = {
  name: "stripe",

  pay: async (payload) => {
    console.log("Stripe Payload:", payload);

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



// import { loadStripe } from "@stripe/stripe-js";

// const stripePromise = loadStripe("pk_test_xxxxx");

// const stripeGateway = {
//   name: "stripe",

//   pay: async (payload) => {
//     const stripe = await stripePromise;

//     const result = await stripe.redirectToCheckout({
//       lineItems: payload.items.map((item) => ({
//         price_data: {
//           currency: payload.currency,
//           product_data: {
//             name: item.name,
//           },
//           unit_amount: item.price * 100,
//         },
//         quantity: item.quantity,
//       })),
//       mode: "payment",
//       successUrl: window.location.origin + "/analytics",
//       cancelUrl: window.location.origin + "/ecom-checkout",
//     });

//     return {
//       success: !result.error,
//       gateway: "Stripe",
//       data: result,
//     };
//   },
// };

// export default stripeGateway;



