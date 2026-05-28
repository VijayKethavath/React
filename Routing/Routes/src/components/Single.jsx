import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Single(){
  const{id}=useParams()
  const[data,setdata]=useState({})

  useEffect(()=>{
    async function getdata(){
      try {
      let res = await fetch(`https://fakestoreapi.com/products/${id}`)
      let jsondata = await res.json();
      setdata(jsondata)
      } catch (error) {
        console.log(error);
      }
    }
    getdata()
  },[])

  return(
 <div>
        <img src={data.image}/>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
        <h1>price: ${data.price}</h1>
 </div>
  )
}
export default Single;