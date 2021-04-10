import {combineReducers} from 'redux'
import cartReducer from './cart/cart-reduser'
import userReducer from './user/user-reduser'

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});