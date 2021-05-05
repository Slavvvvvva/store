import ShopActionTypes from "./shop-action-types";


const INITIAL_STATE = {
    collections: null,
    isFatching: false,
    errorMessage: null
}

const shopReducer  = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.FATCH_COLLECTION_FAILURE : 
            return {...state, isFatching: false, errorMessage: action.payload }
        case ShopActionTypes.FATCH_COLLECTION_START : 
            return {...state, isFatching: true }
        case ShopActionTypes.FATCH_COLLECTION_SUCCESS : 
            return {...state, isFatching: false, collections: action.payload }      
        default:
            return state
    }
}

export default shopReducer