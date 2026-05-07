import { Component } from "react";
import "./App.css";

class ShowHide extends Component{
  state={show:true}

  btn=()=>{
    this.setState({show:!this.state.show})
  }
  render(){
    return(
      <div className="bg">
          <div className="display">
            <h1>{this.state.show?this.props.name:""}</h1>
          </div>
          <div>
            <button onClick={this.btn}>{this.state.show?"show":"Hide"}</button>
          </div>
      </div>
    )
  }
}
export default ShowHide;