import React from "react";
import "./App.css";
import Profil from "./page/Profil";
import Login from "./page/Login/Login";
import Register from "./page/Register/Register";
// import Home from "./page/Home";
import { Route, Routes }  from "react-router-dom"
function App() {
  return (
    <>
      {/* <Home /> */}
     {/*<Profil/> */}
     <Login/>
     {/*<Register/>*/}
      
    </>
  );
}

export default App;
