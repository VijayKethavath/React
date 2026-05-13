
function StudentCard(props){
  return(
    <div>
      <h3>Student Name: {props.name}</h3>
      <h3>Age: {props.age}</h3>
      <h3>Class: {props.class}</h3>
    </div>
  )
}

export default StudentCard;
