import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzWsyVar8Cjl_Y7TItaqeY3kMWHI1_gHM",
  authDomain: "netflix-clone-82c21.firebaseapp.com",
  projectId: "netflix-clone-82c21",
  storageBucket: "netflix-clone-82c21.appspot.com",
  messagingSenderId: "905629112549",
  appId: "1:905629112549:web:bef7693cb581e6fd1ddc0c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
