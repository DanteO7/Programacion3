import { useState } from "react";
import { Hijo } from "./Hijo";

// componente presentacional, es como presentar la lógica
export const Padre = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Pasaje</h1>
      <Hijo count={count} />
      <button onClick={() => setCount(count + 1)}>Aumentar</button>
    </>
  );
};
