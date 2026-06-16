import { useContext } from "react";
import { GiftContext } from "../Context/GiftContext";

function D(){
  const {gift} = useContext(GiftContext) 
  console.log({gift})
  return(
    <>
    <h1>This is D Component</h1>
    <p>I got {gift} from App Component</p>
    </>
  )
}
export default D;
