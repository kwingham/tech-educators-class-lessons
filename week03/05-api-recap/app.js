async function getSpells() {
  try {
    // URL of the API endpoint for spells
    const apiUrl = "https://wizard-world-api.herokuapp.com/spells";

    console.log("Fetching data from:", apiUrl);

    // Await the fetch request and response parsing
    const response = await fetch(apiUrl);
    console.log("Response received:", response);

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON data
    const data = await response.json();
    console.log("Parsed JSON data:", data);

    // Handle the JSON data
    displaySpells(data);
  } catch (error) {
    // Handle any errors that occur during the fetch
    console.error("There was a problem with the fetch operation:", error);
  }
}

function displaySpells(data) {
  console.log("Displaying data:", data);
  const spellsContainer = document.getElementById("spells");
  data.forEach((spell) => {
    const spellElement = document.createElement("div");
    spellElement.classList.add("spell");
    spellElement.innerHTML = `
      <h3>${spell.name}</h3>
      <p>Type: ${spell.type || "Not Available"}</p>
      <p>Description: ${spell.description || "No Description"}</p>
      <p>Effect: ${spell.effect || "Unknown Effect"}</p>
    `;
    spellsContainer.appendChild(spellElement);
  });
}

// Call the getSpells function to fetch and display the spells
getSpells();
