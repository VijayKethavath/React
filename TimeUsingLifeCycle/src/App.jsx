import { Component } from "react";
import Time from "./Time";

class App extends Component{
  state={Show:true}
  render(){
    return(
      <div>
         {this.state.Show && <Time />}
        <button onClick={()=>{this.setState({Show:!this.state.Show})}}>{this.state.Show?"Show":"Hide"}</button>
      </div>
    )
  }
}

export default App;