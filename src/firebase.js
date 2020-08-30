import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBUwbNuW9iNkp_Vwm6J1HP-_EaFWDwTsVs",
  authDomain: "placement-test-aa445.firebaseapp.com",
  databaseURL: "https://placement-test-aa445.firebaseio.com",
  projectId: "placement-test-aa445",
  storageBucket: "placement-test-aa445.appspot.com",
  messagingSenderId: "549841430856",
  appId: "1:549841430856:web:f5c40e297f7f136dfa6b7d",
  measurementId: "G-TYLEYS18VZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
