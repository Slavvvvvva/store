import ShopActionTypes from "./shop-action-types";
import SHOP_DATA from "./shop.data";

const INITIAL_STATE = {
    collections: SHOP_DATA
}

const shopReducer  = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.UPDATE_COLLECTIONS : 
            return {...state, collectins: action.payload}
        default:
            return state
    }
}

export default shopReducer