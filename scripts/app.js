function newUser() {
    let Fname = document.getElementById("Fname").value;
    let fname = document.getElementById("fname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let checkpsw = document.getElementById("check").value;
    // alert(Fname + fname + email + password + checkpsw);
    firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
            window.location.href = "../pages/login-in.html"

        })
        .catch((error) => {
            alert();

        });
}

function loginUser() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // alert(email + password);
    firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
            window.location.href = "../pages/user.html"
        })
        .catch((error) => {
            alert("invalid inputs");


        });
}

function signoutUser() {
    firebase.auth().signOut().then((user) => {
        window.location.href = "../pages/login-in.html"

    }).catch((error) => {

    });
}