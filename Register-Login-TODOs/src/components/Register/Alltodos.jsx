import { useEffect, useState } from "react";

function Alltodos() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    async function getAlltodos() {
      try {
        let userId = localStorage.getItem("user_id")
        console.log(userId);
        
        let res = await fetch(`http://localhost:5000/todos?uersId=${userId}`);
        let jsonData = await res.json();
        setdata(jsonData);
        console.log(jsonData);
        
      } catch (error) {
        console.log(error);
      }
    }
    getAlltodos();
  }, [data]);

    async function onDlt(id){
       let del =  await fetch(`http://localhost:5000/todos/${id}`,{
        method:"DELETE"})

        if(del.ok){
          alert("Deleted")
        }
        else{
          alert("Not Deleted Error")
        }
    }
  return (
    <div>
      {
      data.map((item) => (
        <div key={item.id}>
          <h1>{item.todo}</h1>
          <button>{item.isCompleted?"Mark as Panding":"Mark as complete" }</button>
          <button onClick={()=>onDlt(item.id)}>Delete</button>
          <p>{item.date}</p>
        </div>
      ))
      }
    </div>
  )
}
export default Alltodos;
