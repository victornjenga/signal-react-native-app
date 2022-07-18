import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBlf-G2pZGc3GZREkK2-YPzKPiQLqVdf5A",
  authDomain: "signal-406d0.firebaseapp.com",
  projectId: "signal-406d0",
  storageBucket: "signal-406d0.appspot.com",
  messagingSenderId: "822853420083",
  appId: "1:822853420083:web:62e6a8e258692e7e5f4f46",
};

let app;

if(firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
}else{
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export {db,auth};
