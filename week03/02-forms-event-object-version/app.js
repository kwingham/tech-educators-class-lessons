const form = document.getElementById("form");

function handleSubmit(event) {
  event.preventDefault();
  document.body.style.backgroundColor = event.target.color.value;

  let pTag = document.createElement("p");
  pTag.innerText = event.target.color.value;
  pTag.setAttribute("class", "hello");
  document.body.appendChild(pTag);
  console.log(event);
}

form.addEventListener("submit", handleSubmit);
