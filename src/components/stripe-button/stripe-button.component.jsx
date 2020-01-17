import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStrip = price * 100;
  const publishableKey = "pk_test_AduqFrUBLyBrCKYuzTAkSc2000nMblqpRW";

  const token = token => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crwn Clothing"
      billingAddress
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`Your total amount is $${price}`}
      amount={priceForStrip}
      panelLabel="Pay Now"
      token={token}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
