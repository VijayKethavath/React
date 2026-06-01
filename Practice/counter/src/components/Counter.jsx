import { useState } from "react";

function Counter(){
  const[value,setValue] = useState(0)
  return(
    <div>
      <h1>Counter Application</h1>
   <h1>{value}</h1>
   <button onClick={()=>setValue(prev=>prev+1)}>Increament</button>
   <button onClick={()=>setValue(0)}>Rest</button>
   <button onClick={()=>setValue(prev=>prev-1)}>Decreament</button>
   </div>

  )
}
export default Counter;