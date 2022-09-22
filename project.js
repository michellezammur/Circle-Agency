
let articleTitle = document.querySelector('.project-page-title');

let articleText = document.querySelector('.project-detail');


const url = 'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=3'

async function fetchProjectTitle() {
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            articleTitle.innerText = data[0].title.slice(0 , 20);
            articleText.innerText = data[2].body;
       
            console.log(data);
        })
        .catch(err => console.log(err));

}
fetchProjectTitle();











          
