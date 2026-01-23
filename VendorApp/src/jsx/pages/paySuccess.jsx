import { useEffect } from "react";

const PaymentSuccess = () => {
  useEffect(() => {
    // Later: verify session / webhook
  }, []);

  return (
    <div className="container mt-5">
      <div className="alert alert-success">
        <h4>Payment Successful</h4>
        <p>Your payment was completed successfully.</p>
      </div>
    </div>
  );
};

export default PaymentSuccess;

// import { useEffect } from "react";
// import { useSearchParams } from "react-router-dom";

// const PaymentSuccess = () => {
//   const [params] = useSearchParams();
//   const sessionId = params.get("session_id");

//   useEffect(() => {
//     // sessionId proves Stripe redirect authenticity
//     console.log("Stripe session:", sessionId);
//   }, [sessionId]);

//   return (
//     <div className="container mt-5 text-center">
//       <h2 className="text-success">Payment Successful</h2>
//       <p>Your payment was completed successfully.</p>
//       <small>Session ID: {sessionId}</small>
//     </div>
//   );
// };

// export default PaymentSuccess;

