import { useState } from "react";
import Alltodos from "./Alltodos";

function Todos(){
  const[todo,setdata] = useState("")

  const onbtn=async()=>{
    try {
    const data = new Date()
      let task={
        todo,
        date:data.toLocaleString(),
        isCompleted:false,
        uersId:localStorage.getItem("user_id")
      }

      let res = await fetch("http://localhost:5000/todos",{
        method:"POST",
        headers:{
          "Content-Tpye":"application/json"
        },
        body:JSON.stringify(task)
      })

      if(res.ok){
        alert("Added Todo")
      }
      else{
        alert("Fail")
      }
    } catch (error) {
      console.log(error);
      
    }
  }
  return(
    <div>
        <input type="text" placeholder="Enter Todo" onChange={()=>setdata(event.target.value)} />&nbsp;
        <button onClick={onbtn}>Add</button>
        <Alltodos/>
    </div>
  )
}
export default Todos;