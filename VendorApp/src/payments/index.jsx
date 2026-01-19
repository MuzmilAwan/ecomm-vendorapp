import stripeGateway from "./gateways/stripe";
import paypalGateway from "./gateways/paypal";
import razorpayGateway from "./gateways/razorpay";

const gateways = {
  stripe: stripeGateway,
  paypal: paypalGateway,
  razorpay: razorpayGateway,
};

export default gateways;
