import { BrowserRouter,Route,Routes } from "react-router-dom"
import Navbar from "./componet/Navbar";
import Home from "./componet/Home";
import About from "./componet/about";
import Nopage from "./componet/nopage";
import Single from "./componet/single";
function App(){
  return(
   <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element = {<Nopage />}/>
      <Route path="/products/:id" element ={<Single/>}/>
    </Routes>
   </BrowserRouter>
  )
}
export default App;