import { useState } from "react";

function Login(){
  const[email,setemail] = useState("")
  const[password,setpassword] = useState("")
  const[err,seterr] = useState("")
  
  async function onLogin(event){
    event.preventDefault()

    try {
      let check = await fetch(`http://localhost:5000/user?email=${email}`)
      let jsondata = await check.json()

      if(jsondata.length == 0){
        seterr(true)
        return
      }
      seterr(false)

      if(jsondata[0].password == password){
        localStorage.setItem("UserId",jsondata[0].id)
        alert("Successfully")
      }
      else{
        seterr(true)
      }
      
    } catch (error) {
      
    }
  }
  return(
    <form onSubmit={onLogin}>
      <label>Email: </label>
      <input type="email" placeholder="Enter your Email " onChange={()=>setemail(event.target.value)}/ > <br/> <br/>
      <label>password: </label>
      <input type="password" placeholder="Enter your password " onChange={()=>setpassword(event.target.value)}/ > <br/> <br/>
      { err && <p style={{color:"red"}}>Invaild Details</p>}
      <button type="submit">Login</button>
    </form>
  )
}
export default Login;