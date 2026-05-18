import Student from "./components/Student";

const Std_details=[
  {id:1,name:"Vijay",course:"Java"},
  {id:2,name:"Vinay",course:"mern"},
  {id:3,name:"Tharun",course:"python"},
  {id:4,name:"Akshay",course:"Data Science"},
]
function App(){
  return(
    <Student  Std_details={Std_details}/>
    
  )
}
export default App;