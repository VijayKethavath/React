
import StudentCard from "./components/StudentCard";
import Player from "./components/PlayerCard"

function App(){
  return(
    <>
    <h1><i>Student Details</i></h1>
    <StudentCard name=" Vijay" class="10th" age={22}/>
    <StudentCard name=" Tharun" class="10th" age={23}/>
    <StudentCard name=" Vinay" class="10th" age={22}/>

    <h1><i>Player Card</i></h1>
    <Player name=" Vijay" game="God of war" level={53} />
    <Player name=" Akshara" game="GTA 5" level={42} />
    <Player name=" Akshitha" game="PUBG" level={56} />
    </>
  )
}

export default App;