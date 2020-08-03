import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCSTJJBIjb7xEdYLIrK6D8of8I-UFMDFjU",
    authDomain: "appuser-f4365.firebaseapp.com",
    databaseURL: "https://appuser-f4365.firebaseio.com",
    projectId: "appuser-f4365",
    storageBucket: "appuser-f4365.appspot.com",
    messagingSenderId: "691706143263",
    appId: "1:691706143263:web:c9240f48fba88dfacf2b2a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;