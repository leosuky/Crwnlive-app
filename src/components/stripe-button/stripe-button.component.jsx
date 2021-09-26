import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IzQ7hCVo6jJs87fAq6aFGQh2LdSXf3POf2bnuEiEy3tdypI9p5avmOFET2bGoDnGa9aeFrVObPah0QqMBgTYzbq00NksZ6RXw'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful!!');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CROWN CLOTHING APP'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;