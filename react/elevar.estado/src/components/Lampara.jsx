import { useState } from "react";

export const Lampara = ({ isOn, onClick }) => {
  return (
    <div
      style={{
        border: `1px solid ${isOn ? "green" : "red"}`,
        width: "150px",
        textAlign: "center",
        padding: "10px",
      }}
    >
      <p>Lampara: {isOn ? "Prendida" : "Apagada"}</p>
      <button onClick={onClick}>{isOn ? "Apagar" : "Prender"}</button>
    </div>
  );
};
