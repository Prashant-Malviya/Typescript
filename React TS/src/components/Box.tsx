import React, { ReactNode } from 'react'

type PropsType = {
  heading: string;
  count: number;
  func1 : (b:string,a:string)=>void;
  children: ReactNode
}

function Box({heading,count,func1,children}: PropsType) {

  func1("three","four");

  return (
    <div>
      <h1>{heading} and {count}</h1>
      <h1>{children}</h1>
    </div>
  )
}

export default Box
