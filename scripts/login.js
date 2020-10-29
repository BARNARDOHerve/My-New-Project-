function userLogin() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("errorMessage");
    let atposition = email.indexOf("@");
    let dotposition = email.lastIndexOf(".");

    if (email == "") {
        return errorMessage.innerHTML = "email is required"
    } else if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
        return errorMessage.innerHTML = "invalid email"
    } else if (password == "") {
        return errorMessage.innerHTML = "password is required"
    } else if (password.length < 6) {
        return errorMessage.innerHTML = "incomplite password"
    }

    firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
            window.location.href = "../pages/user.html"
        })
        .catch((error) => {
            alert("invalid inputs")
        });
}

function loginUser() {
    firebase.auth().signOut().then((user) => {
        window.location.href = "../pages/user.html"

    }).catch((error) => {

    });

}