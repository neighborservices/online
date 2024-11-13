// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCQf7nZ2kSKRcG4EsCxKxKO2DIwyAJzOnc",
    authDomain: "xaii-eee7e.firebaseapp.com",
    projectId: "xaii-eee7e",
    storageBucket: "xaii-eee7e.appspot.com",
    messagingSenderId: "446604597743",
    appId: "1:446604597743:web:14b187a9896b664bd2be1a",
    measurementId: "G-QCP300N8GK"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
var db = firebase.firestore();
