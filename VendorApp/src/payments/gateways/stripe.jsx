const STRIPE_PAYMENT_LINK =
  "https://buy.stripe.com/test_eVqfZgfN7aMA9Vzab0ejK01"; 

const stripeGateway = {
  name: "stripe",

  pay:  () => {
    // Hard redirect to Stripe hosted checkout
    window.location.assign(STRIPE_PAYMENT_LINK);

    // Return pending so hook doesn't mark as failed
    // return {
    //   success: true,
    //   pending: true,
    //   gateway: "Stripe",
    // };
    // return {
    //   status: "REDIRECTING",
    //   gateway: "STRIPE",
    // };
  },
};

export default stripeGateway;
