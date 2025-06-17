import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <h1>Inputs Controlados</h1>
      <div>
        <label htmlFor="nombre">Nombre: </label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <p>Este es tu nombre: {name}</p>
      <p>{name.length >= 30 ? "Te pasaste" : ""}</p>
    </>
  );
}

export default App;
