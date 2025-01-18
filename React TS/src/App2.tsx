import React from "react";
import Counter from "./components/Counter";
import ThemeProvider from "./components/ThemeProvider";
import UserForm from "./components/UseForm";

function App() {
  return (
    <div>
      <ThemeProvider>
        <h1>Namaste Bharat</h1>
      </ThemeProvider>
      <Counter />
      <UserForm />
    </div>
  );
}

export default App;
