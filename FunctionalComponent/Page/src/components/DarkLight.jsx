import { useState } from "react"
import "../App.css"
function Mode() {
  const [Dark, SetMode] = useState(true)
  const [LogIn, SetLog] = useState(true)

  return (
    
      <div className={Dark?"light":"dark"}>
        <h1>{Dark ? "This is Ligth Mode" : "This is Dark Mode"}</h1>
        <button onClick={() => { SetMode(!Dark) }}>{Dark ? "Dark Mode" : "Light Mode"}</button>

        
          <h1>{LogIn?"This is Login page":"This is Logout page"}</h1>
          <button onClick={()=>{SetLog(!LogIn)}}>{LogIn?"LogOut":"LogIn"}</button>
        
      </div>
    
  )
}

export default Mode;