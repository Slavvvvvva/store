import { all, call, put, takeLatest } from "@redux-saga/core/effects"
import { UserActionTypes } from "../user/user-actions-types"
import { clerarAllItems } from "./cart-action"

export function* clearAllItems() {
   yield put(clerarAllItems())
}

export function* clearAllItemsSturt() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SESSION_SUCCES, clearAllItems)
}

export function* cartSagas() {
    yield all([
        call(clearAllItemsSturt)
    ])
}