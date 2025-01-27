import React from "react";
import { Link } from "react-router-dom";
import "./Components/styles/logs.css"

const Home = () => {
    return ( 
        <div className="home">
         <img className="image" src={`${process.env.PUBLIC_URL}/photo.jpeg`} alt="" />
         <h1>Welcome to <br />Expense Tracker, Money Manager &Budget</h1>
            <p>Track your expenses to control your money</p>
          <Link to="/login" className="start-btn">Get Started</Link>
        </div>
     );
}
 
export default Home
