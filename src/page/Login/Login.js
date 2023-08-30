import React, { useEffect, useState } from 'react'
import './css.css'
import Register from "../Register/Register";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
export default function Login() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isMessageVisible, setMessageVisible] = useState(false);
    const navigate = useNavigate();

  useEffect(() => {
    if (errorMessage) {
      setMessageVisible(true);
      setTimeout(() => {
        setMessageVisible(false);
        setErrorMessage("");
      }, 3000); 
    }
  }, [errorMessage]);


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const userData = {
          username,
          email,
          password
        };
    
        try {
          const response = await axios.post("http://localhost:8080/users/login", userData);
    
          if (response.status === 200) {
           Cookies.set("acces",response.data.token);
           navigate("/home");
          }
        } catch (error) {
           console.error("Erreur lors de la connection de compte :", error);
           setErrorMessage("erreur lors de la connection de compte");
        }
    
      };
  return (
    <>
    <div className ="title">
        <h1>Login</h1>
    </div>
    <div className={`error-message ${isMessageVisible ? "show-message" : ""}`}>
        {errorMessage}
      </div>
        <form onSubmit={handleFormSubmit}>
            <div className="item-container">
       
                <div className="little-title">
                    <h2>Sign In Your Account</h2>
                </div>
                <div className="input-container">
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
             <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
        <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            
                    <label >Remember me
                        <input type="checkbox" name="remember"/>
                    </label>
                  <button className="btn">Login</button>
                </div>
                <div className="pass-forget">
                    <p className="lost-password">Lost your password ?</p>
                    <Link to="/register" className="register">Registration</Link>
                </div>
                
            </div>

            </form>
            
    </>
  )
}
