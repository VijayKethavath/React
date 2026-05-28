import {Link, NavLink } from "react-router-dom";

function Navbar(){
  const style = ({isActive})=>{
    return {
      color:isActive?"red":"green"
    }
  }
  return(
    <nav>
      <NavLink to ="/" style={style}>Home</NavLink> &nbsp;
      <NavLink to ="/about" style={style}>About</NavLink>
    </nav>
  )
}
export default Navbar;