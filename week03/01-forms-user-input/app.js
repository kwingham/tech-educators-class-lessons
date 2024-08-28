const form = document.getElementById("form");

function handleSubmit(event) {
  event.preventDefault();
  // console.log("Hello");
  const data = new FormData(form);

  const finalValues = Object.fromEntries(data);

  console.log(finalValues);
}

form.addEventListener("submit", handleSubmit);
