
import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import { convertCollectionsSnapshotToMap, firestore } from '../../Firebase/firebase'
import ShopActionTypes from "./shop-action-types"
import { fatchCollectionFailure, fatchCollectionSuccess } from './shop-actions'


export function* fatchCollectionAsync() {
    try {
        const collectjionRef = firestore.collection('collections')
        const snapshot = yield collectjionRef.get()
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
        yield put(fatchCollectionSuccess(collectionsMap))
    } catch (error) {
        yield put(fatchCollectionFailure(error.massage))
    }
}    
            

export function* fetchCollectionStart() {
    yield takeLatest(
        ShopActionTypes.FATCH_COLLECTION_START,
        fatchCollectionAsync
    )
}