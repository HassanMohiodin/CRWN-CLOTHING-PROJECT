import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ total }) => {
  const priceForStripe = total * 100;
  const publishableKey = 'pk_test_5AZYf4NjZWq7lF9U1GQwDCBi007Bwgrdat';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${total}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
