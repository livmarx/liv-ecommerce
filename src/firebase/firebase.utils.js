import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCt-yzoLiVyGqnlsi7EcWOv6hf19zkXdDg',
  authDomain: 'liv-ecommerce.firebaseapp.com',
  databaseURL: 'https://liv-ecommerce.firebaseio.com',
  projectId: 'liv-ecommerce',
  storageBucket: 'liv-ecommerce.appspot.com',
  messagingSenderId: '887756596544',
  appId: '1:887756596544:web:cba00dfae05b32f6af86a5',
  measurementId: 'G-XBSJWNPNQ8',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
