import React from "react";
import Signup from "./sign";
import Login from "./login";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./home";
import Dashboard from "./dashboard";
import Add from "./Components/add";

function App() {
  return (
   <Router future={{ v7_startTransition: true }}>
     <div className="App">
         <div className="loggings">
           <Routes >
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
              <Route path="/signup" element={<Signup/>}></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/add" element={<Add />}/>
           </Routes>
         </div>
      </div>
    </Router>
  );
}

export default App;
