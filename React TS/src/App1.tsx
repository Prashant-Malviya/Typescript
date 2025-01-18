import React, { createContext, FormEvent, ReactNode, useReducer, useState } from "react";
import Box2 from "./components/Box2";
import Boxes from "./components/Boxes";

// interface Person {
//   name: string;
//   age: number;
// }

// type ThemeType = "light" | "dark"; //Union data type
// interface ThemeContextType {
//   theme: ThemeType;
//   toggleTheme: () => void;
// }

// export const ThemeContext = createContext<ThemeContextType>({
//   theme: "light",
//   toggleTheme: () => {},
// });


type StateType = {
  count:number
}

type ActionType = {type:"Increament";payload:number} | {type: "Decreament"; payload:number}



const reducer = (state: StateType,action:ActionType):StateType=>{
switch (action.type) {
  case "Increament":
    return {count:state.count + action.payload}
  case "Decreament":
    return {count: state.count - action.payload}  
  default:
    return state;
}
}

const initialState:StateType = {
  count: 0,
}

function App() {
  // const heading = "Namaste India";

  // const [value,setValue] = useState<string>("")

  // const [user, setUser] = useState<Person>();

  // const submitHandler = (e:FormEvent<HTMLFormElement>)=>{
  //   e.preventDefault();
  //   console.log(user);

  // }

  // const ThemeProvider = ({ children }: { children: ReactNode }) => {
  //   const [theme, setTheme] = useState<ThemeType>("light");

  //   const toggleTheme = () => {
  //     setTheme((prev) => (prev === "light" ? "dark" : "light"));
  //   };

  //   return (
  //     <ThemeContext.Provider value={{ theme: "light", toggleTheme: () => {} }}>
  //       {children}
  //     </ThemeContext.Provider>
  //   );
  // };


  // ------------------------
  // use reducer 

  const [state,dispatch] = useReducer(reducer,initialState);

  const increament = ():void=>{
    dispatch({
      type:"Increament",
      payload:1
    }) }
  const decreament = ():void=>{
    dispatch({
      type:"Decreament",
      payload:1
    })
  }

  return (
    <div>
      {/* <Box
      heading={heading} 
      count = {1} 
      func1={(a:string,b:string)=>alert(a)}>
        {"krishna and Radha"}
      </Box> */}

      {/* <Box label='Search' value={value} setter={setValue} /> */}

      {/* <form onSubmit={submitHandler}>
        <input
          type="number"
          placeholder="Age..."
          value={user?.age || ""}
          onChange={(e) =>
            setUser((prev) => ({ ...prev!, age: Number(e.target.value) }))
          }
        />

        <input
          type="text"
          placeholder="Name..."
          value={user?.name || ""}
          onChange={(e) =>
            setUser((prev) => ({ ...prev!, name: e.target.value }))
          }
        />

        <button type="submit">Register</button>
      </form> */}

      {/* <Box2 /> */}

      {/* <ThemeProvider>
        <h1>Namaste Bharat</h1>
        <Boxes />
      </ThemeProvider> */}

        <h1>count change</h1>

        <p>Count:  {state.count}</p>

        <button onClick={increament}>+</button>
        <button onClick={decreament}>-</button>

    </div>
  );
}



export default App
