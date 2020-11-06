firebase.auth().onAuthStateChange( (user) => {
    if (!user) {
        return window.location.href="./login-in.html"
    }
    let username=document.getElementById("newUserName");
    username.innerHTML=user.displayName;
    let navusername=document.getElementById("navName");
    navusername.innerHTML=user.displayName;
}); 
