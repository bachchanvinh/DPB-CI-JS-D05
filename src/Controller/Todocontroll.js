
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDprJNeWI-VEnvzWzDRy4fM5R1dx01sWCo",
    authDomain: "todoapp-98cf7.firebaseapp.com",
    databaseURL: "https://todoapp-98cf7.firebaseio.com",
    projectId: "todoapp-98cf7",
    storageBucket: "todoapp-98cf7.appspot.com",
    messagingSenderId: "178251708150",
    appId: "1:178251708150:web:6892b53fbfa5ab07669ed7",
    measurementId: "G-T1TF6PN1CW"
};
firebase.initializeApp(firebaseConfig);
//---------------------------Config

var db = firebase.firestore();

export function Signinfunc(email, password) {
   return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            let uid = user.user.uid
            return uid
        }).then((uid)=>{
            return  readData(uid)
        })
        // .catch((error) => {
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        // });
}
function readData(uid) {
    var docRef = db.collection("users").doc(uid);
    return docRef.get().then(function (doc) {
        if (doc.exists) {
            return doc.data()
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function (error) {
        console.log("Error getting document:", error);
    });

}


export function Signupfunc(email, password, uname) {

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            let uid = user.user.uid
            return addData(uid, uname)
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
            console.log(errorCode)
        });

}
function addData(uid, uname) {
    db.collection("users").doc(`${uid}`).set({
        uname: uname,
        todos: []
    })
        .then(function () {
            console.log("Document successfully written!");
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
}