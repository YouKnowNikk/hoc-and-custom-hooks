Creating and Using Higher-Order Components (HOCs) and Custom Hooks in React
In React, Higher-Order Components (HOCs) and custom hooks are both powerful tools for code reuse and abstraction. They allow you to encapsulate and share logic across multiple components. In this guide, we'll walk you through how to create and use both HOCs and custom hooks in your React application.

Creating a Higher-Order Component (HOC)
A Higher-Order Component (HOC) is a function that takes a component as input and returns a new component with additional functionality. Here's how you can create a HOC:

Create a JavaScript file for the HOC:

For example, withCounter.js.
Define the HOC function:

Import React and any necessary hooks.
Write a function that takes a component as input and returns a new component with additional functionality.
Inside the function, you can manage state, provide props, or handle lifecycle methods.
Use the HOC in your components:

Import the HOC function into your component files.
Wrap your component with the HOC function to enhance its functionality.
Creating a Custom Hook
A custom hook is a JavaScript function that starts with the word "use" and can contain any logic you want. Here's how you can create a custom hook:

Create a JavaScript file for the custom hook:

For example, useCounter.js.
Define the custom hook function:

Import React and any necessary hooks.
Write a function that encapsulates reusable logic.
Use React hooks like useState, useEffect, useContext, etc., if needed.
Use the custom hook in your components:

Import the custom hook function into your component files.
Call the custom hook function inside your functional components to access the shared logic.
Example Usage
Let's say we want to create a counter functionality using both a HOC and a custom hook:

HOC Usage
jsx

import React from 'react';
import withCounter from './withCounter';
import Counter from './Counter';

const CounterWithCounterHOC = withCounter(Counter);

function App() {
  return <CounterWithCounterHOC message="Hello, World!" />;
}

export default App;

Custom Hook Usage
jsx

import React from 'react';
import useCounter from './useCounter';
import Counter from './Counter';

function CounterWithCustomHook() {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <Counter
      count={count}
      increment={increment}
      decrement={decrement}
      reset={reset}
      message="Hello, World!"
    />
  );
}

function App() {
  return <CounterWithCustomHook />;
}

export default App;
Conclusion
Both Higher-Order Components (HOCs) and custom hooks are valuable tools for sharing logic in your React application. Choose the approach that best fits your use case and coding style. Experiment with both to see which one works best for you!

