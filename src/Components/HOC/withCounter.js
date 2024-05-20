import React, { useState } from 'react';

// Here Wrapped Component will be your component which you want to enhance; in this case, the Counter Component

function withCounter(WrappedComponent) {
  return function WithCounter(props) {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };

    const decrement = () => {
      setCount(count - 1);
    };

    const reset = () => {
      setCount(0);
    };

    return (
      <WrappedComponent
        {...props}
        count={count}
        increment={increment}
        decrement={decrement}
        reset={reset}
      />
    );
  };
}

export default withCounter;
