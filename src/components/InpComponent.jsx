import React, { useState } from 'react'

const InpComponent = () => {
    const [val,setVal]=useState("")
    const saveInfo=(e)=>{
      setVal(e.target.value)
        console.log(e.target.value);
    }
    const keepInfo=()=>{
      
    }
  return (
    <div>
      <input type="text" value={val}  onChange={saveInfo}/>
      <button onClick={keepInfo}>Melumat gonder</button>
    </div>
  )
}

export default InpComponent
