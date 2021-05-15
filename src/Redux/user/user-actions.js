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

export const chackUserSession = () => ({
    type: UserActionTypes.CHACK_USER_SESSION,
})

export const signOutSession = () => ({
    type: UserActionTypes.SIGN_OUT_SESSION_START,
})

export const signOutSessionSucces = () => ({
    type: UserActionTypes.SIGN_OUT_SESSION_SUCCES,
})

export const signOutSessionFailure = (massage) => ({
    type: UserActionTypes.SIGN_OUT_SESSION_FAILURE,
    payload: massage
})

export const signUpSessionStart= (signUpData) => ({
    type: UserActionTypes.SIGN_UP_SESSION_START,
    payload: signUpData
})

export const signUpSessionSucces = ({user, additionalData}) => ({
    type: UserActionTypes.SIGN_UP_SESSION_SUCCES,
    payload: {user, additionalData}
})

export const signUPSessionFailure = (massage) => ({
    type: UserActionTypes.SIGN_OUT_SESSION_FAILURE,
    payload: massage
})