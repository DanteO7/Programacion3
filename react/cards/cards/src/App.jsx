import { ProductList } from "./components/ProductList/ProductList";
import productos from "./data/dataProducts";
import "./App.css";
import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);

  const handleAumentarContador = () => {
    setContador(contador + 1);
  };

  return (
    <>
      <button className="primary-button" onClick={handleAumentarContador}>
        Clic para aumentar
      </button>
      <p>contador: {contador}</p>
      <ProductList productos={productos} />
    </>
  );
}

export default App;
