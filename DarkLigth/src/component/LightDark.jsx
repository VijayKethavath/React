import { Component } from "react";
import "../App.css"

class LightDark extends Component{
  state={mode:true}

  render(){
    return(
      <div className={this.state.mode?"bg-light":"bg-dark"}>
         <h1>{this.state.mode?"This is Light Mode":"This is Dark Mode"}</h1>
         <button onClick={()=>this.setState({mode:!this.state.mode})}>{this.state.mode?"Dark":"Light"}</button>
      </div>
    )
  }
}
export default LightDark;