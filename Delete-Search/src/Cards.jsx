import "./App.css";
import { useState } from "react";
function Cards(propr){
  const{Social}=propr;
  const[value,setvalue]=useState("")
  const[data,setdata]=useState(Social)


  function Btn(){
    setvalue(event.target.value)
  }



  let filterdata=data.filter(i=>i.name.toLowerCase().includes(value.toLowerCase()))
  return(
<div className="outside">
  <h1>Social media</h1>
  <input type="search" placeholder="Search" onChange={Btn}/>
  {
    filterdata==0?(
      <h1>No Data Found</h1>
    ):(
      
    filterdata.map((item)=>(
      <div key={item.id}>
        <div className="inside" > 
        <img src={item.img}></img>
        <h1>{item.name}</h1>
        <a href={item.link}>{item.link}</a>
        <button onClick={()=>{
          let rem_data=data.filter(i=>i.id!=item.id)
          setdata(rem_data)
        }}> DELETE</button>

      
        </div>
      </div>
    ))
  
    )
  }
</div>
  )
}
export default Cards;
  