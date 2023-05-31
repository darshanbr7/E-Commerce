import React from "react";
import NavbarEx from "./Home/Navbar/Navbar";
import Home from "./Home/Home"
import Product from "./Home/Product/Product"
import Login from "./Home/Login/Login";
import About from "./Home/About/About"
import {BrowserRouter, Routes,Route } from "react-router-dom";
let App=()=>{
    return(<>
    <BrowserRouter>
    <NavbarEx />
<Routes>

  <Route path="/" element={<Home/>}/>
  <Route path="/product" element={<Product/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/login" element={<Login/>}/>
</Routes>
 
  </BrowserRouter>
    </>)
}
export default App