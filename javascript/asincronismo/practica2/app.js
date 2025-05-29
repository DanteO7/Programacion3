// const containerEl = document.getElementById("character-container");
// const firstBtnEl = document.getElementById("first");
// const prevBtnEl = document.getElementById("prev");
// const nextBtnEl = document.getElementById("next");
// const lastBtnEl = document.getElementById("last");

// let currentUrl = "https://dragonball-api.com/api/characters";

// // asincrónica porque tarda en devolver algo
// async function fetchCharacter(url) {
//   try {
//     // como tengo que esperar al fetch tengo que usar await
//     const res = await fetch(url);
//     const data = await res.json();

//     if (data.length === 0) {
//       throw new Error("No se ha encontrado el personaje");
//     }

//     //items puede ser undefined (nullish coalescing)
//     displayCharacter(data.items ?? data);
//     // if (data.items) {
//     //   displayCharacter(data.items);
//     // } else {
//     //   displayCharacter(data);
//     // }
//     if (data.links) {
//       updatePagination(data.links);
//     }
//   } catch (error) {
//     containerEl.innerHTML = "<p>error al cargar personaje</p>";
//     console.log(error);
//   }
// }

// function displayCharacter(characters) {
//   containerEl.innerHTML = "";
//   characters.forEach((char) => {
//     const card = document.createElement("div");
//     card.className = "character-card";
//     card.innerHTML = `
//     <img src=${char.image} alt=${char.name} />
//     <h3>${char.name}</h3>
//     <p>${char.race}</p>
//     <p>${char.ki}</p>
//     `;

//     containerEl.appendChild(card);
//   });
// }

// function updatePagination(links) {
//   const { first, previous, next, last } = links;
//   firstBtnEl.onclick = () => fetchCharacter(first);
//   prevBtnEl.onclick = () => fetchCharacter(previous);
//   nextBtnEl.onclick = () => fetchCharacter(next);
//   lastBtnEl.onclick = () => fetchCharacter(last);
// }

// const searchInputEl = document.getElementById("search-input");

// searchInputEl.addEventListener("keypress", (event) => {
//   if (event.key === "Enter") {
//     const query = searchInputEl.value.trim().toLowerCase();

//     const allEl = document.querySelector(".character-card");
//     console.log(allEl);
//     // allEl.forEach((el) => {
//     //   const name = el.querySelector("h3").innerText.toLowerCase();
//     //   if (name == query) {
//     //     containerEl.innerHTML = "";
//     //     containerEl.appendChild(el);
//     //     return;
//     //   }
//     // });
//     // const names = [...allH3El].map((h3) => query === h3.innerText.toLowerCase() return h3);

//     try {
//       const urlToSearchByName = `${currentUrl}?name=${query}`;
//       fetchCharacter(urlToSearchByName);
//     } catch (err) {
//       console.log("<p>El personaje no se ha encontrado</p>");
//       console.log(err);
//     }
//   }
// });

// fetchCharacter(currentUrl);
const containerEl = document.getElementById("character-container");
const firstBtn = document.getElementById("first");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const lastBtn = document.getElementById("last");

/* 
name:"Goku"
ki:"60.000.000"
race:"Saiyan"
image:"https://dragonball-api.com/characters/goku_normal.webp"
*/

let currentUrl = "https://dragonball-api.com/api/characters";

async function fetchCharacter(url) {
  containerEl.innerHTML = "<p>Loading ...</p>";
  try {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data);

    if (data.length === 0) {
      throw new Error("No se ha econtrado el personaje, o los personajes", {
        cause: 1,
      });
    }

    displayCharacter(data.items ?? data);

    if (data.links) {
      updatePagination(data.links);
    }
  } catch (err) {
    containerEl.innerHTML = `<p>${err}</p>`;
    console.error(err);
  }
}

function displayCharacter(characters) {
  console.log(characters);
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
  console.log(event);

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
