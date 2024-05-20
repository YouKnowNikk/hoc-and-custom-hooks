import React from 'react';

function Counter({ count, increment, decrement, reset, message }) {
  return (
    <div>
      <h1>HOC Counter</h1>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <p>{message}</p>
    </div>
  );
}

export default Counter;
