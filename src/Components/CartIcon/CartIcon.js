import React from 'react'
import './cart-icon.styles.scss'
import {ReactComponent as ShoppingIcon} from '../../IMG/shopping-bag.svg'
import {toggleCartHidden} from '../../Redux/cart/cart-action'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartItemsCount } from '../../Redux/cart/cart-selectors'



const CartIcon = () => {

    const dispatch = useDispatch()
    const toggleCart = () => dispatch(toggleCartHidden())

    const itemCount = useSelector(selectCartItemsCount)

    return(
    <div className = 'cart-icon' onClick = {toggleCart}>
        <ShoppingIcon className = 'shopping-icon'/>
        <span className = 'item-count'>{itemCount}</span>
    </div>
)}

export default CartIcon 