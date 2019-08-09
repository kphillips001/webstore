import firebase from 'firebase/app'; 
import 'firebase/firestore';
import 'firebase/auth'; 

const config = {
  apiKey: "AIzaSyBWTXpMuld2gzysMHHIBKL7qRSfH1H2oJE",
  authDomain: "webstore-db.firebaseapp.com",
  databaseURL: "https://webstore-db.firebaseio.com",
  projectId: "webstore-db",
  storageBucket: "",
  messagingSenderId: "52197057246",
  appId: "1:52197057246:web:8c57b4616996272e"
};

firebase.initializeApp(config); 

export const auth = firebase.auth(); 
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 