import React from "react";
import "./App.css";
import Profil from "./page/Profil";
import Home from "./page/Home";
import { Routes, Route } from 'react-router-dom';
import Login from "./page/Login/Login";
import Register from "./page/Register/Register";
function App() {
  return (

      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/profil" element={<Profil/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
  );
}

export default App;
