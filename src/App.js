import React from "react";
import "./style.css";
import HabitCard from './HabitCard';

export default function App() {
  
  return (
    <div className='main'>
      <div className='left-div'>
        {/* <div>

        
        </div> */}
      </div>

      <div className='center-div'>
          <HabitCard />
          <HabitCard />
      </div>

      <div className='right-div'>
        {/* <div>

        
        </div> */}
      </div>
    </div>
  );
}
