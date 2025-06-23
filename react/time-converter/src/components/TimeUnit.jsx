import { useId, useState } from "react";

export default function TimeUnit({ label, name, value, onChange }) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{label}: </label>
      <input
        type="number"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
