let blogsItems = ``;

async function getBlogs(){
    await db.collection("blogs")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach((doc)=> {
            storage.ref(doc.data().imageURL).getDownloadURL().then(imageURL => {
                blogsItems+= `
                <div class="blog-item-one">
                    <h4>${doc.data().title}</h4>
                    <img src="${imageURL}">
                    <button onclick = "setBlogId('${doc.id}')">Read-more</button>
                </div>
            `
            }).catch(e => {
                console.log("Download error "+e);
            })
          
           
          });
      })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    }); 

}
getBlogs();
setTimeout(()=> {
    let blogContainer = document.getElementById('blogContainer');
    blogContainer.innerHTML = blogsItems;
},5000);

function setBlogId(docId){
   localStorage.setItem('docId',docId);
   return window.location.href = "./read_more.html";
}