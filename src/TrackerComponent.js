import React from 'react';
import "./TrackerComponent.css";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function TrackerComponent() {
  const [count, setCount] = useState(0);

  function countUp() {
    setCount(count + 1);
  };

  function countDown() {
    if (count <= 0) {
      return 0;
    }
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
          <Button 
            variant="primary" 
            onClick={countDown}
            size="sm"
            >▼ 1</Button>{' '} 
          <Button 
            variant="primary" 
            onClick={countUp}
            size="sm">▲ 1</Button>
        </div>  
      </div>

      <div className='tracker-right-div'>
        <div className='edit-button-div'>
          <Button
            variant="dark"
            size="sm"
            style={{ width: '120px', margin: '1px' }} 
          >Edit Habit</Button>
        </div>

        <div className='delete-button-div'>
          <Button
            variant="danger"
            size="sm"
            style={{ width: '120px', margin: '1px' }} 
          >Delete Habit</Button>
        </div>
      </div>
    </div>
  )
}