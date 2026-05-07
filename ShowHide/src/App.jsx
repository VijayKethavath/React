import { Component } from "react";
import ShowHide from "./ShowHide"

class App extends Component{
  render(){
    return(
      <div>
      <ShowHide name="John"/>
      <ShowHide name="vijay"/>
      </div>
    )
  }
}
export default App;