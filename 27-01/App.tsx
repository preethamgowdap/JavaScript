import { useState } from "react";

export default function App() {
  const [count, setCount] = useState<number>(0);

  const incrementByTwo = () => {
    setCount((prev) => prev + 2);
  };

  const decrementByOne = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
  

      <h2>Count: {count}</h2>

      <button onClick={incrementByTwo} style={{ marginRight: "10px" }}>
        Increment 
      </button>

      <button onClick={decrementByOne}>
        Decrement 
      </button>
    </div>
  );
}
