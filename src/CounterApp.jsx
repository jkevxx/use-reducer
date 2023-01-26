import React, { useReducer } from "react";

const reducer = (state, action) => {
  return state;
};

const CounterApp = () => {
  const [counter, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>Clicks {counter}</h2>
      <button>Increment</button>
      <button>Decrement</button>
      <button>Reset</button>
    </div>
  );
};

export default CounterApp;
