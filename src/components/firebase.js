
// import * as firebase from "firebase";
// import "firebase/firestore";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const config = {
  apiKey: "AIzaSyCYDXa6OKHhUjx7r49LDuNuBhpJ5xMPq1Q",
  authDomain: "papa--redux.firebaseapp.com",
  projectId: "papa--redux",
  storageBucket: "papa--redux.appspot.com",
  messagingSenderId: "678918836051",
  appId: "1:678918836051:web:47e2504130af03b30bdba6"
};


firebase.initializeApp(config);

export default firebase.firestore();











