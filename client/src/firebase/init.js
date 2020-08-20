import firebase from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC496L4qGmtetkzTBnNvtOYiuIP9olJ1CM",
  authDomain: "huddleup-ce318.firebaseapp.com",
  databaseURL: "https://huddleup-ce318.firebaseio.com",
  projectId: "huddleup-ce318",
  storageBucket: "huddleup-ce318.appspot.com",
  messagingSenderId: "1013553364940",
  appId: "1:1013553364940:web:81bd26c556c8857d006769",
  measurementId: "G-83G6ZNTKEZ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();

const googleProvider = new firebase.auth.GoogleAuthProvider();

// always prompt for google auth when using this provider
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = async () => {
  return await auth.signInWithPopup(googleProvider);
};

export default firebase;