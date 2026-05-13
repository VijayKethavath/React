import { Component } from "react";

class Time extends Component{
  state = {date:new Date()}

  componentDidMount(){
    this.time=setInterval(()=>{
      this.setState({date:new Date()})
    },1000)
  }
  componentWillUnmount(){
    clearInterval(this.time)
  }
  render(){
    return(
      <div>
         <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    )
  }
}

export default Time;