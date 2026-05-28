import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Nopage from "./components/Nopage";
import Single from "./components/Single";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/products/:id" element={<Single />} />
        <Route path="*" element={<Nopage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
