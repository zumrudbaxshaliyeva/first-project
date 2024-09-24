import React, { useState } from 'react'
import InpComponent from './components/InpComponent'
import Container from './components/Container'

const App = () => {
  const [arr,setArr]=useState([

  ])
  return (
    <div>
      <InpComponent arrX={arr}/>
      <Container arrx={arr}/>
    </div>
  )
}

export default App
