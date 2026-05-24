import { useEffect } from "react";
import { useState } from "react";

function Time(){
  const[Time,setTime]=useState( new Date())

  useEffect(()=>{
    let time=setInterval(()=>{
      setTime(new Date())
    },1000)
    console.log("Time Started");

    return()=>{
      clearInterval(Time)
      console.log("Time Stopped");
      
    }
    
  },[])
  return(
    <div>
      <h1>{Time.toLocaleTimeString()}</h1>
      
    </div>
  )
}

export default Time;