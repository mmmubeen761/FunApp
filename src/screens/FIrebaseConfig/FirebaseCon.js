import firebase from 'firebase/app'
import 'firebase/firestore'

 
var firebaseConfig = {
    apiKey: "AIzaSyBXilhhmzhnuainvGfCYh6Lfb1Sm9kQ5ZA",
    authDomain: "funapp-974e8.firebaseapp.com",
    projectId: "funapp-974e8",
    storageBucket: "funapp-974e8.appspot.com",
    messagingSenderId: "92077669452",
    appId: "1:92077669452:web:3f0ddcead3153577b7c8e9",
    measurementId: "G-P093RM0X7K"
  };


  firebase.initializeApp(firebaseConfig);

  export default firebase;