import { useDispatch, useSelector } from "react-redux";
import { OnDecBtn, OnIncBtn, OnResBtn } from "./Createslice";

function Counter(){
  const state = useSelector(state=>state.counter)
  console.log(state);
  
  const dispatch = useDispatch()
  return(
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=>dispatch(OnIncBtn())}>+</button>
      <button onClick={()=>dispatch(OnResBtn())}>0</button>
      <button onClick={()=>dispatch(OnDecBtn())}>-</button>
    </div>
  )
}
export default Counter;