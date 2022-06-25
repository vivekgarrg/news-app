import React, {useState} from 'react'


function FunComp(props) {
  const [count, setCount] = useState(0)  
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount((prev) => prev+1)}>+</button>&nbsp;
        <button onClick={()=>setCount(prev => prev-1)}>-</button>
    </div>
  )
}

export default FunComp