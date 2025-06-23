import { useState } from "react";
import TimeUnit from "./components/TimeUnit";

const TIMES = Object.freeze({
  MINUTES: "minutes",
  HOURS: "hours",
});

function App() {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
  });

  const handleTimeChange = ({ target }) => {
    const { value, name } = target;
    switch (name) {
      case TIMES.HOURS:
        setTime({
          hours: value,
          minutes: value * 60,
        });
        break;
      case TIMES.MINUTES:
        setTime({
          minutes: value,
          hours: value / 60,
        });
        break;
      default:
        break;
    }
  };
  return (
    <>
      <h1>Time Converter</h1>
      <TimeUnit
        label="Horas"
        name={TIMES.HOURS}
        value={time.hours}
        onChange={handleTimeChange}
      />
      <TimeUnit
        label="Minutos"
        name={TIMES.MINUTES}
        value={time.minutes}
        onChange={handleTimeChange}
      />
    </>
  );
}

export default App;
