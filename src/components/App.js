import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const [counter, setCounter] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      if (counter === 0) {
        setCounter(0);
      }
      if (counter !== 0) {
        setCounter(counter - 1);
      }
    }, 1000);

    return () => {
      clearInterval(i);
    };
  }, [counter]);

  var changeCounter = (e) => {
    if (e.key === "Enter") {
      if (isNaN(e.target.value)) {
        setCounter(0);
      } else {
        setCounter(parseInt(e.target.value));
      }
    }
  };

const App = () => {
  // write your code here 

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={changeCounter} /> sec.
        </h1>
      </div>
      <div id="current-time">{counter}</div>
    </div>
  )
}


export default App;
