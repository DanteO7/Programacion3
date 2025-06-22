import { useState } from "react";
import "./ListaTareas.css";

export const ListaTareas = () => {
  const [nombreTarea, setNombreTarea] = useState("");
  const [listaDeTareas, setListaDeTareas] = useState([]);

  const handleActualizarNombre = (e) => {
    setNombreTarea(e.target.value);
  };

  const handleAgregarTarea = () => {
    setListaDeTareas([...listaDeTareas, nombreTarea]);
  };

  const handleEliminarTarea = (laTarea) => {
    const nuevaLista = listaDeTareas.filter((tarea) => tarea != laTarea);
    setListaDeTareas(nuevaLista);
  };

  return (
    <div className="list-container">
      <h1>Lista de Tareas</h1>
      <label htmlFor="tarea">Nombre de la Tarea: </label>
      <input
        type="text"
        name="tarea"
        id="tarea"
        value={nombreTarea}
        onChange={handleActualizarNombre}
      />
      <button onClick={handleAgregarTarea}>Agregar Tarea</button>
      <ul>
        {listaDeTareas.map((tarea, index) => (
          <li key={index}>
            {tarea}
            <button onClick={() => handleEliminarTarea(tarea)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
