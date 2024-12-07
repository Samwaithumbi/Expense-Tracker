import React, { useState } from "react";
import "./logs.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserProvider } from "./usercontext";
import { UserContext } from "./usercontext";

const Signup = () => {
  const [userName, setUserName]=useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registerStatus, setRegisterStatus]=useState("")
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }else{
      setError("")
    }
    try {
      const response = await axios.post('http://localhost:4000/register', {
        email: email,
        password: password,
        userName:userName
      });

      setRegisterStatus(response.data)
    } catch (error) {
      console.error('Error registering:', error);
      setError("Error registering. Please try again.");
    }
  };

  return (
    <UserProvider>
    <div className="sgn-up">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <div className="inputs">
          <form onSubmit={handleSubmit}>
            <input type="text"
             placeholder="Username"
             name="username"
             value={userName}
             onChange={(e)=>setUserName(e.target.value)}
             />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {registerStatus&& <p>{registerStatus}</p>}
            {error && <p className="error-message">{error}</p>}
            <button className="signup-btn" type="submit">Sign Up</button>
          </form>
        </div>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  
  </UserProvider>
  )
};

export default Signup;
