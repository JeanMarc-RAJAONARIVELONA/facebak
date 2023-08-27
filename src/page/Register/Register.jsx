import React from 'react'
import './register.css'
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function Register() {
  
  const iconStyle = {
    color: '#34b7f1',
};
  return (
    <>
    <div className="title">
            <h1>Facebak</h1>
        </div>

           <form action="">
            <div className ="item-container">
                <div className="little-title">
                    <h2>
                      
                        Create Your Account</h2>
                        
                </div>
                <div className="input-container">
                    <input type="text"  name="Username" placeholder="Lastname"/>
                    <input type="password" name="password" id="password" placeholder="Firstname"/>
                    <input type="password" name="password" id="password" placeholder="Password"/>
                    <input type="password" name="password" id="password" placeholder="Confirm Password"/>
                 
                   
                  <button className="btn">Create</button>
    
                  <div className='Back'>
                      <Link to="/" className='back-login'><ArrowBackIcon style={iconStyle}/>Back to login</Link>
                  </div>
                </div>
            
               
            </div>
           </form>
    
    </>
  )
}
