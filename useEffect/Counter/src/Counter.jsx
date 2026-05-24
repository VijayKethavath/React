import { useEffect, useState } from "react";

function Counter(){
  const[count,setCount]=useState(0)
  const[name,setname]=useState(true)


  useEffect(()=>{
    // Empty Dependency Array
    console.log("Runs only onces in initial -> Did mount");
  },[])

  useEffect(()=>{
    //Without Dependency Array
    console.log("intial+runs after every Render ->Did Update");
    
  })

  useEffect(()=>{
    // With Dependecny passing state
    console.log("Runs only when state is update");
    
  },[name])

  useEffect(()=>{
    return()=>{
      console.log("componet Removed -> Did Unmount");
      
    }
  },[])


 return(
  <div>
    <h1>{count}</h1>
    <button onClick={()=>setCount(prev=>prev+1)}>+</button>&nbsp;
    <button onClick={()=>setname(!name)}>{name?"Bruno":"Snoopy"}</button>
  </div>
 )
}
export default Counter;