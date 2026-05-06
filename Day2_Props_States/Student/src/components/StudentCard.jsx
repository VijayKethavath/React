import React from "react";

class StudentCard extends React.Component{
  render(){
    console.log(this.props)
    return(
      <div>
        <h1>Name: {this.props.name}</h1>
        <h1>Age: {this.props.age}</h1>
        <h1>City: {this.props.city}</h1>
        <h1>Is Student:{this.props.isStudent?"True":"False"}</h1>
        <br></br>
      </div>

    )
  }

}
export default StudentCard;