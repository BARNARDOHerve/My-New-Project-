window.onload = () => {
    manageblogs();
}

//.......GETTING A USER.........
function datafetched(){
const blogsList = document.querySelector('table')
db.collection("blogs").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
    const blogRow=document.createElement('tBody');
        blogRow.innerHTML+=
    `
    <td>${doc.data().title}</td>
    <td>${doc.data().imageURL}</td>
    <td> ${doc.data().author}</td>
    <td>${doc.data().date}</td>
    <td id="blog"> ${doc.data().body}</td>
    <td ><input type="submit" value="Delete" onclick=deleteblog('${doc.id}') class="delete" ></td>`
    blogsList.appendChild(blogRow);
     });
  });
}

datafetched();
//.......DELETE USER..........
function deleteblog(blogId){
    db.collection("blogs").doc(blogId).delete().then( ()=>{
        console.log("BLOG DELETED SUCCESSFULLY!");
    })
    .catch(e =>{
        console.log("FAILED TO DELETE THIS BLOG!");
    })
};
  datafetched();
  setTimeout(()=>{
   deleteblog(), 6000});