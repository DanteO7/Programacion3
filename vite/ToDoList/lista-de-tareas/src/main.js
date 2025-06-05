const KEY = "tasks";

//1. obtener los elementos necesarios del document
const formEl = document.getElementById("task-form");
const inputEl = document.getElementById("task-input");
const btnEl = document.getElementById("submit");
const listEl = document.getElementById("task-list");

let tasksLS = JSON.parse(localStorage.getItem(KEY)) ?? [];
// evalua solo si es undefined o null, el || toma booleanos y 0

if (tasksLS.length > 0) {
  tasksLS.forEach(createLIElement);
}

//2. agregar evento al formulario para saber cuando se envian los datos
formEl.addEventListener("submit", (event) => {
  event.preventDefault(); //previene el comportamiento por defecto de los eventos
  const taskText = inputEl.value.trim();
  if (taskText === "") return;

  createLIElement({ text: taskText, completed: false });

  //8. limpiar el input
  inputEl.value = "";
  updateLocalStorage();
});

function updateLocalStorage() {
  let tareas = [];
  const listaTarea = [...listEl.children];
  listaTarea.forEach((li) => {
    const text = li.firstChild.textContent;
    const completed = li.classList.contains("completed");
    tareas.push({ text, completed });
  });

  localStorage.setItem(KEY, JSON.stringify(tareas));
}

function createLIElement({ text, completed }) {
  //3. crear li para agregar a la ul
  const li = document.createElement("li");
  li.innerHTML = `<span>${text}</span>`;

  if (completed) {
    li.classList.add("completed");
  } else {
    li.classList.remove("completed");
  }

  li.oncontextmenu = (event) => {
    event.preventDefault();
    li.classList.toggle("completed");
    updateLocalStorage();
  };

  //4. crear el boton eliminar
  const deleteBtn = document.createElement("button");
  deleteBtn.type = "submit";
  deleteBtn.textContent = "Eliminar";

  //5. darle funcionalidad al boton para eliminar el li
  deleteBtn.addEventListener("click", () => {
    listEl.removeChild(li);
    updateLocalStorage();
  });

  //6. agregar el boton eliminar al li
  li.appendChild(deleteBtn);

  //7. agregamos el li a la lista
  listEl.appendChild(li);
}
