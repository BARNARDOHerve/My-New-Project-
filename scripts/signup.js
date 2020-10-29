function newUser() {
    let Fname = document.getElementById("Fname").value;
    let fname = document.getElementById("fname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let checkpsw = document.getElementById("check").value;
    let errorMessage = document.getElementById("errorMessage");
    let atposition = email.indexOf("@");
    let dotposition = email.lastIndexOf(".");

    // alert(Fname + fname + email + password + checkpsw);
    if (Fname == "") {
        return errorMessage.innerHTML = "Firstname is required";
    } else if (fname == "") {
        return errorMessage.innerHTML = "Lastname is required"
    } else if (email == "") {
        return errorMessage.innerHTML = "email is required"
    } else if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
        return errorMessage.innerHTML = "invalid email"
    } else if (password == "") {
        return errorMessage.innerHTML = "password is required"
    } else if (password.length < 6) {
        return errorMessage.innerHTML = "incomplite password"
    } else if (checkpsw == "") {
        return errorMessage.innerHTML = "Confirm is required"
    } else if (checkpsw != password) {
        return errorMessage.innerHTML = "confirm password doesn't match with the password"
    }


    firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
            // alert("I cont");
            window.location.href = "../pages/login-in.html"

        })
        .catch((error) => {
            alert(error);

        });
}

function signoutUser() {
    firebase.auth().signOut().then((user) => {
        window.location.href = "../pages/login-in.html"

    }).catch((error) => {

    });
}