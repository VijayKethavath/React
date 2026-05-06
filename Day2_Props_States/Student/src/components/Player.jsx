import React from "react";

class Player extends React.Component{
  render(){
    return(
      <div>
        <h1>Player:{this.props.name}</h1>
        <h1>score:{this.props.score}</h1>
      </div>
    )
  }
}
export default Player;