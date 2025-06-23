import { useState } from "react";
import { Lampara } from "./components/Lampara";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(8);

  return (
    <>
      <h1>Lamparas</h1>
      {new Array(10).fill(null).map((_, i) => (
        <Lampara
          key={i}
          isOn={i === selectedIndex}
          onClick={() => {
            setSelectedIndex(i);
          }}
        />
      ))}
    </>
  );
}

export default App;
