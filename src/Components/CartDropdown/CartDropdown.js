import React from 'react'
import { connect } from 'react-redux'
import { selectCartIatems } from '../../Redux/cart/cart-selectors'
import CartItem from '../CartItem/CartItem'
import CustomButton from '../CustomButton/CustomButton'
import './cart-dropdown.styles.scss'



const CartDropdown = ({cartItems}) => (
    <div className ='cart-dropdown'>
        <div className = 'cart-items'>
           {
            cartItems.map(cartItem => <CartItem key = {cartItem.id} item ={cartItem}/> )
           } 
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)



const mapStateToProps = (state) =>({
    cartItems: selectCartIatems(state)
})

export default connect(mapStateToProps,null) (CartDropdown)