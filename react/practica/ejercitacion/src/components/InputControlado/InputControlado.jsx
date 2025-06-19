import { useState } from "react";
import "./InputControlado.css";

export const InputControlado = () => {
  const [nombre, setNombre] = useState("");

  const handleSetNombre = (e) => {
    setNombre(e.target.value);
  };

  return (
    <>
      <h1>Input Controlado</h1>
      <section>
        <label htmlFor="nombre">Nombre: </label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          value={nombre}
          onChange={handleSetNombre}
        />
        <p>
          <b>Tu nombre es: </b>
          {nombre}
        </p>
      </section>
    </>
  );
};
