import React from "react";
import { useState, useEffect  } from "react";

const Time = ({userName}) => {
  const now =new Date().toLocaleDateString()
  const [time, setTime]=useState(now)
  const [greetings, setGreetings]=useState("")
  const [currentDate, setCurrentDate] = useState("");

  function updateTime(){
    const newTime=new Date().toLocaleTimeString()
    setTime(newTime)
     
  }
  setInterval(updateTime, 1000)

 useEffect(()=>{
    const nowHours = new Date();
    const hours = nowHours.getHours();
    
     if (hours<12) {
      setGreetings("Good Morning")
     }else if (hours>12 &hours<20) {
        setGreetings("Good Afternoon")
       }else{
        setGreetings("Good Evening")
       }
  
    }, [])

    useEffect(() => { 
      const date = new Date(); 
      const options = { year: 'numeric', month: 'long', day: 'numeric' }; 
      setCurrentDate(date.toLocaleDateString('en-US', options));
   }, []);

  
    return ( 
      <div className="time-container">
        <h1>{greetings} {userName}</h1>
        <h3>{currentDate}</h3>
        <h1>{time}</h1>
      </div>
     );
}
 
export default Time;