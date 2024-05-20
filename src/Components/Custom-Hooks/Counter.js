import React from 'react';
import useCounter from './useCounter'; // Importing the custom hook

function Counter({ initialValue }) {
    //destructured return values from useCounter
  const { count, increment, decrement, reset } = useCounter(initialValue);

  return (
    <div>

    <h1>useHook</h1>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
