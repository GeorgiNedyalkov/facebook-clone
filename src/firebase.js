// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBxYAZuWUVGZFy06puL_Y2A75YOtE72_6Q",
    authDomain: "facebook-clone-acaf1.firebaseapp.com",
    projectId: "facebook-clone-acaf1",
    storageBucket: "facebook-clone-acaf1.appspot.com",
    messagingSenderId: "591560636783",
    appId: "1:591560636783:web:b942e5dec229a8c34f109a",
    measurementId: "G-NM2KS4FPYZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;