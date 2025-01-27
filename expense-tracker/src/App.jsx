import React, { useEffect, useState } from "react";
import { auth } from "./Components/firebase";
import Signup from "./sign";
import Login from "./login";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from "./home";
import Dashboard from "./dashboard";
import Add from "./Components/add";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <Router future={{ v7_startTransition: true }}>
      <div className="App">
        <div className="loggings">
          <Routes>
            <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} /> {/* FIXED */}
            <Route path="/add" element={<Add />} />
          </Routes>
        </div>
      </div>
      <ToastContainer />
    </Router>
  );
}

export default App;
