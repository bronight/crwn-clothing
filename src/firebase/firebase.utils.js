import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD1khqp1qyVGBnPkWyT51eF0fTSj9pjDsg",
    authDomain: "crwn-db-c5a4d.firebaseapp.com",
    databaseURL: "https://crwn-db-c5a4d.firebaseio.com",
    projectId: "crwn-db-c5a4d",
    storageBucket: "crwn-db-c5a4d.appspot.com",
    messagingSenderId: "781511154199",
    appId: "1:781511154199:web:3f04f547996f8ae86e5a52",
    measurementId: "G-CN470TBXEB"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;