import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCl2sL71bhMBWFt9AUfGY6kGUUlMQmgyYo",
    authDomain: "react-my-pets-a321d.firebaseapp.com",
    databaseURL: "https://react-my-pets-a321d-default-rtdb.firebaseio.com",
    projectId: "react-my-pets-a321d",
    storageBucket: "react-my-pets-a321d.appspot.com",
    messagingSenderId: "722957222695",
    appId: "1:722957222695:web:d09936d95b8778d5e35f02"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('Logged in');
        let email = user.email;
        let emailVerified = user.emailVerified;
        let isAnonymous = user.isAnonymous;
        let uid = user.uid;
        console.log(user);
        console.log(email);
        console.log(emailVerified);
        console.log(isAnonymous);
        console.log(uid);

        firebase.auth().currentUser.getIdToken()
        .then((token)=> {
            console.log(token);
            sessionStorage.setItem('token', token);
            sessionStorage.setItem('username', email);
        })
    }
    else {
        console.log('Logged out')
    }
});

export default firebase;
export const auth = firebase.auth();