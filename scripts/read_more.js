async function readMore(){
    let title =document.getElementById('titleWrapper');
    let imageWrapper = document.getElementById('imageWrapper');
    let authorWrapper = document.getElementById('authorWrapper');
    let dateWrapper = document.getElementById('dateWrapper');
    let contentWrapper = document.getElementById('contentWrapper');

    let docId = localStorage.getItem('docId');
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