// components/Counter.tsx
import React, { useReducer } from "react";
import { counterReducer, initialState } from "../reducer/counterReducer";

const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const increament = (): void => {
    dispatch({
      type: "Increament",
      payload: 1,
    });
  };

  const decreament = (): void => {
    dispatch({
      type: "Decreament",
      payload: 1,
    });
  };

  return (
    <div>
      <h1>Count Change</h1>
      <p>Count: {state.count}</p>
      <button onClick={increament}>+</button>
      <button onClick={decreament}>-</button>
    </div>
  );
};

export default Counter;
