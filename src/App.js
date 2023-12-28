import React, { useState } from "react";
import "./App.css";


function App() {
  const [count, setCount] = useState(0);
  const [activeButton, setActiveButton] = useState(null);

  const handleIncrease = () => {
    setCount(count + 1);
    setActiveButton('increase');
  };

  const handleDecrease = () => {
    setCount(count - 1);
    setActiveButton('decrease');
  };

  const handleReset = () => {
    setCount(0);
    setActiveButton('reset');
  };

  return (
    <div className="App">
      <h1 className="title">✯ Let's Count ✯</h1>
      <h2 className="count">{count}</h2>
      <div className="button-container">
        <button
          className={`button ${activeButton === 'increase' ? 'active' : ''}`}
          onClick={handleIncrease}
        >
          Increase
        </button>
        <button
          className={`button ${activeButton === 'decrease' ? 'active' : ''}`}
          onClick={handleDecrease}
        >
          Decrease
        </button>
        <button
          className={`button ${activeButton === 'reset' ? 'active' : ''}`}
          onClick={handleReset}
        >
          Set to Zero
        </button>
      </div>
    </div>
  );
}

export default App;
