
let articleTitle = document.querySelector('.project-page-title');


const url = 'https://jsonplaceholder.typicode.com/posts'

async function fetchProject() {
   await fetch(url)
       .then(response => response.json())
       .then(data => {
           for (i = 0; i < 3; i++) {
               console.log(data[i]);
               articleTitle.innerText = data[i].title;
           }
           console.log(data[i].title);
       })
       .catch(err => console.log(err));
}

fetchProject();



          
