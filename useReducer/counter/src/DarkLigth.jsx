import { useReducer } from "react";

function Mode(state,action){
  switch (action.type) {
    case "dark":
      return {isLight:false}
  
    case "light":
      return {isLight:true}
  
    default:
      return state
  }
}

function DarkLight(){
  const[state,dispatch] = useReducer(Mode,{isLight:false})

  function Btn(){
    state.isLight?dispatch({type:"dark"}):dispatch({type:"light"})
  }
  return(
    <div style={{backgroundColor:state.isLight?"white":"black"}}>
      <h1 style={{color:state.isLight?"black":"white"}}>
        {state.isLight?"This is Light Mode":"This is Dark Mode"}
        </h1>
      <button onClick={()=>Btn()}>{state.isLight?"Dark":"Light"}</button>
    </div>
  )
}
export default DarkLight;

// import { useReducer } from "react";

// function reducer(state,action){
// switch (action.type) {
//   case "dark":
//       return{isLigth:false};
  
//   case "ligth":
//       return{isLigth:true};
    
//   default:
//     return state
// }
// }
// function DarkLigth(){
//   const[state,dispatch] = useReducer(reducer,{isLigth:false})

//   function Btn(){
//   state.isLigth?dispatch({type:'dark'}):dispatch({type:'ligth'});
// }
 
//     return(
//       <div style={{backgroundColor:state.isLigth?"white":"black"}}>
//         <h1 style={{color:state.isLigth?"black":"white"}} >{state.isLigth?"This is Ligth Mode":"This is Dark Mode"}</h1>
//         <button onClick={()=>Btn()}>{state.isLigth?"Dark":"Ligth"}</button>
//       </div>
//     )
// }
// export default DarkLigth;
