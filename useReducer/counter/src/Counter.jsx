import { useReducer } from "react"

const initialValue = {count:0}

function reducer(state,action){
  switch(action.type){
    case "Increament":
      return {count:state.count+1};
    
    case "Reset":
      return {count:0};

    case "Decreament":
      return {count:state.count-1}  
  }

}
function Counter(){

  const[state,dispatch] = useReducer(reducer,initialValue);
  return(
  <div>
    <h1>Counter Application</h1>
    <h1>{state.count}</h1>
    <button onClick={()=>dispatch({type:"Increament"})}>Increament</button>&nbsp;
    <button onClick={()=>dispatch({type:"Reset"})}>Reset</button>&nbsp;
    <button onClick={()=>dispatch({type:"Decreament"})}>Decreament</button>
  
  </div>
  )
}
export default Counter