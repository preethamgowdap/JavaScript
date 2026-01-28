import { useState } from "react";

export default function App() {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 2);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
  

      <h2>Count: {count}</h2>

      <button onClick={handleIncrement} style={{ marginRight: "10px" }}>
        Increment 
      </button>

      <button onClick={handleDecrement}>
        Decrement 
      </button>
    </div>
  );
}
