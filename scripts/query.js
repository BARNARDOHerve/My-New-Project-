let name = document.getElementById("nameWrapper");
let email = document.getElementById("emailWrapper");
let comment = document.getElementById("commentWrapper");
let errorMessage = document.getElementById("errorMessage");

// queries validations

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
// creating a query 

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