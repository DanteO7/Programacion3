// componente condicional
export const Hijo = ({ count }) => {
  if (count > 10 && count < 20)
    return (
      <p
        style={{
          color: "orange",
        }}
      >
        Count: {count}
        <span> Te estas por pasar...</span>
      </p>
    );
  if (count >= 20)
    return (
      <p
        style={{
          color: "red",
        }}
      >
        Count: {count}
        <span> Te pasaste!</span>
      </p>
    );

  return <p>Count: {count}</p>;
};
