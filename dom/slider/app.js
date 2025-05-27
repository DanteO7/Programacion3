import data from "./data.js";

const containerEl = document.querySelector(".slide-container");
const nextBtnEl = document.querySelector(".next-btn");
const prevBtnEl = document.querySelector(".prev-btn");

if (data.length == 1) {
  nextBtnEl.style.display = "none";
  prevBtnEl.style.display = "none";
}

let people = [...data];

if (data.length === 2) {
  people = [...data, ...data];
}

nextBtnEl.addEventListener("click", startSlider);
prevBtnEl.addEventListener("click", () => startSlider("prev"));

containerEl.innerHTML = people
  .map((person, slideIndex) => {
    let position = "next";
    if (slideIndex === 0) {
      position = "active";
    }
    if (slideIndex === people.length - 1) {
      position = "last";
    }
    if (data.length <= 1) {
      position = "active";
    }

    return genArticle({ position, ...person });
  })
  .join("\n");

function genArticle({ position, img, name, job, text }) {
  return `
  <article class="slide ${position}">
    <img src=${img} alt="${name}" class="img ">
    <h4>${name}</h4>
    <p class="titulo">${job}</p>
    <p class="text">${text}</p>
    <div class="quote-icon">
      <i class="fas fa-quote-right"></i>
    </div>
  </article>
    `;
}

function startSlider(type) {
  const lastEl = document.querySelector(".last");
  const activeEl = document.querySelector(".active");
  let nextEl = activeEl.nextElementSibling;
  if (!nextEl) {
    nextEl = containerEl.firstElementChild;
  }

  if (type === "prev") {
    activeEl.classList.add("next");
    lastEl.classList.add("active");
    nextEl.previousElementSibling;

    if (!nextEl) {
      nextEl = containerEl.lastElementChild;
    }

    nextEl.classList.remove("next");
    nextEl.classList.add("last");

    return;
  }
  activeEl.classList.remove("active");
  lastEl.classList.remove("last");
  nextEl.classList.remove("next");

  activeEl.classList.add("last");
  nextEl.classList.add("active");
  lastEl.classList.add("next");
}
