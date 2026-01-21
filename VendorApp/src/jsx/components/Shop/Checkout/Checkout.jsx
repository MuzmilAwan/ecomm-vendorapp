import React, { Fragment, useState } from "react";
import { Form } from "react-bootstrap";
import PageTitle from "../../../layouts/PageTitle";
import usePayment from "../../../../payments/usePayment";


const Checkout = () => {
   const { initiatePayment, status, error, isProcessing } = usePayment();
   const [paymentResponse, setPaymentResponse] = useState(null);

   // dummy cart replace later with real data
   const cartItems = [
      { id: "1", name: "Product A", price: 12, quantity: 1 },
      { id: "2", name: "Product B", price: 8, quantity: 1 },
   ];

   const total = 20;

   const handlePayment = async (gateway, extra = {}) => {
      const res = await initiatePayment(gateway, {
         items: cartItems,
         totalAmount: total,
         currency: "USD",
         ...extra,
      });

      setPaymentResponse(res);
   };




   return (
      <Fragment>
         <PageTitle activeMenu="Checkout" motherMenu="Shop" />
         <div className="row">
            <div className="col-xl-12">
               <div className="card">
                  <div className="card-body">
                     <div className="row">
                        <div className="col-md-4 order-md-2 mb-4">
                           <h4 className="d-flex justify-content-between align-items-center mb-3">
                              <span className="text-muted">Your cart</span>
                              <span className="badge badge-primary badge-pill">
                                 3
                              </span>
                           </h4>
                           <ul className="list-group mb-3">
                              <li className="list-group-item d-flex justify-content-between lh-condensed">
                                 <div>
                                    <h6 className="my-0">Product name</h6>
                                    <small className="text-muted">
                                       Brief description
                                    </small>
                                 </div>
                                 <span className="text-muted">$12</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between lh-condensed">
                                 <div>
                                    <h6 className="my-0">Second product</h6>
                                    <small className="text-muted">
                                       Brief description
                                    </small>
                                 </div>
                                 <span className="text-muted">$8</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between lh-condensed">
                                 <div>
                                    <h6 className="my-0">Third item</h6>
                                    <small className="text-muted">
                                       Brief description
                                    </small>
                                 </div>
                                 <span className="text-muted">$5</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between active">
                                 <div className="text-white">
                                    <h6 className="my-0 text-white">
                                       Promo code
                                    </h6>
                                    <small>EXAMPLECODE</small>
                                 </div>
                                 <span className="text-white">-$5</span>
                              </li>
                              <li className="list-group-item d-flex justify-content-between">
                                 <span>Total (USD)</span>
                                 <strong>$20</strong>
                              </li>
                           </ul>

                           <form onSubmit={(e) => e.preventDefault()}>
                              <div className="input-group">
                                 <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Promo code"
                                 />

                                 <button
                                    type="submit"
                                    className="btn btn-primary"
                                 >
                                    Redeem
                                 </button>

                              </div>
                           </form>
                        </div>
                        <div className="col-md-8 order-md-1">
                           <h4 className="mb-3">Billing address</h4>
                           <form className="needs-validation" noValidate="">
                              <div className="row">
                                 <div className="col-md-6 mb-3">
                                    <label htmlFor="firstName" className="form-label">
                                       First name
                                    </label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="firstName"
                                       placeholder=""
                                       required
                                    />
                                    <div className="invalid-feedback">
                                       Valid first name is required.
                                    </div>
                                 </div>
                                 <div className="col-md-6 mb-3">
                                    <label htmlFor="lastName" className="form-label">Last name</label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="lastName"
                                       placeholder=""
                                       required
                                    />
                                    <div className="invalid-feedback">
                                       Valid last name is required.
                                    </div>
                                 </div>
                              </div>

                              <div className="mb-3">
                                 <label htmlFor="username" className="form-label">Username</label>
                                 <div className="input-group">
                                    <span className="input-group-text">
                                       @
                                    </span>

                                    <input
                                       type="text"
                                       className="form-control"
                                       id="username"
                                       placeholder="Username"
                                       required
                                    />
                                    <div className="invalid-feedback d-block">
                                       Your username is required.
                                    </div>
                                 </div>
                              </div>

                              <div className="mb-3">
                                 <label htmlFor="email" className="form-label">
                                    Email
                                    <span className="text-muted">
                                       (Optional)
                                    </span>
                                 </label>
                                 <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="you@example.com"
                                 />
                                 <div className="invalid-feedback">
                                    Please enter a valid email address for
                                    shipping updates.
                                 </div>
                              </div>

                              <div className="mb-3">
                                 <label htmlFor="address" className="form-label">Address</label>
                                 <input
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    placeholder="1234 Main St"
                                    required=""
                                 />
                                 <div className="invalid-feedback">
                                    Please enter your shipping address.
                                 </div>
                              </div>

                              <div className="mb-3">
                                 <label htmlFor="address2" className="form-label">
                                    Address 2
                                    <span className="text-muted">
                                       (Optional)
                                    </span>
                                 </label>
                                 <input
                                    type="text"
                                    className="form-control"
                                    id="address2"
                                    placeholder="Apartment or suite"
                                 />
                              </div>

                              <div className="row">
                                 <div className="col-md-4 mb-3">
                                    <label htmlFor="state" className="form-label">Country</label>
                                    <Form.Control as="select">
                                       <option style={{ color: "blue" }}>
                                          Choose...
                                       </option>
                                       <option>United States</option>
                                    </Form.Control>

                                    <div className="invalid-feedback">
                                       Please provide a valid state.
                                    </div>
                                 </div>
                                 <div className="col-md-4 mb-3">
                                    <label htmlFor="state" className="form-label">State</label>
                                    <Form.Control as="select">
                                       <option>Choose...</option>
                                       <option>California</option>
                                    </Form.Control>

                                    <div className="invalid-feedback">
                                       Please provide a valid state.
                                    </div>
                                 </div>
                                 <div className="col-md-3 mb-3">
                                    <label htmlFor="zip" className="form-label">Zip</label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="zip"
                                       placeholder=""
                                       required
                                    />
                                    <div className="invalid-feedback">
                                       Zip code required.
                                    </div>
                                 </div>
                              </div>
                              {/* <hr className="mb-4" />
                              <div className="form-check custom-checkbox mb-2">
                                 <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="same-address"
                                 />
                                 <label
                                    className="form-check-label"
                                    htmlFor="same-address"
                                 >
                                    Shipping address is the same as my billing
                                    address
                                 </label>
                              </div>
                              <div className="form-check custom-checkbox mb-2">
                                 <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="save-info"
                                 />
                                 <label
                                    className="form-check-label"
                                    htmlFor="save-info"
                                 >
                                    Save this information for next time
                                 </label>
                              </div> */}
                              <hr className="mb-4" />

                              {/* Negative Scenario Simulation */}
                              <div className="card mt-4">
                                 <div className="card-body">
                                    <h5 className="mb-3">Negative Scenarios For testing</h5>

                                    <div className="row g-3">
                                       <div className="col-md-3">
                                          <button
                                             className="btn btn-warning w-100"
                                             onClick={() =>
                                                handlePayment("stripe", { simulate: "FAIL" })
                                             }
                                          >
                                             Failure
                                          </button>
                                       </div>

                                       <div className="col-md-3">
                                          <button
                                             className="btn btn-secondary w-100"
                                             onClick={() =>
                                                handlePayment("stripe", { simulate: "CANCEL" })
                                             }
                                          >
                                             Cancel
                                          </button>
                                       </div>

                                       <div className="col-md-3">
                                          <button
                                             className="btn btn-success w-100"
                                             onClick={() =>
                                                handlePayment("stripe", { simulate: "GATEWAY" })
                                             }
                                          >
                                             PG Unavailable
                                          </button>
                                       </div>

                                       <div className="col-md-3">
                                          <button
                                             className="btn btn-primary w-100"
                                             onClick={() =>
                                                handlePayment("stripe", { simulate: "TIMEOUT" })
                                             }
                                          >
                                             Timeout
                                          </button>
                                       </div>
                                    </div>
                                 </div>
                              </div>


                              <h3 className="mb-3">Payment Methods</h3>

                              {/* Payment Buttons Section */}
                              <div className="card mt-3">
                                 <div className="card-body">

                                    <div className="row g-3">
                                       <div className="col-md-4">
                                          <button
                                             disabled={isProcessing}
                                             onClick={() => handlePayment("stripe")}
                                             className="btn btn-warning w-100"
                                          >
                                             {isProcessing ? "Processing..." : "Pay with Stripe"}
                                          </button>
                                       </div>

                                       <div className="col-md-4">
                                          <button
                                             disabled={isProcessing}
                                             onClick={() => handlePayment("paypal")}
                                             className="btn btn-success w-100"
                                          >
                                             {isProcessing ? "Processing..." : "Pay with Paypal"}
                                          </button>
                                       </div>

                                       <div className="col-md-4">
                                          <button
                                             disabled={isProcessing}
                                             onClick={() => handlePayment("razorpay")}
                                             className="btn btn-primary w-100"
                                          >
                                             {isProcessing ? "Processing..." : "Pay with Razorpay"}
                                          </button>
                                       </div>

                                       <div className="col-md-4">
                                          <button
                                             disabled={isProcessing}
                                             onClick={() => handlePayment("payu")}
                                             className="btn btn-success w-100"
                                          >
                                             {isProcessing ? "Processing..." : "Pay with PayU"}
                                          </button>
                                       </div>

                                       <div className="col-md-4">
                                          <button
                                             disabled={isProcessing}
                                             onClick={() => handlePayment("paytm")}
                                             className="btn btn-warning w-100"
                                          >
                                             {isProcessing ? "Processing..." : "Pay with Paytm"}
                                          </button>
                                       </div>

                                       <div className="col-md-4">
                                          <button
                                             disabled={isProcessing}
                                             onClick={() => handlePayment("ccavenue")}
                                             className="btn btn-primary w-100"
                                          >
                                             {isProcessing ? "Processing..." : "Pay with CCAvenue"}
                                          </button>
                                       </div>
                                    </div>
                                 </div>
                              </div>



                              {/* UI display temporaray  */}

                              {status && (
                                 <div className="alert alert-info mt-3">
                                    Payment Status: <strong>{status}</strong>
                                 </div>
                              )}

                              {paymentResponse && (
                                 <div className="alert alert-success mt-3">
                                    <h6>Payment Response</h6>
                                    <pre style={{ margin: 0 }}>
                                       {JSON.stringify(paymentResponse, null, 2)}
                                    </pre>
                                 </div>
                              )}




                              {/* <div className="d-block my-3">
                                 <div className="form-check custom-radio mb-2">
                                    <input
                                       id="credit"
                                       name="paymentMethod"
                                       type="radio"
                                       className="form-check-input"
                                       required
                                    />
                                    <label
                                       className="form-check-label"
                                       htmlFor="credit"
                                    >
                                       Credit card
                                    </label>
                                 </div>
                                 <div className="form-check custom-radio mb-2">
                                    <input
                                       id="debit"
                                       name="paymentMethod"
                                       type="radio"
                                       className="form-check-input"
                                       required
                                    />
                                    <label
                                       className="form-check-label"
                                       htmlFor="debit"
                                    >
                                       Debit card
                                    </label>
                                 </div> */}
                              {/* <div className="form-check custom-radio mb-2">
                                    <input
                                       id="paypal"
                                       name="paymentMethod"
                                       type="radio"
                                       className="form-check-input"
                                       required
                                    />
                                    <label
                                       className="form-check-label"
                                       htmlFor="paypal"
                                    >
                                       Paypal
                                    </label>
                                 </div> */}
                              {/* </div> */}
                              {/* <div className="row">
                                 <div className="col-md-6 mb-3">
                                    <label htmlFor="cc-name" className="form-label">
                                       Name on card
                                    </label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="cc-name"
                                       placeholder=""
                                       required
                                    />
                                    <small className="text-muted">
                                       Full name as displayed on card
                                    </small>
                                    <div className="invalid-feedback">
                                       Name on card is required
                                    </div>
                                 </div>
                                 <div className="col-md-6 mb-3">
                                    <label htmlFor="cc-number" className="form-label">
                                       Credit card number
                                    </label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="cc-number"
                                       placeholder=""
                                       required
                                    />
                                    <div className="invalid-feedback">
                                       Credit card number is required
                                    </div>
                                 </div>
                              </div> */}
                              {/* <div className="row">
                                 <div className="col-md-3 mb-3">
                                    <label htmlFor="cc-expiration" className="form-label">
                                       Expiration
                                    </label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="cc-expiration"
                                       placeholder=""
                                       required
                                    />
                                    <div className="invalid-feedback" >
                                       Expiration date required
                                    </div>
                                 </div>
                                 <div className="col-md-3 mb-3">
                                    <label htmlFor="cc-expiration" className="form-label">CVV</label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       id="cc-cvv"
                                       placeholder=""
                                       required
                                    />
                                    <div className="invalid-feedback">
                                       Security code required
                                    </div>
                                 </div>
                              </div> */}
                              <hr className="mb-4" />
                              {/* <button
                                 className="btn btn-primary btn-lg btn-block"
                                 type="submit"
                              >
                                 Continue to checkout
                              </button> */}
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default Checkout;
