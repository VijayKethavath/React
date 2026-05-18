// import { useState } from "react";

// function Student(propr) {
//   const { Std_details } = propr;
//   const [value, setValue] = useState("");

//   function onBtn(event) {
//     // console.log(event.target.value);
//     setValue(event.target.value);
//   }
//   let filterdata = Std_details.filter((item) =>
//     item.name.toLowerCase().includes(value.toLowerCase()),
//   );
//   console.log(filterdata);

//   return (
//     <div>
//       <h1>Student Details</h1>
//       <input type=" Search" onChange={onBtn} />
//       {filterdata == 0 ? (
//         <h1>Student not found</h1>
//       ) : (
//         filterdata.map((item) => (
//           <div
//             key={item.id}
//             style={{ backgroundColor: "red", padding: "10px", margin: "5px" }}
//           >
//             <h2>{item.name}</h2>
//             <h2>{item.course}</h2>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }
// export default Student;

import { useState } from "react";

function Student(propr) {
  const { Std_details } = propr;

  const[value,setValue]=useState("")
  function btn(event){
     setValue(event.target.value);
  }

  const filterdata=Std_details.filter(item=>(item.name.toLowerCase().includes(value)
  ))

 
  return (
    <div>
      <h1>Student Details</h1>
      <input type="search" onChange={btn}/>
      {
        filterdata==0?(
          <h1>Student not found</h1>
        ):(
           filterdata.map((item) => (
        <div
          key={item.id}
          style={{ backgroundColor: "red", padding: "10px", margin: "5px" }}
        >
          <h2>{item.name}</h2>
          <h2>{item.course}</h2>
        </div>
      ))
        )
      }

     
    </div>
  );
}
export default Student;
