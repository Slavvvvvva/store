import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import ChekoutItem from '../../Components/CheckoutItem/ChackoutItem'
import { selectCartIatems, selectCartTotal } from '../../Redux/cart/cart-selectors'
import './checkout.styles.scss'

const ChekoutPage = ({cartItems, total}) => {
    return (
        <div className='checkout-page'>
            <div className = 'checkout-header'>
                <div className = 'header-block'>
                    <span>Product</span>
                </div>
                <div className = 'header-block'>
                    <span>Description</span>
                </div>
                <div className = 'header-block'>
                    <span>Quantity</span>
                </div>
                <div className = 'header-block'>
                    <span>Price</span>
                </div>
                <div className = 'header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map( cartItem =>  <ChekoutItem key = {cartItem.id} cartItem = {cartItem}/> )
            }
            <div className = 'total'>
                <span>{total}</span>
            </div>
        </div>
    )

}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartIatems,
    total: selectCartTotal
})

export default connect(mapStateToProps,null)(ChekoutPage)