import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDyqnIhkemyMR-YCiUc7R32Qnu7siwVBsw",
    authDomain: "crwn-app-db.firebaseapp.com",
    databaseURL: "https://crwn-app-db.firebaseio.com",
    projectId: "crwn-app-db",
    storageBucket: "crwn-app-db.appspot.com",
    messagingSenderId: "350633302916",
    appId: "1:350633302916:web:81512e48d13f45149bdbd1",
    measurementId: "G-0SF2GF8RWF"
  };


  
 
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;