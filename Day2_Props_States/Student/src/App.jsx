import React from "react";
// import StudentCard from "./components/StudentCard"
import Player from "./components/Player"

class App extends React.Component{
  render(){
    return(
      <div style={{margin:"10px",padding:"30px"}}>

     {/* <StudentCard name="Deva" age={26} city="HYD" isStudent={true} />
     <StudentCard name="Devi" age={35} city="HYD" isStudent={false} />
     <StudentCard name="Ajay" age={23} city="HYD" isStudent={true} /> */}

     <Player name="Ajay" score={88}/>
     <Player name="vijay" score={78}/>
     </div>
    )
  }
}
export default App;