import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { auth, createUserProfileDocument, googleProvider } from "../../Firebase/firebase";
import { GoogleSignInFailure, GoogleSignInSucess } from "./user-actions";
import { UserActionTypes } from "./user-actions-types";


export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider)
        const userRef = yield call(createUserProfileDocument, user)
        const userSnapshot = yield userRef.get()
        yield put(GoogleSignInSucess({id: userSnapshot.id, ...userSnapshot.data() }))
    } catch(error){
        yield put(GoogleSignInFailure(error))
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* userSagas() {
    yield all([call(onGoogleSignInStart)])
}