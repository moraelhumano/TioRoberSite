import firebase from 'firebase/app'
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {

  apiKey: "AIzaSyAQ2Hldsjumch-K4jf-bc71WRz11sdt6Pg",
  authDomain: "boxersapp.firebaseapp.com",
  databaseURL: "https://boxersapp.firebaseio.com",
  projectId: "boxersapp",
  storageBucket: "boxersapp.appspot.com",
  messagingSenderId: "414954151053",
  appId: "1:414954151053:web:eca5ceb8ce98733f7196c4"

};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();