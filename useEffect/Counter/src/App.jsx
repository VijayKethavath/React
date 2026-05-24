import { useState } from "react";
import Counter from "./Counter"
function App(){
  const[Show,setShow]=useState(true)
  return(
    <div>
    { Show && <Counter /> }
    <button onClick={()=>setShow(!Show)}>{Show?"Show":"Hide"}</button>
    </div>
  )
}
export default App;