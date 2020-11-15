// Disabling the sending  button
const commentbtn=document.querySelector('#loginComment');
const sendbtn=document.querySelector('#send');
// commentbtn.style.display="block";

async function readMore(){
    let title =document.getElementById('titleWrapper');
    let imageWrapper = document.getElementById('imageWrapper');
    let authorWrapper = document.getElementById('authorWrapper');
    let dateWrapper = document.getElementById('dateWrapper');
    let contentWrapper = document.getElementById('contentWrapper');
    let docId = localStorage.getItem('docId');
    console.log(docId);
    db.collection('blogs').doc(docId).get().then(blog => {
        storage.ref(blog.data().imageURL).getDownloadURL().then(imageURL => {
            title.innerHTML = blog.data().title;
            imageWrapper.src = imageURL;
            authorWrapper.innerHTML = blog.data().author;
            dateWrapper.innerHTML = blog.data().date;
            contentWrapper.innerHTML = blog.data().body;
        }).catch(e => {
            console.log("Image download error: "+e)
        })
    })
}
readMore();


// comments

const comment = document.querySelector(".commentTXT");
const commentsInput = (comment, form)=>{
    if(comment.length==0){
        alert("PLEASE, FILL THE FORM")
    }
    else{
        submitComment(comment, form); 
    }
}
const commentForm = document.querySelector(".form-container");

async function submitComment(comment, form) {
   
    const uid = sessionStorage.getItem("bloguid");
    // submitBtn.innerHTML = 'Loading ....';
    const docRef = db.collection("blogs");
    await docRef.doc(uid).collection("comments").doc().set({
        Date: new Date().getTime(),
        comment: comment,
        postId: uid,
        userName: sessionStorage.getItem("userNames")
    })
    .then((result) => {
    form.reset();
       console.log(result);
    })
    .catch((err) => {
        console.log(err)
    })
}
commentForm.onsubmit = (e) => {
    e.preventDefault();
    commentsInput(comment.value, commentForm)
}
//login to comment
const loginButton = document.getElementById('loginComment')
loginButton.addEventListener('click', () => {
    sessionStorage.setItem("bloguid", uid)
    console.log(uid)
    // window.location.href = `../pages/login-in.html?blogId=${uid}`
})




// var uid = getUrlParameter("blogPostuid");
//retrive comments
const uid =localStorage.getItem("docId")
db.collection('blogs').doc(uid).collection("comments").get().then(snapshot => {
    snapshot.docs.forEach(doc => {
       showComments(doc)
    })
})

//display comment 
const commentContainer = document.querySelector('.commentsOutput');
function showComments(doc){
   const result=doc.data();
   const time = new Date(result.Date).toLocaleString();
   const div = document.createElement('div');
   div.innerHTML = `
   <div class="commentContainer">	
            <div class="cDetails">
                <div class="cDateClient">
                    <p>${time}</p>
                    <span>${result.userName}</span>
                </div>
                <p class="cBody">${result.comment}</p> 
            </div>
        <br>
    </div>
   `
    commentContainer.appendChild(div);    
}

