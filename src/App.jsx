import React from "react";
// import Menu from "./Menu";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
// import Contact from './Contact'

import Home from "./Home";
import Navbar from "./Navbar";
import { Axios } from "axios";
import Todos from "./Contact";
import About from "./About";
import CombinesInput from './combinesInput'




const App = () => {

return(
    <>
    
  {/* <Navbar/> */}
  <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Todos/>}/>
          <Route path="/user" element={<Home/>}/>
          <Route path="/post" element={<About/>}/>
          <Route path="/inputs" element={<CombinesInput/>}/>
        </Routes>
        </BrowserRouter>
    </>
);

};
export default App;

   