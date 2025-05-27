const dataEl = document.querySelector(".data");
const botonEl = document.querySelector(".btn");

botonEl.addEventListener("click", async () => {
  dataEl.innerText = await getDato();
});

async function getDato() {
  const res = await fetch("https://meowfacts.herokuapp.com/");
  const { data } = await res.json();
  return data[0];
}
