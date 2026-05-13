import { Component } from "react";
import Counter from "./Counter";

class App extends Component{
  state={isshow:true}
  render(){
    return(
     <div>
       {this.state.isshow && <Counter/>}
      <button onClick={()=>{this.setState({isshow:!this.state.isshow})}}>{this.state.isshow?"hide":"show"}</button>
     </div>
    )
  }
}

export default App