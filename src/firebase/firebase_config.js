import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {

    apiKey: "AIzaSyBlllj7ABVm2Za3stx6WHI_qxO-81oTYKQ",  
    authDomain: "onboard-c27ca.firebaseapp.com",
    projectId: "onboard-c27ca",
    storageBucket: "onboard-c27ca.appspot.com",
    messagingSenderId: "634997127668",
    appId: "1:634997127668:web:e1cd7f2709e08ebea4a1a1"
  
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;