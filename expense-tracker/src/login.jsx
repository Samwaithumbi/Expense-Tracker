import React, { useState } from "react";
import "./logs.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate= useNavigate(); // Use useHistory hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/login', {
        email: email,
        password: password
      });
      if (response.data === 'You are logged in') { 
        navigate('/dashboard');
       } else { 
        setError(response.data);
       }
      // Handle successful login (e.g., redirect or show a success message)
    } catch (error) {
      console.error('Error logging in:', error);
      setError("Error logging in. Please try again.");
    }
  };

  return (
    <div className="logins">
      <div className="login-container">
        <h2>Login</h2>
        <div className="inputs">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="error-message">{error}</p>}
            <button className="signup-btn" type="submit">Login</button>
          </form>
        </div>
        <p>Forgot password</p>
        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
