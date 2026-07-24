import { useCallback, useMemo, useState } from "react"
import Child from "./child";

function Counter(){
  const[count,setCount] = useState(0)
  const[color,setcolor] = useState("blue")
  function sum(){
    console.log("Sum function....");
    
    let s=0;
    for(let i=0;i<100000;i++){
      s+=i;
    }
    return s
  }

  let result = useMemo(()=>{
    return sum()
  },[])

  let details = useMemo(()=>{
    return{name:"vijay",age:"22"}
  },[])

  let changeColor = useCallback(()=>{
    setcolor(color=="blue"?"red":"blue")
  },[color])

  return(
    <div>
      <h1>sum:{result}</h1>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>+</button>
      <Child details = {details} color = {color} changeColor = {changeColor}/>
    </div>
  )
}
export default Counter
// import { useMemo, useState , useCallback } from "react"


// import Child from "./child";

// function Counter(){
//   const[count,setCount] = useState(0)
//   const[color,setcolor] = useState("blue")

//   function sum(){
//     let s=1
//     console.log("Calculating...");
//     for(let i=1;i<100000;i++){
//       s=s+i;
//     }
//     return s;
//   }

//   let result = useMemo(()=>{
//     return sum()
//   },[])

//  let details = useMemo(()=>{
//    return {name:"vijay",age:"22"}
// },[])

// let changeColor = useCallback(()=>{
//   setcolor(color=="blue"?"red":"blue")
// },[color])
//   return(
//     <div>
//         <h1>Sum: {result}</h1>
//         <h1>{count}</h1>
//         <button onClick={()=>setCount(count+1)}>Increament</button>
//         <Child details = {details} color = {color} changeColor = {changeColor}/>
//     </div>
//   )
// }
// export default Counter