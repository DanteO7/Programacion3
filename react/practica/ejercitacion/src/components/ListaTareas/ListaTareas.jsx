import { useState } from "react";

export const ListaTareas = () => {
  let nombreTarea = "";
  const listaDeTareas = [];
  const handleMostrarTarea = (e) => {
    nombreTarea = e.target.value;
  };
  const handleAgregarTarea = () => {
    listaDeTareas.push(nombreTarea);
    console.log(listaDeTareas);
  };

  return (
    <>
      <h1>Lista de Tareas</h1>
      <label htmlFor="tarea">Nombre de la Tarea: </label>
      <input
        type="text"
        name="tarea"
        id="tarea"
        onChange={handleMostrarTarea}
      />
      <button onClick={handleAgregarTarea}>Agregar Tarea</button>
      <ul>
        {listaDeTareas.map((tarea) => {
          return <li>{tarea}</li>;
        })}
      </ul>
    </>
  );
};
