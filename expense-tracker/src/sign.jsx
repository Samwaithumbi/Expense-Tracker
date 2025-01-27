import React, { useState } from "react";
import "./Components/styles/logs.css"
import { Link } from "react-router-dom";
import { setDoc,doc} from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth,db } from "./Components/firebase";
import {toast} from "react-toastify"

const Signu = () => {
  const [userName, setUserName]=useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registerStatus, setRegisterStatus]=useState("")
  const [error, setError] = useState("");

  const handleRegister= async(e)=>{
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth,email,password)
      const user=auth.currentUser
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
            email:user.email,
            userName:userName
        })
      }
      console.log("User Registered successfully");
      toast.success("You have registered successfully", {
        position:"top-center",
    })
    } catch (error) {
        console.log(error.message);
        toast.error(error.message, {
            position:"bottom-center",
        })
        
    }
  }


  return (
    <div className="sgn-up">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <div className="inputs">
          <form onSubmit={handleRegister}>
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
            <button className="signup-btn" type="submit" onClick={handleRegister}>Sign Up</button>
          </form>
        </div>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  )
};

export default Signu;
