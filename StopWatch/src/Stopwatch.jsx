import { useState } from "react";

function StopWatch(){
  const[Time,setTime]=useState(0)
  const[Timer,setTimer]=useState(null)

  const onstr=()=>{
    let timer=setInterval(()=>{
      setTime(prev=>prev+1)
    },10)
    setTimer(timer)
  }

  const onrst=()=>{
    clearInterval(Timer)
    setTime(0)

  }

  const onstp=()=>{
       clearInterval(Timer)
  }
  return(
    <div>
      <h1>{Math.floor(Time/60)<10?"0"+Math.floor(Time/60):Math.floor(Time/60)}:{Time%60<10?"0"+Time%60:Time%60}</h1>
      <button onClick={onstr}>Start</button>
      <button onClick={onrst}>Reset</button>
      <button onClick={onstp}>Stop</button>
    </div>
  )
}
export default StopWatch;