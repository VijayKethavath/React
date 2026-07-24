import { useEffect, useRef, useState } from "react"

function Counter(){
  const[count,setCount] = useState(0)
  let num = useRef(0)
  console.log("function Calling...");
  console.log(num);

  const input = useRef()

  useEffect(()=>{
    input.current.focus()
  },[])
  
  return(
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}> Count +</button><br></br>
      <button onClick={()=>num.current+=1}> Number+ </button><br></br>
      <input type = "text" ref={input}/>
      <button onClick={()=>input.current.focus()}>Click</button>
    </div>
  )
}
export default Counter