import React from 'react'
import CustomButton from '../CustomButton/CustomButton'
import './cart-dropdown.styles.scss'


const CartDropdown = () => (
    <div className ='cart-dropdown'>
        <div className = 'cart-item' />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

export default CartDropdown