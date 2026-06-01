import { useState } from "react";

function Textlength(){
  const[text,setText] = useState("")
  return(
    <div>
      <h1>Text length Counter</h1>
      <input placeholder="Enter Text" onChange={()=>setText(event.target.value)}  />
      <h1>{text}</h1>
      <h3>Total no.of Character:{text.length}</h3>
    </div>
  )
}
export default Textlength;