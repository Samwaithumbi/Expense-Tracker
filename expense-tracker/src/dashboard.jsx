import React from "react";
import "./dashboard.css"
import Time from "./Components/time";
import Add from "./Components/add";
const Dashboard = () => {

    return ( 
      <div className="dashboard">
        <Time />
        <Add/>
      </div>
     );
}
 
export default Dashboard;