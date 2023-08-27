import React from 'react'
import './css.css'
import Register from "../Register/Register";
import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <>
    <div className ="title">
        <h1>Login</h1>
    </div>
        <form action="">
            <div className="item-container">
       
                <div className="little-title">
                    <h2>Sign In Your Account</h2>
                </div>
                <div className="input-container">
                    <input type="text"  name="Username" placeholder="Username"/>
                    <input type="password" name="password" id="password" placeholder="Password"/>
                 
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
