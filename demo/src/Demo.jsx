function Demo(propr){
  const{Student} =propr
  return(
    <div>
      {Student.map(item=>(
        <h1>{item.name}</h1>
      ))
      }
    </div>
  )
}
export default Demo;