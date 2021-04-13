import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { createStructuredSelector } from 'reselect'
import { toggleCartHidden } from '../../Redux/cart/cart-action'
import { selectCartIatems } from '../../Redux/cart/cart-selectors'
import CartItem from '../CartItem/CartItem'
import CustomButton from '../CustomButton/CustomButton'
import './cart-dropdown.styles.scss'



const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className ='cart-dropdown'>
        <div className = 'cart-items'>
           {cartItems.length?(
            cartItems.map(cartItem => ( <CartItem key = {cartItem.id} item ={cartItem}/> ))
           ): (<span className = 'empty-massage'>your cart is ampty</span>)
           } 
        </div>
        <CustomButton onClick = {() => {
            history.push('./chackout')
            dispatch(toggleCartHidden())
        }} >GO TO CHECKOUT</CustomButton>
    </div>
)



const mapStateToProps = createStructuredSelector({
    cartItems: selectCartIatems
})


export default withRouter(connect(mapStateToProps)(CartDropdown)) 