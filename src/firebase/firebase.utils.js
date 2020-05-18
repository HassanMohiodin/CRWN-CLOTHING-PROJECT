import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAMzY6Tt-bm6qRqNryFbplRT4kPBFMJMvs',
  authDomain: 'crown-project-8c3c8.firebaseapp.com',
  databaseURL: 'https://crown-project-8c3c8.firebaseio.com',
  projectId: 'crown-project-8c3c8',
  storageBucket: 'crown-project-8c3c8.appspot.com',
  messagingSenderId: '453174209942',
  appId: '1:453174209942:web:f4f4676e196b060b8d81b7',
  measurementId: 'G-7YXTNNDEZ3',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, otherData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...otherData });
    } catch (err) {
      console.log(`There is an error in creating the user ${err}`);
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
