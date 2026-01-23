const PaymentCancel = () => {
  return (
    <div className="container mt-5">
      <div className="alert alert-danger">
        <h4>Payment Cancelled</h4>
        <p>You cancelled the payment on Stripe.</p>
      </div>
    </div>
  );
};

export default PaymentCancel;
