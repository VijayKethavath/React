import React from "react";
import "./App.css"

class LogInOut extends React.Component{
  state={islogin:true}

  Btn=()=>{
    this.setState({islogin:!this.state.islogin})
  }
  render(){
    return(
      <div className="bg">
        <h1>{this.state.islogin?"This is Login page":"This is Logout page"}</h1>
        <button onClick={this.Btn}>{this.state.islogin?"Logout":"Login"}</button>
      </div>
    )
  }
}
export default LogInOut ;