import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBY07N54jdTIe46Rir7QSmYccjAwkUpefg",
    authDomain: "slack-clone-e784f.firebaseapp.com",
    projectId: "slack-clone-e784f",
    storageBucket: "slack-clone-e784f.appspot.com",
    messagingSenderId: "619255291427",
    appId: "1:619255291427:web:64effabe4f9ce3ef669b96"
  };

  const firebaseApp =  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};