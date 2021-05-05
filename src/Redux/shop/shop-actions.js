import { convertCollectionsSnapshotToMap, firestore } from "../../Firebase/firebase";
import ShopActionTypes from "./shop-action-types";

export const fatchCollectionSrart = () => ({
    type: ShopActionTypes.FATCH_COLLECTION_START    
})
export const fatchCollectionFailure = (errorMessage) => ({
    type: ShopActionTypes.FATCH_COLLECTION_FAILURE,
    payload: errorMessage    
})

export const fatchCollectionSuccess = (collectionsMap) => ({
    type: ShopActionTypes.FATCH_COLLECTION_SUCCESS,
    payload: collectionsMap
})

export const fatchCollectionSrartAsync = () => {
    return dispatch => {
        const collectjionRef = firestore.collection('collections')
        dispatch(fatchCollectionSrart())
        collectjionRef.get()
            .then(snapshot => {
                const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
                dispatch(fatchCollectionSuccess(collectionsMap))
            })
            .catch( error => dispatch(fatchCollectionFailure(error.massage)))
    } 
}