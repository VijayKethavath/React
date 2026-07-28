import { useState } from "react";
import useCounter from "./useCounter";

function Counter(){
  const[count,Increament,Decreament,Reset] = useCounter(0)
  return(
    <div>
       <h1>Count - {count}</h1>
       <button onClick={()=>Increament()}>increament</button>
       <button onClick={()=>Decreament()}>Decreament</button>
       <button onClick={()=>Reset()}>Reset</button>
    </div>
  )
}
export default Counter;