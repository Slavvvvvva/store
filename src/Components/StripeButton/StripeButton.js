import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({price}) => {
    const priceForStripe = price*100
    const publishableKey = 'pk_test_51IhYjrDZ7z2eqUxR6tA8StW8wlMVaB5GwZ3ARO2dGLi3I665TsNIKptsRKCZ44x8c0mAtma1VGpTMvMrEDxrS26b00NP2kfnLj'
    const onToken = token => {
        console.log(token)
        alert('Paymant Successful')
    }
    return(
        <StripeCheckout
            label ='Pay Now'
            name= 'My Store app'
            billingAddress
            shippingAddress
            description ={`Your total is $${price}`}
            amount = {priceForStripe}
            panelLabel ='Pay Now'
            token = {onToken}
            stripeKey ={publishableKey}
        />
    )
}

export default StripeButton