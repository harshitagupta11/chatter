import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBKRXTfCCjpCaViNdmSRWy5Tfh4C4iIoQ0",
    authDomain: "chatter-ca325.firebaseapp.com",
    projectId: "chatter-ca325",
    storageBucket: "chatter-ca325.appspot.com",
    messagingSenderId: "715900608271",
    appId: "1:715900608271:web:d54785f7ffbaf34014287a",
    measurementId: "G-JR2WC41DS3"
  };

firebase.initializeApp(firebaseConfig);
const db=firebase.firestore()  

const provider =new  firebase.auth.GoogleAuthProvider()
const auth = firebase.auth()
export {auth,provider}
export default db;