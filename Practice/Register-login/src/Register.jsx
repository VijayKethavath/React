import { useState } from "react";

function Register(){
  const[username,setusername] = useState("")
  const[email,setemail] = useState("")
  const[password,setpassword] = useState("")
  const[err,seterr] = useState(false)
 
  async function onRegister(event){
    event.preventDefault()



    try {
      const userData ={username,email,password}
      console.log(userData);

      let check = await fetch(`http://localhost:5000/user?email=${email}`);
      let jsondata = await check.json()
      console.log(jsondata);
      
      
      if(jsondata!=0){
        seterr(true)
        return
      }
      seterr(false)

      let res = await fetch("http://localhost:5000/user",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(userData)
      })
      if(res.ok){
        console.log("Added successfully")
        alert("Added successfully")
      }
      else{
        console.log("data not added");
        
      }
      
    } catch (error) {
      console.log(error);
      
    }
  }

  return(
    <form onSubmit={onRegister}>
      <label>Username: </label>
      <input type="text" placeholder="Enter your username" onChange={()=>setusername(event.target.value)}/><br/><br/>
      <label>Email: </label>
      <input type="email" placeholder="Enter your email" onChange={()=>setemail(event.target.value)}/><br/><br/>
      <label>Password: </label>
      <input type="password" placeholder="Enter your password" onChange={()=>setpassword(event.target.value)}/><br/><br/>
      {err && <p style={{color:"red"}}>User Already Exist</p>}
      <button type="submit">Sigin</button>
    </form>
  )
}
export default Register;