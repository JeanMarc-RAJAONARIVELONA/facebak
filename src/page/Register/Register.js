import React from 'react'
import './register.css'

export default function Register() {
  return (
    <>
    <div class="title">
            <h1>Facebak</h1>
        </div>

           <form action="">
            <div class="item-container">
                <div class="little-title">
                    <h2>
                      
                        Create Your Account</h2>
                        
                </div>
                <div class="input-container">
                    <input type="text"  name="Username" placeholder="Lastname"/>
                    <input type="password" name="password" id="password" placeholder="Firstname"/>
                    <input type="password" name="password" id="password" placeholder="Password"/>
                    <input type="password" name="password" id="password" placeholder="Confirm Password"/>
                 
                   
                  <button class="btn">Create</button>
                </div>
            
               
            </div>
           </form>
    
    </>
  )
}
