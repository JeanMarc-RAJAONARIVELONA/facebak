import React, { useEffect, useState } from 'react'
import './register.css'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


export default function Register() {
   const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isMessageVisible, setMessageVisible] = useState(false);

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
      password,
      confirmPassword
    };

    try {
      const response = await axios.post("http://localhost:8080/users", userData);

      if (response.status === 200) {
        console.log("Utilisateur créé avec succès !");
        console.log(response);
         navigate("/");
      }
    } catch (error) {
       console.error("Erreur lors de la création de l'utilisateur :", error);
       setErrorMessage("erreur lors de creation de compte");
    }

  };

  return (
    <>
      <div className="title">
        <h1>Facebak</h1>
      </div>
      <div className={`error-message ${isMessageVisible ? "show-message" : ""}`}>
        {errorMessage}
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="item-container">
          <div className="little-title">
            <h2>Create Your Account</h2> 
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
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Password"
            />

            <input type="submit" className="btn" name="submit" value="Register" />

            <div className="Back">
              <Link to="/" className="back-login">
                Back to login
              </Link>
            </div>
            
          </div>
        </div>
      </form>
    </>
  );
}