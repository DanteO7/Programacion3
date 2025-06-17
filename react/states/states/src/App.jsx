import { useState } from "react";

function App() {
  const STATES = Object.freeze({
    LIQUIDO: "Liquido",
    SOLIDO: "Solido",
    GASEOSO: "Gaseoso",
    PLASMA: "Plasma",
  });

  const [water, setWater] = useState(STATES.LIQUIDO);

  return (
    <>
      <h1>Agua</h1>
      <p>El estado es: {water}</p>
      <section className="buttons-container">
        {Object.values(STATES).map((s) => {
          return (
            <button key={s} onClick={() => setWater(s)}>
              Cambiar a {s}
            </button>
          );
        })}
      </section>
    </>
  );
}

export default App;
