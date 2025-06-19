import { useState } from "react";
import "./Toggle.css";

export const Toggle = () => {
  const [estado, setEstado] = useState(true);

  const handleCambiarEstado = () => {
    setEstado(!estado);
  };

  return (
    <div className="container">
      <h1>Toggle Mostrar/Ocultar</h1>
      <button onClick={handleCambiarEstado}>
        {estado ? "Ocultar" : "Mostrar"}
      </button>
      {estado && (
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis aut
          doloribus fuga eos nostrum nisi perferendis totam? Ipsum, deleniti
          accusamus nesciunt adipisci ex tempore quibusdam reprehenderit cum
          nisi pariatur doloribus?
        </p>
      )}
    </div>
  );
};
