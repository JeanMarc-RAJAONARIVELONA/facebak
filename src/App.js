import React from "react";
import "./App.css";
import Profil from "./page/Profil";
import Home from "./page/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path= "/" element={<Home/>}></Route>
       <Route exact path="/Home" element={<Home />}></Route>
       <Route exact path="/Profil" element={<Profil/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
