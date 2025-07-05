import { useState } from "react";

const Counter = ({name}) => {
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Count {name}: {count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default Counter;