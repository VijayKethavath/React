import { useState } from "react";

function useCounter(initialValue){
  const[count,setcount] = useState(initialValue);
  function Increament(){
    setcount(count+1);
  }

  function Decreament(){
    setcount(count-1);
  }

  function Reset(){
    setcount(0)
  }
  return[count,Increament,Decreament,Reset]
}
export default useCounter;