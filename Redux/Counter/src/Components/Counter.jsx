import { useDispatch, useSelector } from "react-redux";
import { OnDecBtn, OnIncBtn, OnResBtn } from "../Features/CounterSlice";

function Counter(){
 const state =useSelector(state=>state.counter)
 console.log(state);
 
 const dispatch = useDispatch()
  return(

     <div>
      <h1>{state.count}</h1>
      <button onClick={()=>dispatch(OnIncBtn())}>+</button>&nbsp;
      <button onClick={()=>dispatch(OnResBtn())}>0</button>&nbsp;
      <button onClick={()=>dispatch(OnDecBtn())}>-</button>&nbsp;
     </div>
  )
}
export default Counter