import {UserActionTypes} from './user-actions-types'

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})

export const GoogleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
})

export const GoogleSignInSucess = user => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_SUCCES,
    payload: user
})

export const GoogleSignInFailure = massage => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
    payload: massage
})

export const EmailSignInStart = emailAndPassword => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
})

export const EmailSignInSucess = user => ({
    type: UserActionTypes.EMAIL_SIGN_IN_SUCCES,
    payload: user
})

export const EmailSignInFailure = massage => ({
    type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
    payload: massage
})