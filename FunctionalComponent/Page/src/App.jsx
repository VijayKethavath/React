import DarkLigth from "./components/DarkLight"
import { useState } from "react";
import "./App.css"

function App(){

  const[Ishide,sethide] = useState(true)
  return(
    <>
     {Ishide && <DarkLigth />}
    <div className="h">
    <button onClick={()=>{sethide(!Ishide)}}>{Ishide?"Hide page":"Show page"}</button>
    </div>
    </>
  )
}

export default App;