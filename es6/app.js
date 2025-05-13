// operador ternario
let edad = 18;
let msg;

edad >= 18 ? (msg = "Si") : edad < 16 ? (msg = "Muy menor") : (msg = "No");

console.log(msg);

// spread operator

let cadena = "hoola";

let array = [...cadena];

console.log(array);

let numbers = [1, 2, 3, 4];
let numbers2 = [5, 6, 7, 8];

// inmutabilidad porque no muta el original
let result = [0, ...numbers, 5];

console.log(result, numbers);

const persona = {
  nombre: "Dante",
  apellido: "Orsetti",
};

const personaConEdad = {
  ...persona,
  edad: 20,
};

console.log(personaConEdad, persona);

const conjunto1 = [1, 2, 3, 4];
const conjunto2 = [3, 4, 5, 6, "a", 6, 6, 6, 6, 66];

const resultado = [...new Set([...conjunto1, ...conjunto2])];

console.log(resultado);

// descructuring
const personita = {
  nombre: "Dante",
  apellido: "Orsetti",
  edad: 20,
  direccion: {},
};

// const { nombre: name, apellido: lastName } = personita;

// console.log(name, lastName);

// rest operator y descructuring

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [n1, n2, n3, ...resto] = numeros;

// a la derecha spread y a la izquierda rest

// el rest != spread

// Muta el array original
// const resulta2 = numeros.splice(2, 2);

console.log(n1, n2, n3, resto);
