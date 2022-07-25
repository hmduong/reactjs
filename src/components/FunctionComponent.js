import { useState } from 'react';

function FunctionComponent({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  function increment() {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  }
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((count) => count - 1)}>-</button>
      <button onClick={() => increment()}>+</button>
    </>
  );
}

export default FunctionComponent;
