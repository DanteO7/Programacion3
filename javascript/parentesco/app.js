// los elementos son nulos, no indefinidos

// Asincronismo

const mainEl = document.querySelector(".container");

// setTimeout(() => {
//   const pEl = document.createElement("p");
//   pEl.innerText = "Hola";

//   mainEl.append(pEl);

//   console.log(mainEl);
// }, 5000);

// setInterval(() => {
//   const pEl = document.createElement("p");
//   pEl.innerText = "Hola";

//   mainEl.append(pEl);

//   console.log(mainEl);
// }, 5000);

// Objeto Date

// console.log(new Date() - 0);

const pEl = document.createElement("p");
mainEl.append(pEl);

const formatTime = (n) => (n < 10 ? "0" + n : n);

setInterval(() => {
  const { numeroDia, dia, mes, time } = ObtenerDia();
  const { hora, minutos, segundos } = time;
  pEl.innerText = `Hoy es ${dia}, ${numeroDia} de ${mes} y son las ${hora}:${formatTime(
    minutos
  )}:${formatTime(segundos)}`;
}, 1000);

function ObtenerDia() {
  const dias = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const fecha = new Date();

  return {
    numeroDia: fecha.getDate(),
    dia: dias[fecha.getDay()],
    mes: meses[fecha.getMonth()],
    time: {
      hora: fecha.getHours(),
      minutos: fecha.getMinutes(),
      segundos: fecha.getSeconds(),
    },
  };
}

console.log(pEl);
