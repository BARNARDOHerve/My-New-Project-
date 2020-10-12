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

function signoutUser() {
    firebase.auth().signOut().then((user) => {
        window.location.href = "../pages/login-in.html"

    }).catch((error) => {

    });
}
let name = document.getElementById("nameWrapper");
let email = document.getElementById("emailWrapper");
let comment = document.getElementById("commentWrapper");
let errorMessage = document.getElementById("errorMessage");


function myCommentForm(name, email, comment, form) {
    let atposition = email.indexOf("@");
    let dotposition = email.lastIndexOf(".");


    if (name == "") {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "name is required";
        return false;
    } else if (email == "") {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "email is required"
        return false;
    } else if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "invalid email"
        return false;
    } else if (comment == "") {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "comment is required"
        return false;
    } else {
        submitData(name, email, comment, form);
    }
}

async function submitData(name, email, comment, form) {
    await db.collection("user-comment").add({
        Name: name,
        Email: email,
        Comment: comment
    }).then(() => {
        alert("your commet have been sent");
        form.reset();
    }).catch((error) => {
        console.log(error);
    });
}
let form = document.getElementById("formWrap");
form.onsubmit = (event) => {
    event.preventDefault();
    myCommentForm(name.value, email.value, comment.value, form);
}
let button = document.getElementById("buttonWrap");
button.onclick = (event) => {
    event.preventDefault();
    myCommentForm(name.value, email.value, comment.value);
}
let blogImage;

function getBlogImage(event) {
    if (event.targets.files[0]);
    blogImage = event.targets.files[0];
}

function createBog() {
    let user = auth.currentUser();
    if ()
        let newTitle = document.getElementById("title").value;
    let newBody = document.getElementById("paragraph").value;
    // let newimage = document.getElementById("image").value;


}