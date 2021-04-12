import {CartActionTypes} from './cart-action-types'
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
})

export const addItem = (payload) => ({
    type: CartActionTypes.ADD_ITEM,
    payload
})