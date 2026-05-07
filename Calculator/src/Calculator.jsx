import { Component } from "react";
import "./App.css"

class Calculator extends Component{

  state={value:""}

  onBtn=()=>{
    this.setState({value:this.state.value+event.target.textContent})
  }

  OnDel=()=>{
    this.setState({value:this.state.value.slice(0,this.state.value.length-1)})
  }
  render(){
    return(
      <div className="bg">
        <div className="display">{this.state.value}</div>
          <div>
            <button onClick={()=>this.setState({value:""})}>AC</button>
            <button onClick={this.OnDel}>DEL</button>
            <button onClick={this.onBtn}>/</button>
            <button onClick={this.onBtn}>%</button>
          </div>
          <div>
            <button onClick={this.onBtn}>1</button>
            <button onClick={this.onBtn}>2</button>
            <button onClick={this.onBtn}>3</button>
            <button onClick={this.onBtn}>*</button>
          </div>
          <div>
            <button onClick={this.onBtn}>4</button>
            <button onClick={this.onBtn}>5</button>
            <button onClick={this.onBtn}>6</button>
            <button onClick={this.onBtn}>-</button>
          </div>
          <div>
            <button onClick={this.onBtn}>7</button>
            <button onClick={this.onBtn}>8</button>
            <button onClick={this.onBtn}>9</button>
            <button onClick={this.onBtn}>+</button>
          </div>
          <div>
            <button onClick={this.onBtn}>0</button>
            <button onClick={this.onBtn}>00</button>
            <button onClick={this.onBtn}>.</button>
            <button onClick={()=>this.setState({value:String(eval(this.state.value))})}>=</button>
          </div>
      </div>
    )
  }
}

export default Calculator;