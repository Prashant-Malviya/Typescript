import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increamentByValue } from "./redux/redux";
import { StateType } from "./types";

const App = () => {
  const [value, setValue] = useState<number>();

  const dispatch = useDispatch();

  const count = useSelector((state: StateType) => state.count);

  const increamentByValueHandler = () => {
    dispatch(increamentByValue());
  };

  return (
    <div>
      <h1>Toolkit</h1>

      <h2>Count: {count}</h2>

      <button>+</button>
      <button>-</button>

      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />

      <button onClick={increamentByValueHandler}>Add</button>
    </div>
  );
};

export default App;
