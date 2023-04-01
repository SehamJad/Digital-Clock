import React, { useState, useEffect } from "react";
import Clock from "./Clock";
import "./App.css";

function App() {
  //the state in the app
  const [time, setTime] = useState(new Date().toLocaleTimeString()); //Hooks
  useEffect(() => {
    //save an Id for the Interval
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalId); //then close the interval
  }, []);

  //JSX
  return (
    <div className="clockk">
      <div>
        <Clock time={time} />
      </div>
    </div>
  );
}
export default App; //retunerar time
