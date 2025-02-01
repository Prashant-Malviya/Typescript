import React, { useContext } from "react";
import { ThemeContext } from "../App1";

const Boxes = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  alert(theme);

  return (
    <div className="boxContainer">
      <h1>Box1</h1>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
};

export default Boxes;
