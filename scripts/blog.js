let today = new Date(); 
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
let time = today.getHours() + ":" + today.getMinutes();

let blogImage;

function getBlogImage(event) {
    if(event.target.files[0] != null){
        blogImage = event.target.files[0];
    }
  }

firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
      window.location.href="../index.html"
    }
  });
function createBlog() {
        //  alert(username)
        let newTitle = document.getElementById("title").value;
        let newBody = document.getElementById("paragraph").value;
        let blogid  = blogId();
        let blogForm = document.getElementById('blogForm');
        let user = firebase.auth().currentUser;
        storage.ref(`blogs/${blogid}/blogImage.jpg`).put(blogImage).then(()=>{
           db.collection('blogs').doc(blogid).set({
                title: newTitle,
                body: newBody,
                date: date+"  "+time,
                author:user.displayName,
                imageURL:`blogs/${blogid}/blogImage.jpg`
    
            }).then(()=>{
               blogForm.reset();
               alert("Blog created successfully");
            }).catch((error) => {
                alert("Error2")
                console.log(error)
            })
        }).catch((error) => {
            console.log(error)
            alert(JSON.stringify(error));
        })
        alert(blogImage)
  
}

function blogId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }