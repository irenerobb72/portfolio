import art from "../images/color-art.png";
import {  island, moher, grave, cliff, canyon } from "../images/index.js";
import React, { useState } from 'react';

export function Travel() {

  const [image, toggleImage] = useState(false);

  const handleToggle = (event) => {
    event.stopPropagation();
    toggleImage(true);
  }

  return (
    <div className="Travel">
      <div className="main-content">
        <div className="content-container">
          <div className="image-container">
            <div className="main-image one">
              <img src={grave} alt="grave" id="grave-image" />
            </div>   
            <div className="main-image two">
              <img src={cliff} alt="cliff" id="cliff-image" />
            </div>  
            <div className="main-image three">
              <img src={canyon} alt="canyon" id="canyon-image" />
            </div>   
          </div>
          <div className="main-image">
            <img src={grave} alt="grave"/>
          </div>
          <div className="main-text">
            <h1>Ireland</h1>
            <p>
              This is The Burren in County Clare, Ireland. This is a portal tomb called Poulnabrone Dolmen, a tomb from the Neolithic Period. 
            </p>
          </div>     
 
        </div>
      </div>
      <div className="main-content second" >
        <div className="content-container">
          <div className="main-text">
            <h1>Australia</h1>
            <p>
              This is from the 12 apostles in Victoria, Australia
            </p>
          </div>     
          <div className="main-image">
            <img src={cliff} alt="cliff" id="cliff-image" />
          </div>   
        </div>
      </div>
      <div className="main-content" >
        <div className="content-container">
          <div className="main-text">
            <h1>New Zealand</h1>
            <p>
              This is from Fiordland, New Zealand. 
            </p>
          </div>     
          <div className="main-image">
            <img src={canyon} alt="canyon" id="canyon-image" />
          </div>   
        </div>
      </div>
    </div>
  );
}
