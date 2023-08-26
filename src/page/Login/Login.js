import React from 'react'
import './css.css'
export default function Login() {
  return (
    <>
    <div class="title">
        <h1>Login</h1>
    </div>
        <form action="">
            <div class="item-container">
       
                <div class="little-title">
                    <h2>Sign In Your Account</h2>
                </div>
                <div class="input-container">
                    <input type="text"  name="Username" placeholder="Username"/>
                    <input type="password" name="password" id="password" placeholder="Password"/>
                 
                    <label >Remember me
                        <input type="checkbox" name="remember"/>
                    </label>
                  <button class="btn">Login</button>
                </div>
                <div class="pass-forget">
                    <p class="lost-password">Lost your password ?</p>
                    <p class="register"><a href="./Register/register.html">Registration</a></p>
                </div>
                
            </div>

            </form>
            
    </>
  )
}
