import { useState } from "react";

function Login(){
  const[err,seterr]=useState(false)
  const[email,setemail] = useState("")
  const[password,setpassword] = useState("")

 async function onsubmit(event){
    event.preventDefault()

    let res = await fetch(`http://localhost:4000/user?email=${email}`)
    let jsondata = await res.json();
    // console.log(jsondata);
    
    if(jsondata.length==0){
      seterr(true)
      return

    }
    seterr(false)
    if(jsondata[0].Password == password){
      localStorage.setItem("user_id",jsondata[0].id)
      alert("added")
    }
    else{
      seterr(true)
    }
    


  }
  return(
   <form onSubmit={onsubmit}>

    <label>Email </label>
    <input type="email" placeholder="Enter email" onChange={()=>setemail(event.target.value)}/> <br/><br/>
    <label>Password </label>
    <input type="password" placeholder="Enter password" onChange={()=>setpassword(event.target.value)}/> <br/><br/>
    {err && <p style={{color:"red"}}>User not found</p>}
    <button type="submit">Log in</button>
   </form>
  )
}
export default Login;