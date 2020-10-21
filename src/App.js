import React, {useState} from 'react';
import './App.css';


function App() {

  const [minVal, setMinVal] = useState()
  const [maxVal, setMaxVal] = useState()
  const [randNo, setRandNo] = useState()

  const genRandNum = () => {
    setRandNo(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal))
  }

  return (
    <div className="hero">
      <div className="container">
        <div className="randomNum">
          <p>Random Number Generated: <span> {randNo} </span></p>
        </div>
        <div className="numContainer">
          <div>
            <p>Min:</p>
            <input type="number" value = {minVal} onChange = {e => setMinVal(+e.target.value)}/>
          </div>
          <div>
            <p>Max:</p>
            <input type="number" value = {maxVal} onChange = {e => setMaxVal(+e.target.value)}/>
          </div>
        </div>
        <div>
          <button onClick = {genRandNum} >Generate Random Number!</button>
        </div>
      </div>
    </div>
  );
}

export default App;
