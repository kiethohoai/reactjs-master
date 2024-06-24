import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("🚀CHECK  count =", count);

  const handleIncrease = () => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  };

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
};

export default Counter;
