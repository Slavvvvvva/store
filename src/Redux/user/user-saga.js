import { all, call, put, takeLatest} from "@redux-saga/core/effects";
import { auth, createUserProfileDocument, getCurrentUser, googleProvider } from "../../Firebase/firebase";
import { EmailSignInFailure, EmailSignInSucess, GoogleSignInFailure, GoogleSignInSucess, signOutSessionFailure, signOutSessionSucces, signUPSessionFailure, signUpSessionSucces } from "./user-actions";
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

export function* signInWithEmailAndPassword({payload}) {
    const {email, password} = payload
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password)
        const userRef = yield call(createUserProfileDocument, user)
        const userSnapshot = yield userRef.get()
        yield put(EmailSignInSucess({id: userSnapshot.id, ...userSnapshot.data() }))
    } catch(error){
        yield put(EmailSignInFailure(error))
    }
}

export function* emailAndPasswordSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmailAndPassword)
}

export function* isUserAuthentificated() {
    try {
        const userAuth = yield getCurrentUser()
        if(!userAuth) return
        const userRef = yield call(createUserProfileDocument, userAuth)
        const userSnapshot = yield userRef.get()
        yield put(EmailSignInSucess({id: userSnapshot.id, ...userSnapshot.data() }))
    } catch(error){
        yield put(EmailSignInFailure(error))
    }
}

export function* onChackUserSession() {
    yield takeLatest(UserActionTypes.CHACK_USER_SESSION, isUserAuthentificated)
}

export function* signOutAsinc() {
    try {
        yield auth.signOut()
        yield put(signOutSessionSucces())
    } catch(error){
        yield put(signOutSessionFailure(error))
    }
}

export function* signOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SESSION_START, signOutAsinc)
}

export function* signUpAsinc({payload}) {
    const {displayName, email,password} = payload
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(email, password)
        yield put(signUpSessionSucces({user, additionalData:{displayName}}))
    } catch(error){
        yield put(signUPSessionFailure(error))
    }
}

export function* signUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_SESSION_START, signUpAsinc)
}

export function* signInAfterSignUp({payload}) {
    const {user, additionalData} = payload
    try {
        const userRef = yield call(createUserProfileDocument, user, additionalData)
        const userSnapshot = yield userRef.get()
        yield put(EmailSignInSucess({id: userSnapshot.id, ...userSnapshot.data() }))
    } catch(error){
        yield put(EmailSignInFailure(error))
    }
}

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SESSION_SUCCES, signInAfterSignUp)
}


export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(emailAndPasswordSignInStart),
        call(onChackUserSession),
        call(signOutStart),
        call(signUpStart),
        call(onSignUpSuccess)
    ])
}