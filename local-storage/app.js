/*LOCAL STORAGE: guarda la info como un diccionario (key/value) */
/*  
                       Metodos              |    Descripcion
    localStorage                    
                    .setItems(k,v)          |  guardar un valor
                    .getItem(k)             |  traer un valor  
                    .remove(k)              |  borrar un valor
                    .clear()                |  borra TODO

*/
const $app = document.querySelector("#app");

const $h1 = document.createElement("h1");

let nombre = "Juan";
let edad = 20;
let profesion = "Ingeniero";
let DNI = "12345678A";
let persona = {
  nombre: nombre,
  edad: edad,
  profesion: profesion,
  DNI: DNI,
};

for (const atributo in persona) {
  localStorage.setItem(atributo, persona[atributo]);
}

localStorage;
