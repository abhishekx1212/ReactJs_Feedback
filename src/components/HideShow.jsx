import React, { useState } from 'react'

const HideShow = () => {
   
  const [isThere, setIsthere] = useState(true)
  const [clr,setClr]= useState(false)
  
//   function clor(e){
//     if(clr) e.target.style.color = "red"
//     else e.target.style.color = "black"
//     setClr(!clr)
//   }

  return (
    <div>
      {isThere?<h1>Hello world!!!!!!!!</h1>:null}
      <button onClick={()=>{setIsthere(false)}} >Hide</button>
      <button onClick={()=>{setIsthere(true)}} >Show</button>
      <button onClick={()=>{setIsthere(!isThere)}} >Toggle</button>
      <h2 onClick={(e)=>{e.target.style.color = "red"}} >click to Change color</h2>
      <h2 onClick={(e)=>{e.target.style.fontSize = "30px"}} >click to Change size</h2>
    </div>
  )
}

export default HideShow
