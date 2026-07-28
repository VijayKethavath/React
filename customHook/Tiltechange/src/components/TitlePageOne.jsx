import { useEffect, useState } from "react"
import useTitlePage from "./useTitlePage";

function TitlePageOne(){
 const[count,setcount] = useState(0);

//  useEffect(()=>{
//   document.title = `count-${count}`
//  })

  useTitlePage(count)
  return(
   <div>
      <button onClick={()=>setcount(count+1)}>count-{count}</button>
   </div>
  )
}
export default TitlePageOne