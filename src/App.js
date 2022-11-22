import React from "react";
import "./style.css";
import TrackerComponent from "./TrackerComponent";
import CardTester from './CardTester';

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
          <CardTester />
      </div>

      <div className='right-div'>
        {/* <div>

        
        </div> */}
      </div>
    </div>
  );
}
