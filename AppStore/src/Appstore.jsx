import "./App.css";
import { useState } from "react";

function Appstore(getdata) {
  const{data}=getdata;
  // console.log(data);
  const[value,setvalue]=useState("")
  const[appdata,setappdata]=useState(data)

  function onbtn(event){
    setvalue(event.target.value)
  }

  function srcBtn(event){
    if(event.target.textContent=="All"){
      setappdata(data)
      console.log(appdata);
      
    }
    else{
      let filterdata=data.filter(i=>i.category == event.target.textContent)
      setappdata(filterdata)
    }
  }

  let srcdata=appdata.filter(i=>i.name.toLowerCase().includes(value.toLowerCase()))
  return (
    <div>
      <div className="navbar">
        <h1>AppStore</h1>
        <input placeholder="Search" type="search" onChange={onbtn}/>
      </div>

      <div className="ctgr">
        <button onClick={srcBtn}>All</button>
        <button onClick={srcBtn}>Social</button>
        <button onClick={srcBtn}>Entertainment</button>
        <button onClick={srcBtn}>Finance</button>
        <button onClick={srcBtn}>Food</button>
      </div>

      <div className="maincard" >
        
       {
        srcdata.length==0?(
          <h1 style={{color:"white"}}>No App data found</h1>
        ):+
        (
          srcdata.map(item=>(
          <div className="card" key={item.id}>
            <img src={item.img}/>
            <h4>{item.name}</h4>
          </div>
         ))
        )  
       }

      </div>
    </div>
  );
}
export default Appstore;
