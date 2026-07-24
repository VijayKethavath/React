import { memo } from "react";

function Child({details,color,changeColor}){
  console.log("Child function called....");
  
  return(
    <div>
     <h1 style={{color}}>Name:{details.name}</h1>
     <h1 style={{color}}>Age :{details.age}</h1>
     <button onClick={changeColor}>Color</button>
    </div>
  )
}
export default memo(Child);

// import { memo } from "react";

// function Child({details,color,changeColor}){
//   console.log("Child function...");
  
//   return(
//   <div>
//    <h1 style={{color:color}}>Name: {details.name}</h1>
//    <h1 style={{color}}>Age: {details.age}</h1>
//    <button onClick={changeColor}>Change</button>
//   </div>
//   )
// }
// export default memo(Child)