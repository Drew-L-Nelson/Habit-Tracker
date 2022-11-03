import React from "react";
import { useState } from "react";
import "./style.css";
import TrackerComponent from "./TrackerComponent"

const MyButton = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <div>
      <button onClick={handleClick}>
        Clicked {count} times
      </button><br/>
      <button onClick={resetCount}>
        Reset Count
      </button>
    </div>  
  )
}

export default function App() {
  
  return (
    <div className='main'>
      <div className='left-div'>
        {/* <div>

        
        </div> */}
      </div>

      <div className='center-div'>
          <TrackerComponent/>
          <TrackerComponent/>
          <TrackerComponent/>
          <TrackerComponent/>
      </div>

      <div className='right-div'>
        {/* <div>

        
        </div> */}
      </div>
    </div>
  );
}
