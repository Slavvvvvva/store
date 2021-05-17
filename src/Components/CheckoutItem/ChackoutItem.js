import React from 'react'
import {useDispatch } from 'react-redux'
import { addItem, clerarItemFromCart, removeItem } from '../../Redux/cart/cart-action'
import './checkout-item.styles.scss'

const ChekoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem
    const dispatch = useDispatch()
    const clearItem = (item) => dispatch(clerarItemFromCart(item))
    const addItemTo = (item) => dispatch(addItem(item))
    const removeItemfrom = (item) => dispatch(removeItem(item))
    return (
        <div className='checkout-item'>
            <div className ='image-container'>
                <img src = {imageUrl} alt ='item' />
            </div>
            <span className ='name'>{name}</span>
            <span className ='quantity'>
            <div className ='arrow' onClick= {()=> removeItemfrom(cartItem)}>&#10094;</div>
            <span className = 'value'>{quantity}</span>
            <div className ='arrow' onClick ={() => addItemTo(cartItem)}> &#10095; </div>
            </span>
            <span className ='price'>{price}</span>
            <div className ='remove-button' onClick ={ () => clearItem(cartItem)}> &#10005;</div>
        </div>
    )

}

export default ChekoutItem