import { InputControlado } from "./components/InputControlado/InputControlado";
import { ListaTareas } from "./components/ListaTareas/ListaTareas";
import { Padre } from "./components/PasajeProps/Padre";
import { Toggle } from "./components/Toggle/Toggle";
import { Contador } from "./components/contador/contador";

function App() {
  return (
    <>
      <Contador />
      <InputControlado />
      <Toggle />
      <Padre />
      <ListaTareas />
    </>
  );
}

export default App;
