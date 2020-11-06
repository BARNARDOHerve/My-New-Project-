// let Blogs = [];

// function fetchBlog() {
//     db.collection('blogs').get().then( (snapshoot) => {
//         snapshoot.forEach((blogFields) => {
//             storage.ref(blogFields.data().imageURL).getDownloadURL().then( (blogimg) => {
//                 Blogs.push({
//                     post_id: blogFields.id,
//                     title: blogFields.data().title,
//                     body: blogFields.data().body,
//                     date: blogFields.data().date,
//                     author: blogFields.data().author,
//                     imageURL: blogimg,
//                 })
//             }).catch((error1) => {
//                 console.log(error1)
//             });
//         });
//     }).catch((error2) => {
//         console.log(error2)
//     });
// };

// function myFunction() {
//     let dots = document.getElementById("dots");
//     let moreText = document.getElementById("more");
//     let btnText = document.getElementById("myBtn");
  
//     if (dots.style.display === "none") {
//          dots.style.display = "inline";
//       btnText.innerHTML = "Read more"; 
//       moreText.style.display = "none";
//     } else {
//       dots.style.display = "none";
//       btnText.innerHTML = "Read less"; 
//       moreText.style.display = "inline";
//     }
// }
// function fetchData() {
//   let Html = " ";
//   Blogs.forEach((B) => {
//     const blogId = B.post_id;
//     Html += ` <div class="blog-item-one">
//                 <h4>${B.title}</h4>
//                 <img src='${B.imageURL}' alt="agile team">
//                 <p><span id='dots'>...</span><span id='more'>'${B.body}<br>' '${B.date}<br>' The author is :'${B.author}'</span></p>
//                 <p><br></p>
//                 <button onclick='myFunction()' id='myBtn'>Read more</button>
//             </div>`
//   });
//   document.getElementById('blogPost').innerHTML = Html;
// }
 
// fetchBlog();
// setTimeout(()=>{ fetchData()},8000)

