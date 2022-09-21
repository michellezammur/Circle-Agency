
let cardTitle = document.querySelectorAll(".project-title");

    
const url = 'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=1'

async function fetchProjectCardTitle() {
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < cardTitle.length; i++) {
              cardTitle[i].innerText = data[0].title;
        
            }
            console.log(data);
        })
   
        .catch(err => console.log(err));

}
fetchProjectCardTitle();
