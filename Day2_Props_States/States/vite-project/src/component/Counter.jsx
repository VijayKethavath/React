import React from "react";
import "../App.css"

class Counter extends React.Component{

  state={count:0}
  inBtn=()=>{
    this.setState({count:this.state.count+1})
  }

  deBtn=()=>{
    this.setState({count:this.state.count-1})
  }

  Rst=()=>{
    this.setState({count:0})
  }
  render(){
    return(
      <div className="bg">
        <div className="card">
          <h1>Counter Application</h1>
          <h1>{this.state.count}</h1>
        <div>
          <button onClick={this.inBtn}>Increament</button>
          <button onClick={this.Rst}>reset</button>
          <button onClick={this.deBtn}>Decreament</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Counter;