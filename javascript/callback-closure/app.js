//  Nivel 1: Básico
// Objetivo: Comprender qué son los callbacks y closures, e implementarlos en situaciones simples.

// Ejercicio 1: Callback simple
// Crea una función saludarUsuario(nombre, callback) que salude al usuario y luego ejecute un callback que muestre un mensaje adicional.

const saludarUsuario = (nombre, saludoExtra) => {
  console.log(`Hola ${nombre}`);
  saludoExtra();
};

saludarUsuario("Dante", () => console.log("Como estas?"));
console.log("==================================");

// Ejercicio 2: Usando un callback para sumar
// Crea una función operar(a, b, callback) que reciba dos números y un callback. El callback deberá definir la operación a realizar (suma, resta, etc.).

const operar = (a, b, operacion) => {
  operacion(a, b);
};

operar(5, 4, (n1, n2) => console.log(n1 * n2));
console.log("==================================");

// Ejercicio 3: Closure contador
// Crea una función crearContador() que devuelva una función que incremente un contador interno cada vez que se llame.

const crearContador = () => {
  let contador = 0;
  const incrementarContador = () => ++contador;
  return incrementarContador;
};

const contador1 = crearContador();
const contador2 = crearContador();
console.log(contador1());
console.log(contador1());
console.log(contador1());
console.log(contador2());
console.log("==================================");

// Ejercicio 4: Acceso restringido
// Crea una función crearAcceso(claveCorrecta) que devuelva otra función que solo permita el acceso si se le pasa la clave correcta.

const crearAcceso = (claveCorrecta) => {
  const saludar = () => {
    claveCorrecta === "pepito123"
      ? console.log("Bienvenido")
      : console.log("Acceso Denegado");
  };
  return saludar;
};

const acceso = crearAcceso("pepito123");
acceso();
console.log("==================================");

// Ejercicio 5: Mensaje personalizado
// Crea una función crearMensajeSaludo(nombre) que devuelva otra función que al ser llamada devuelva un mensaje como “Hola, [nombre], ¡bienvenido de nuevo!”.

const crearMensajeSaludo = (nombre) => {
  const saludar = () => {
    console.log(`Hola ${nombre}, ¡bienvenido de nuevo!`);
  };
  return saludar;
};

const saludoDante = crearMensajeSaludo("Dante");
saludoDante();
console.log("==================================");

// 🔸 Nivel 2: Intermedio
// Objetivo: Aplicar callbacks y closures en estructuras más complejas como arrays, lógica condicional, y gestión de estado.

// Ejercicio 6: Manejador de errores
// Crea una función ejecutarConManejo(callback, errorCallback) que ejecute callback y, si ocurre una excepción, llame a errorCallback con el error.

const ejecutarConManejo = (callback, errorCallback) => {
  try {
    callback();
  } catch (error) {
    errorCallback(error);
  }
};

ejecutarConManejo(
  () => {
    throw new Error("404 not found");
  },
  (error) => {
    console.error(`Error: ${error.message}`);
  }
);
console.log("==================================");

// Ejercicio 7: Filtro personalizado
// Escribe una función filtrarArray(arr, callback) que devuelva un nuevo arreglo con los elementos para los que callback devuelva true.

const filtrarArray = (array, condicion) => {
  const resultado = [];
  for (const elemento of array) {
    if (condicion(elemento)) {
      resultado.push(elemento);
    }
  }
  return resultado;
};

console.log(
  filtrarArray([1, 2, 3, 4, 5, 6, 7, 8], (numero) => numero % 2 === 0)
);
console.log("==================================");

// Ejercicio 8: Multiplicador con closure
// Crea una función crearMultiplicador(factor) que devuelva otra función que multiplique su argumento por factor.

const crearMultiplicador = (factor) => {
  const multiplicar = (argumento) => factor * argumento;
  return multiplicar;
};

const multiplicador5 = crearMultiplicador(5);
console.log(multiplicador5(3));
console.log("==================================");

// Ejercicio 9: Temporizador con callback
// Crea una función temporizador(ms, callback) que ejecute el callback luego de ms milisegundos.

const temporizador = (ms, cualquierFuncion) => {
  setTimeout(cualquierFuncion, ms);
};

temporizador(3000, () => console.log("a\n=================================="));

// Ejercicio 10: Registro con cierre
// Crea una función crearLogger() que devuelva una función que almacene mensajes internamente. Otra función debe permitir obtener todos los mensajes logueados.

const crearLogger = () => {
  const mensajes = [];
  const almacenarMensaje = (mensaje) => mensajes.push(mensaje);
  const obtenerMensajes = (arrayMensajes) => {
    for (const mensajito of mensajes) {
      console.log(mensajito);
    }
  };
  return { almacenarMensaje, obtenerMensajes };
};

const logger = crearLogger();
logger.almacenarMensaje("Hola esto es un mensajito");
logger.almacenarMensaje("esto es otro mensaje");
logger.obtenerMensajes();
console.log("==================================");

// 🔺 Nivel 3: Avanzado
// Objetivo: Usar closures para ocultar lógica interna y callbacks para extender funcionalidad en patrones más abstractos.

// Ejercicio 11: Event Emitter básico
// Crea una función crearEventEmitter() que permita registrar eventos (on), emitir eventos (emit) y remover escuchadores (off), usando closures.

const crearEventEmitter = () => {
  const on = () => {};
  const emit = () => {};
  const off = () => {};
  return { on, emit, off };
};

const eventEmitter = crearEventEmitter();
eventEmitter.on();
eventEmitter.emit();
eventEmitter.off();

// Ejercicio 12: Memoización con closure
// Implementa una función memoizar(fn) que retorne una versión de fn que cachee los resultados de llamadas previas.

const memoizar = (fn) => {};

// Ejercicio 13: Secuenciador de funciones
// Crea una función ejecutarEnOrden(funciones, callbackFinal) que reciba un array de funciones asíncronas (que usan callback) y las ejecute en orden.

// Ejercicio 14: Sistema de autenticación
// Crea un closure crearAutenticador(usuario, contraseña) que retorne una función que verifique credenciales y otra para cambiar la contraseña.
