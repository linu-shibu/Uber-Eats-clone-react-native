import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBpwpC-wGzRyzaocNiiONrVKh55TurcDPQ",
  authDomain: "food-order-app-react-native.firebaseapp.com",
  projectId: "food-order-app-react-native",
  storageBucket: "food-order-app-react-native.appspot.com",
  messagingSenderId: "960652789058",
  appId: "1:960652789058:web:a9cf79d2e7ec2ecb7ab4db",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
