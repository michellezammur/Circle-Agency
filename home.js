
let cardTitle = document.querySelectorAll(".project-title");
let cardBody = document.querySelectorAll(".project-description");

    
const url = 'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=3'


async function fetchProjectCardTitle() {
    await fetch(url)
        .then(response => response.json())
      .then(data => {
        let responseData = "";
            for (let i = 0; i < data.length; i++) {
             
              responseData += `
              <div role="listitem" class="card-item">
            <div class="project-card">
              <div class="project-image">
                <img src="./projects-section/1.jpg" alt="img simplify" />
              </div>

              <div class="project-content">
                <div class="project-text">
                  <div class="project-title">${data[i].title.slice(0 , 20)}</div>
                  <div class="project-title project-description">
                    ${data[i].body.slice(0 , 20)}
                  </div>
                  <a
                    href="./project.html"
                    target="_blank"
                    class="links-projects"
                    >Learn More</a
                  >
                </div>

              </div>
            </div>
            </div>
              
              `
              console.log(data[i].title);
              console.log(data[i].title.slice(0,20));
            }
        console.log(responseData);
        document.querySelector('.cards-of-projects').innerHTML=responseData;
        })
   
        .catch(err => console.log(err));

}
fetchProjectCardTitle();



