import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCl2sL71bhMBWFt9AUfGY6kGUUlMQmgyYo",
    authDomain: "react-my-pets-a321d.firebaseapp.com",
    projectId: "react-my-pets-a321d",
    storageBucket: "react-my-pets-a321d.appspot.com",
    messagingSenderId: "722957222695",
    appId: "1:722957222695:web:d09936d95b8778d5e35f02"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
export const auth = firebase.auth();