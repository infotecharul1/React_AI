import { useState } from "react";

function Counter() {
  //   var count = 0;
  var [count, setCount] = useState(0); // state variable

  function inc() {
    setCount(++count); // increment count by 1
  }
  function reset() {
    setCount((count = 0));
  }
  function dec() {
    setCount(--count); // decrement count by 1
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => inc()}>Increment</button>
      <button onClick={() => reset()}>Reset</button>
      <button onClick={() => dec()}>Decrement</button>
    </div>
  );
}

export default Counter;
