import { createSelector } from "reselect"

const selectCart = state => state.cart

export const selectCartIatems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartIatems],
    cartItems => cartItems.reduce( (sum, cartItem) => sum + cartItem.quantity ,0)
)