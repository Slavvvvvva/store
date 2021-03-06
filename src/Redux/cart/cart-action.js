import {CartActionTypes} from './cart-action-types'

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
})

export const addItem = (payload) => ({
    type: CartActionTypes.ADD_ITEM,
    payload
})

export const removeItem = (payload) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload
})

export const clerarItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})
export const clerarAllItems = () => ({
    type: CartActionTypes.CLEAR_ALL_ITEMS
})