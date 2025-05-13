// console.log("Document: ", document);
// console.log("Window: ", window);

// const $lista = document.querySelector(".navigation");

// const enlaces = ["Inicio", "Contacto", "Productos"];

// for (const enlace of enlaces) {
//   const $li = document.createElement("li");
//   $li.innerText = enlace;
//   $li.className = "item";

//   $lista.appendChild($li);
// }

const $main = document.querySelector("main");

const $h1 = document.createElement("h1");
$h1.innerText = "Importante";
$h1.className = "important";
$main.appendChild($h1);

const $section = document.createElement("section");
$main.appendChild($section);

const $p = document.createElement("p");
$p.innerText = "Noticia muy importante";
$section.appendChild($p);
