// document.querySelector("#w-node").addEventListener("submit", addPost);

const url = "https://jsonplaceholder.typicode.com/comments";

function addPost(preventForm) {
  preventForm.preventDefault();

  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email-form").value;
  let phone = document.querySelector("#name-3").value;
  let message = document.querySelector("#field").value;

  fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json, text/plain",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      phone: phone,
      body: message,
    }),
  })
    .then((response) => response.json())
    .then((dataForm) => console.log(dataForm))
    .then(() => {
      let message = "";
      message += `
      <div class="w-form-done">
      <div>Thank you! Your submission has been received!</div>
		  `;
      document.querySelector(".w-form-done").innerHTML = message;
    })
    .catch(() => {
      let message = "";
      message += `
      <div class="w-form-fail">
      <div>Oops! Something went wrong while submitting the form.</div> 
			`;
      document.querySelector(".w-form-fail").innerHTML = message;
    });

  document.querySelector("#name").value = "";
  document.querySelector("#email-form").value = "";
  document.querySelector("#name-3").value = "";
  document.querySelector("#field").value = "";
}





















