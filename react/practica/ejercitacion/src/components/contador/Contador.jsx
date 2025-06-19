import { useState } from "react";
import "./contador.css";

export const Contador = () => {
  const [contador, setContador] = useState(0);

  const handleAumentarContador = () => setContador(contador + 1);
  const handleRestarContador = () => setContador(contador - 1);
  const handleResetearContador = () => setContador(0);

  return (
    <>
      <h1>Contador: {contador}</h1>
      <section className="button-container">
        <button onClick={handleAumentarContador}>Aumentar</button>
        <button onClick={handleRestarContador}>Restar</button>
        <button onClick={handleResetearContador}>Resetear</button>
      </section>
    </>
  );
};
