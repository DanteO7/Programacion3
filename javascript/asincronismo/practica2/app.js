const containerEl = document.getElementById("character-container");
const paginationEl = document.getElementById("pagination-button");
const firstBtn = document.getElementById("first");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const lastBtn = document.getElementById("last");

let currentUrl = "https://dragonball-api.com/api/characters";

// asincrónica porque tarda en devolver algo
async function fetchCharacter(url) {
  containerEl.innerHTML = "<p>Loading ...</p>";
  try {
    // como tengo que esperar al fetch tengo que usar await
    const res = await fetch(url);
    const data = await res.json();

    console.log(data);

    if (data.length === 0) {
      throw new Error("No se ha econtrado el personaje, o los personajes", {
        cause: 1,
      });
    }

    //items puede ser undefined (nullish coalescing)
    displayCharacter(data.items ?? data);

    if (data.links) {
      paginationEl.style.display = "block";
      updatePagination(data.links);
    } else {
      paginationEl.style.display = "none";
    }
  } catch (err) {
    paginationEl.style.display = "none";
    containerEl.innerHTML = `<p>${err}</p>`;
    console.error(err);
  }
}

function displayCharacter(characters) {
  containerEl.innerHTML = "";
  characters.forEach((char) => {
    const card = document.createElement("div");
    card.className = "character-card";
    card.innerHTML = `
    <img src=${char.image} alt=${char.name}>
    <h3>${char.name}</h3>
    <p>${char.race}</p>
    <p>${char.ki}</p>
    `;

    containerEl.appendChild(card);
  });
}

function updatePagination(links) {
  firstBtn.onclick = () => fetchCharacter(links.first);
  prevBtn.onclick = () => fetchCharacter(links.previous);
  nextBtn.onclick = () => fetchCharacter(links.next);
  lastBtn.onclick = () => fetchCharacter(links.last);
}

const searchInput = document.getElementById("search-input");

searchInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    const query = searchInput.value.trim().toLowerCase();

    if (query == "") {
      fetchCharacter(currentUrl);
      return;
    }
    const allCharEl = document.querySelectorAll(".character-card");
    allCharEl.forEach((el) => {
      const name = el.querySelector("h3").innerText.toLowerCase();
      if (name == query) {
        containerEl.innerHTML = "";
        containerEl.appendChild(el);
        return;
      }
    });

    try {
      const urlToSearchByName = `${currentUrl}?name=${query}`;
      fetchCharacter(urlToSearchByName);
    } catch (error) {
      containerEl.innerHTML = `<p>${err}</p>`;
      console.error(err);
    }
  }
});

fetchCharacter(currentUrl);
