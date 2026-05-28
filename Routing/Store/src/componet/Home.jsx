import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Home(){
  const[data,setdata]=useState([])
  const[load,setloading] =useState(false)
  const[value,setvalue]=useState(data)

  useEffect(()=>{
  async function fetchData(){
    try {
      setloading(true)
        let res = await fetch("https://fakestoreapi.com/products")
        let jsondata = await res.json()
        setdata(jsondata)
        setloading(false)
      }
     catch (error) {
     console.log(error);  
    }
  }
  fetchData()
  },[])

  async function onbtn(event){
    try {
      if(event.target.textContent=="All"){
        let res = await fetch("https://fakestoreapi.com/products")
        let jsondata = await res.json()
        setdata(jsondata)
      }
      else{
        setloading(true)
        let res = await fetch(`https://fakestoreapi.com/products/category/${event.target.textContent}`)
        let jsondata = await res.json()
        console.log(jsondata)
        setdata(jsondata)
        setloading(false)
      }
    } catch (error) {
      console.log(error);
      
    }
  }

  function onsrc(event){
     setvalue(event.target.value)
  }
  let filterdata = data.filter(item=>item.title.includes(value))
  return(

    <div>
     <h1>Products</h1>
    <button onClick={onbtn}>All</button>&nbsp;
    <button onClick={onbtn}>men's clothing</button>&nbsp;
    <button onClick={onbtn}>jewelery</button>&nbsp;
    <button onClick={onbtn}>electronics</button>&nbsp;
    <button onClick={onbtn}>women's clothing</button>&nbsp;<br/>
    <input type="search" onChange={onsrc}/><br/>
      {
       load?(
        <h1>Loading...</h1>
       ):(
        filterdata==0?(
          <h1>No data found</h1>
        ):(
          load?(
            <h1>Loading...</h1>
          ):(
            filterdata.map(item=>(
          <Link to={"/products/"+item.id} key={item.id}>
          <img src={item.image} />
          <h3>{item.title}</h3>
          </Link>
        ))
          )
        )
       )
      }
        
    </div>
  )
}
export default Home;