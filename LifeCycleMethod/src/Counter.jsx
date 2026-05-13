import { Component } from "react";

class Counter extends Component{
  componentDidMount(){
    console.log("mount");
    
  }
  componentDidUpdate(){
    console.log("update")
  }
  componentWillUnmount(){
    console.log("Unmount");
    
  }

  constructor(props){
    super(props)
    this.state={count:0}
  }
  render(){
    return(
      <div>
         <h1>{this.state.count}</h1>
         <button onClick={()=>{this.setState({count:this.state.count+1})}}>+</button>
      </div>
    )
  }
}

export default Counter