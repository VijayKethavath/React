import { useEffect, useState } from "react";

function Product() {
  const[data,setData] = useState([])
  const[load,setload] = useState(false)
  const[value,setValue] = useState(data)
  
  useEffect(()=>{
    
   async function fetchdata(){
   try {
    setload(true)
    let res = await fetch("https://fakestoreapi.com/products")
    let jsonres = await res.json()
    setData(jsonres);
    setload(false)
    
   } catch (error) {
    console.log(error);
    
   }
      
    }
    fetchdata();
  },[])

  async function onbtn(event){
    if(event.target.textContent == "All"){
      setload(true)
      let res = await fetch("https://fakestoreapi.com/products")
      let jsondata = await res.json()
      console.log(jsondata);
      setData(jsondata)
      setload(false)
    }
    else
    {
      setload(true)
      let res = await fetch(`https://fakestoreapi.com/products/category/${event.target.textContent}`)
      let jsondata = await res.json()
      console.log(jsondata);
      setData(jsondata)
      setload(false)
    }
  }
  
  function onsrc(event){  
   setValue(event.target.value)
  }

    let filterdata = data.filter(item=>(item.title.includes(value)))
    console.log(filterdata);
    
  
  return (
  <div>
    <h1>Product</h1>
    <button onClick={onbtn}>All</button>
    <button onClick={onbtn}>men's clothing</button>
    <button onClick={onbtn}>jewelery</button>
    <button onClick={onbtn}>electronics</button>
    <button onClick={onbtn}>women's clothing</button>
    <input type="search" onChange={onsrc}></input>
    {
     load?(
      <h1>Loading....</h1>
     ):(
      filterdata==0?(
        <h1>No data found</h1>
      ):(
         load?(
        <h1>Loading.....</h1>
      ):(
        filterdata.map(item=>(
        <div key={item.id}>
          <img src={item.image}/>
          <h1>{item.title}</h1>
          <h3>{item.description}</h3>
          <h4>{item.category}</h4>
        </div>
      ))
      )
      )
     )
    }
  </div>
  )

}
export default Product;
