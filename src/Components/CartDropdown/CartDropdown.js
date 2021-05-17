import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { toggleCartHidden } from '../../Redux/cart/cart-action'
import { selectCartIatems } from '../../Redux/cart/cart-selectors'
import CartItem from '../CartItem/CartItem'
import CustomButton from '../CustomButton/CustomButton'
import './cart-dropdown.styles.scss'



const CartDropdown = () => {

    const cartItems = useSelector(selectCartIatems)
    const dispatch = useDispatch()
    let history = useHistory()

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
                {cartItems.length ? (
                    cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
                ) : (<span className='empty-massage'>your cart is ampty</span>)
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/chackout')
                dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown