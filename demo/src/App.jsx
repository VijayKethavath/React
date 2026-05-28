import Demo from "./Demo"

function App(){

  const Student=[
    {id:1,name:"vijay",class:"1st"},
    {id:1,name:"ajay",class:"2nd"},
    {id:1,name:"vinay",class:"1st"},
    {id:1,name:"tharun",class:"1st"},

  ]
  return(
    <>
    <Demo Student={Student} />
    </>
  )
}
export default App