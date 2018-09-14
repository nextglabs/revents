import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNBE80OSPUgBTkVe70wIitqvU1me1LSVc",
  authDomain: "revents-214817.firebaseapp.com",
  databaseURL: "https://revents-214817.firebaseio.com",
  projectId: "revents-214817",
  storageBucket: "revents-214817.appspot.com",
  messagingSenderId: "763561751337"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
}
firestore.settings(settings);

export default firebase;
