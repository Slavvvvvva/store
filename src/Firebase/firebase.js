import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCIwdpsNyhSMQI7ak8wSt0k0is-Kl8piPM",
    authDomain: "shop-4bd78.firebaseapp.com",
    projectId: "shop-4bd78",
    storageBucket: "shop-4bd78.appspot.com",
    messagingSenderId: "965011054837",
    appId: "1:965011054837:web:185156b0c592011bfea5bc",
    measurementId: "G-KKYSDCNDBE"
  }

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase