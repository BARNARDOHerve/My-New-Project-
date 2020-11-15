window.onload = () => {
    manageQueries();
}

//.......GETTING ALL QUERIES.........
function datafetched(){
const queriesList = document.querySelector('table')
db.collection("user-comment").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
    const queryRow=document.createElement('tBody');
    queryRow.innerHTML+=
    `
    <td> ${doc.data().Name}</td>
    <td>${doc.data().Email}</td>
    <td> ${doc.data().Comment}</td>
        <td ><input type="submit" value="Delete" onclick=deletequery('${doc.id}') class="delete" class="delete"></td>`
        queriesList.appendChild(queryRow);
     });
  });
}

datafetched();
//.......DELETE QUERY..........
function deletequery(queryId){
    db.collection("user-comment").doc(queryId).delete().then( ()=>{
        alert("USER DELETED SUCCESSFULLY!");
    })
    .catch(e =>{
        alert("FAILED TO DELETE THIS USER!");
    })
};
datafetched();
setTimeout(()=>{
deletequery(), 6000});