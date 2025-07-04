import React from "react";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => {
        setCounter(counter + 1); // Increments the counter by 1
        console.log(`Counter: ${counter + 1}`); // Logs the incremented counter value
      }}>Increment</button>
    </div>
  )
}

export default Counter;