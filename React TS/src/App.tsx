import React from 'react'
import Box from './components/Box'

function App() {

  const heading = "Namaste India";
  return (
    <div>
      <Box
      heading={heading} 
      count = {1} 
      func1={(a:string,b:string)=>alert(a)}>
        {"krishna and Radha"}
      </Box>
    </div>
  )
}

export default App
