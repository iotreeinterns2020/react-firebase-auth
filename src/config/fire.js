import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDLgKtth_2FHkSSNUTaQpAEXs9TW17aY5M",
    authDomain: "react-firebase-auth-34b90.firebaseapp.com",
    databaseURL: "https://react-firebase-auth-34b90.firebaseio.com",
    projectId: "react-firebase-auth-34b90",
    storageBucket: "react-firebase-auth-34b90.appspot.com",
    messagingSenderId: "163668529687",
    appId: "1:163668529687:web:4656b236b55837ff20c252",
    measurementId: "G-LTGHVPW7RK"
  };

  const fire = firebase.initializeApp(firebaseConfig)

  export default fire;