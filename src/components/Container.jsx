import React from 'react'
import Child from './Child'

const Container = ({arrX}) => {
  return (
    <div>
      {arrX?.map((data,i)=>{
      return  <Child key={i} data={data}/>
      })}
    </div>
  )
}

export default Container
