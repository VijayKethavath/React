import React from "react";
class Component extends React.Component{
  render(){
    return(
      <div style={{color:"blue"}}>
        <h1>Name :Vijay</h1>
        <h2>Class :77R</h2>
        <h3>Java FullStack</h3>
        <h3>{10%2==0?"Even":"Odd"}</h3>
      </div>
    )
  }
}

export default Component;