// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCszGESRkrjNRvuGybBEl0cfh_GEQTFEIg",
    authDomain: "mynewproject-2c559.firebaseapp.com",
    databaseURL: "https://mynewproject-2c559.firebaseio.com",
    projectId: "mynewproject-2c559",
    storageBucket: "mynewproject-2c559.appspot.com",
    messagingSenderId: "367413303904",
    appId: "1:367413303904:web:a882e9522cf6673868c105"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
let auth = firebase.auth();
let storage = firebase.storage();




