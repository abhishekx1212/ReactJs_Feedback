import React from 'react'
import { useState } from 'react';
let isChange = false
function State() {
    const [count, setCount] = useState(0);
    const [myName, setName] = useState("Click")
    
    const handleBar = ()=>{
        if(isChange == false){
          setName("Trigon")
          isChange = true
        }else{
          setName("Click")
          isChange = false
          console.log(isChange);
        }
        setCount(count+1)
    }
  return (
    <div>
      <h2>Hello,{myName}</h2>
      <h2>count: {count}</h2>
      <button onClick={handleBar}>Fun</button>
      <button onClick={()=>{setName("abcd")}}>Click</button>
    </div>
  )
}

export default State
