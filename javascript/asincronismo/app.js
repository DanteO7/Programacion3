// Event loop
// callback hell
// promesas: pueden estar pendiente, resuelta o rechazada

// Asincronismo

// fetch("https://dragonball-api.com/api/characters", {
//   method: "GET",
//   headers: {
//     "Content-Type": "Application/json",
//   },
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data.items[0].name));

// optional chaining (propiedad?)

// function obetenerDatos() {
//   fetch("https://meowfacts.herokuapp.com/")
//     .then((res) => {
//       if (res.ok) {
//         console.log("todo bien", res);
//         return res.json();
//       } else {
//         console.log("todo mal");
//         return;
//       }
//     })
//     .then((data) => console.log(data));
// }

// async/await
// se termina el async await y luego sigue el codigo
// console.time("Tiempo de carga");
// async function obtenerDatos() {
//   const res = await fetch("https://meowfacts.herokuapp.com/");
//   if (res.ok) {
//     const data = await res.json();
//     console.log(data);
//   } else {
//     console.log("todo mal");
//   }
// }

// let res1 = await fetch("https://meowfacts.herokuapp.com/");
// let data1 = await res1.json();
// console.log(data1);

// let res2 = await fetch("https://meowfacts.herokuapp.com/");
// let data2 = await res2.json();
// console.log(data2);

// let res3 = await fetch("https://meowfacts.herokuapp.com/");
// let data3 = await res3.json();
// console.log(data3);

async function getMany() {
  console.time("Tiempo de carga");
  fetch("https://meowfacts.herokuapp.com/")
    .then((r) => r.json())
    .then((d) => console.log(d));
  fetch("https://meowfacts.herokuapp.com/")
    .then((r) => r.json())
    .then((d) => console.log(d));
  fetch("https://meowfacts.herokuapp.com/")
    .then((r) => r.json())
    .then((d) => console.log(d));
  console.timeEnd("Tiempo de carga");
}
getMany();

fetch("https://meowfacts.herokuapp.com/")
  .then((r) => r.json())
  .then((d) => console.log(d));

//crear un index html y app.js con una p y un boton para generar un texto de la api
