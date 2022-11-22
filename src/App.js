import React from "react";
import { useState } from "react";
import "./style.css";
import TrackerComponent from "./TrackerComponent"

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
      </div>

      <div className='right-div'>
        {/* <div>

        
        </div> */}
      </div>
    </div>
  );
}
