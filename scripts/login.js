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
    else {
        auth.signInWithEmailAndPassword(email, password)
        .then(resultData=>{
            const uid = resultData.user.uid; 

            db.collection("Users").doc(uid).get().then( function(snapshot){

                let childData = snapshot.data();
                console.log(childData);

                let firstname = childData.Fname;
                let lastname = childData.lname;
                let role = childData.role;
                
                
                //get blogid
                const queryString = window.location.search;
                const urlParams = new URLSearchParams(queryString);
                // const blogId = urlParams.get("blogPostiud");
                const blogId = sessionStorage.getItem("bloguid");
                sessionStorage.setItem("userUID", uid);  
                sessionStorage.setItem("userFname", firstname);  
                sessionStorage.setItem("userLname", lastname);  
                sessionStorage.setItem("userNames", lastname+' '+ firstname);  
                if(blogId){
                    window.location.href = `../pages/read_more.html?blogPostuid=${blogId}`;
                } 
                else{
                    if(role === 'StandardUser'){
                        window.location.href = "../pages/user.html";
                    }
                    else if(role === 'Admin'){
                        window.location.href="../pages/admin.html";
                    }
                }
            });
        })
        .catch(error=>{
            message.style.display="block";
            message.innerHTML=error.message;
        });
    }
};
// localStorage.setItem('userId', id);

function signoutUser() {
    firebase.auth().signOut().then((user) => {
        window.location.href = "../pages/login-in.html";
        
    }).catch((error) => {
        alert('failed to logout')
    });
}

function signoutUserFromComment() {
    firebase.auth().signOut().then((user) => {
        if(user){
            sessionStorage.removeItem("bloguid");
            sessionStorage.removeItem("userUID");
        }
        window.location.href = "../pages/blog.html";
        
    }).catch((error) => {
        alert('failed to logout')
    });
}

// if(role === 'StandardUser'){
//     sessionStorage.setItem("userUID", uid);
//     sessionStorage.setItem("username", firstname);
//     sessionStorage.setItem("userLname", lastname);      
//     window.location.href = "../pages/user.html";
// }
// else if(role === 'Admin'){
//     sessionStorage.setItem("userUID", uid);
//     console.log(uid);
//     sessionStorage.setItem("userFname", firstname);  
//     sessionStorage.setItem("userLname", lastname); 
//     sessionStorage.setItem("userEmail", email); 
//     window.location.href="../pages/admin.html";
// }