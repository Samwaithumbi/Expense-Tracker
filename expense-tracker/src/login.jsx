import React, { useState } from "react";
import "./Components/styles/logs.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./Components/firebase";
import Google from "./Components/signinwithgoogle";
import { signInWithEmailAndPassword } from "firebase/auth";
import {toast} from "react-toastify"

const Logi = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate= useNavigate(); // Use useHistory hook

  const handleSubmit=async(e)=>{
   e.preventDefault();
   try {
    await signInWithEmailAndPassword(auth, email, password)
    console.log("Logged in successfully");
    window.location.href="/dashboard"
    toast.success("You have logged successfully", {
      position:"top-center"
    })
   } catch (error) {
    console.log(error.message);
    toast.error(error.message, {
      position:"bottom-center"
    })
   }
  }

  return (
    <div className="logins">
      <div className="login-container">
        <h2>Login</h2>
        <div className="inputs">
          <form >
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
            <button className="signup-btn" type="submit" onClick={handleSubmit}>Login</button>
          </form>
        </div>
        <p>Forgot password</p>
        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
        <Google/>
      </div>
    
    </div>
  );
};

export default Logi;
