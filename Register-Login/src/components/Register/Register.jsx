import { useState } from "react";

function Register() {
  const[err,seterr]=useState(false)
  const [email, setemail] = useState("");
  const [Username, setusername] = useState("");
  const [Password, setpassword] = useState("");

  const onRegister = async(event) => {
    event.preventDefault();
    try {
      const newuser={Username,email,Password}
      console.log(newuser);

      let data=await fetch(`http://localhost:4000/user?email=${email}`);
      let jsondata = await data.json();

      if(jsondata.length!=0){
         seterr(true)
         return
      }
      seterr(false)


      let res = await fetch("http://localhost:4000/user",{
        method:"POST",
        headers:{
          "content-Type":"application/json"
        },
        body:JSON.stringify(newuser)
        
      })
      if(res.ok){
        alert("Data added successfully");
        console.log(res);
        
      }
      else{
        console.log("Error");
        
      }
      
    } catch (error) {
      console.log(error);
      
    }
    
  };
  return (
    <div>
      <form onSubmit={onRegister}>
        <label>UserName </label>
        <input
          type="name"
          placeholder=" Enter Username"
          onChange={() => setusername(event.target.value)}
        />
        <br />
        <br />
        <label>Email </label>
        <input
          type="email"
          placeholder=" Enter Email"
          onChange={() => setemail(event.target.value)}
        />
        <br />
        <br />
        <label>Password </label>
        <input
          type="password"
          placeholder=" Enter Password"
          onChange={() => setpassword(event.target.value)}
        />
        <br />
        <br />
        {err && <p style={{color:"red"}}>Already exist</p>}
        <button type="submit">SignUp</button>
      </form>
    </div>
  );
}
export default Register;
