const persona = {
  nombre: "Juan",
  apellido: "Perez",
  apodo: "JP",
};

// para comprobar si tiene alguna propiedad
console.log(Object.hasOwn(persona, "nombre"));

// para convertir objeto a array
console.log(Object.entries(persona));

// para que no cambien las propiedades, para resolver los magic numbers y string
const TYPES = Object.freeze({
  admin: "ADMIN",
  user: "USER",
});
