const h1El = document.querySelector("h1");
const buttonEl = document.getElementById("boton");
const bodyEl = document.querySelector("body");
const nombreUsuario = "pepe";

h1El.addEventListener("click", () => {
  h1El.innerText = `Hola ${nombreUsuario}`;
});

buttonEl.addEventListener("click", () => {
  bodyEl.classList.toggle("dark-mode");

  if (bodyEl.className == "dark-mode") {
    buttonEl.innerText = "Light Mode";
  } else {
    buttonEl.innerText = "Dark Mode";
  }
});

const textareaEl = document.getElementById("comentario");
const pEl = document.querySelector("p");
const limite = 50;

textareaEl.addEventListener("input", () => {
  const largoFrase = textareaEl.value.length;
  console.log(largoFrase);
  console.log(limite);

  if (largoFrase < limite) {
    pEl.innerText = `Te quedan ${limite - largoFrase} caracteres`;
    pEl.className = "";
  } else if (largoFrase == limite) {
    pEl.innerText = `Caracteres alcanzados`;
    pEl.className = "verde";
    console.log("a");
  } else {
    pEl.innerText = `Te pasaste ${largoFrase - limite} caracteres`;
    pEl.className = "rojo";
  }
});

const buscadorEl = document.getElementById("buscador");
const itemsEl = document.querySelectorAll(".nombre li");
const listaEl = document.querySelector(".nombre");
const items = [...itemsEl].map((item) => item.textContent);

buscadorEl.addEventListener("input", () => {
  const palabraBuscada = buscadorEl.value.toLowerCase();
  const filtrados = items.filter((item) =>
    item.toLowerCase().includes(palabraBuscada)
  );
  listaEl.innerHTML = "";
  filtrados.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item;

    listaEl.appendChild(li);
  });
});

const productos = [
  {
    id: 1,
    titulo: "Mouse",
    descripcion: "Mouse que se desliza",
    precio: 1500,
    descuento: 10,
  },
  {
    id: 2,
    titulo: "Teclado",
    descripcion: "Teclado que tiene letras",
    precio: 2500,
    descuento: 15,
  },
  {
    id: 3,
    titulo: "Monitor",
    descripcion: "Monitor que muestra pixeles",
    precio: 4000,
    descuento: 20,
  },
];

const aplicarDescuento = (precio, descuento) =>
  precio - (precio * descuento) / 100;

// cuando retorno un objeto en una funcion flecha tengo que poner parentesis

const generarCards = (productos) =>
  productos.map((producto) => {
    const precioFinal = aplicarDescuento(producto.precio, producto.descuento);

    const card = document.createElement("div");

    card.innerHTML = `
      <h3>${producto.titulo}</h3>
      <p>${producto.descripcion}</p>
      <span>${producto.precio}</span>
      <span>${producto.descuento}</span>
      <span>${precioFinal}</span>
  `;
    return card;
  });

const containerEl = document.getElementById("product-container");

const cards = generarCards(productos);

containerEl.append(...cards);

// cards.forEach((card) => {
//   containerEl.appendChild(card);
// });
