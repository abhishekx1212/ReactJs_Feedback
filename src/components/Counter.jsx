import React, { useEffect, useState } from 'react'

const Counter = () => {

    const [count,setCount] = useState(0)
    let newVal;
    function increae(){
        newVal = count + 1
        setCount(newVal)
        localStorage.setItem("count",JSON.stringify(newVal))
    }
    
    function decrease(){
        newVal = count - 1
        setCount(newVal)
        localStorage.setItem("count",JSON.stringify(newVal))
    }

    useEffect(()=>{
        let setVal =  JSON.parse(localStorage.getItem('count')) || 0
        setCount(setVal)
    })

  return (
    <div>
      <button onClick={increae}>+</button>
      <span style={{fontSize:"30px",margin:"0px 10px"}} ><b>{count}</b></span>
      <button onClick={decrease}>-</button>
    </div>
  )
}

export default Counter
