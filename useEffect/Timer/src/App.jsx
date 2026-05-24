import { useState } from "react";
import Time from "./Time";

function App(){
  const[Show,setShow]=useState(true)
  return(
    <div>
      {Show && <Time />}
      <button onClick={()=>setShow(prev=>!prev)}>{Show?"Show":"Hide"}</button>
      
    </div>
  )
}
export default App;