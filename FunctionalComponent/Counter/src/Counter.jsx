import { useState } from "react";

function Counter(){
  const[count,setCount]=useState(0)
  
  const onBtn=()=>{
    setCount(count+1)
  }
  return(
    <div>
      <h1>Counter</h1>
      <h1>{count}</h1>
      <div>
        <button onClick={onBtn}>Increament</button>&nbsp;
        <button onClick={()=>{setCount(0)}}>Reset</button>&nbsp;
        <button onClick={()=>setCount(count-1)}>Decreament</button>
      </div>
    </div>
  )
}

export default Counter;