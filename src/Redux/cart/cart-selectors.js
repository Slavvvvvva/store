import { createSelector } from "reselect"

const selectCart = state => state.cart

export const selectCartIatems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartIatems],
    cartItems => cartItems.reduce( (sum, cartItem) => sum + cartItem.quantity ,0)
)

export const selectCartTotal = createSelector(
    [selectCartIatems],
    cartItems => cartItems.reduce( (sum, cartItem) => sum + cartItem.quantity * cartItem.price ,0)
)