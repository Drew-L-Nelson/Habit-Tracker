import React from 'react';
import "./TrackerComponent.css";
import { useState } from 'react';

export default function TrackerComponent() {
  const [count, setCount] = useState(0);

  function countUp() {
    setCount(count + 1);
  };

  function countDown() {
    setCount(count - 1);
  };

  return (
    <div className='tracker-component-main'>
      <div className='tracker-left-div'>
        <div className='counter-div'>
          {count}
        </div>
      </div>

      <div className='tracker-center-div'>
        <div className='habit-name-div'>
          Habit name here
        </div>
        <div className='button-div'>
          <button className='countDown' onClick={countDown}>
            ▼ 1
          </button>
          <button className='countUp' onClick={countUp}>
            ▲ 1
          </button> 
        </div>  
      </div>

      <div className='tracker-right-div'>
        <div className='edit-button-div'>
          <button className='edit-button'>
            EDIT
          </button>
        </div>

        <div className='delete-button-div'>
          <button className='delete-button'>
            DELETE
          </button>
        </div>
      </div>
    </div>
  )
}