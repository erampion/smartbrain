import React from "react";
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';

const Logo = () => {
  return (
    <Tilt className="mw2">
      <div 
        style = {
          { width: '200px', 
            height: '200px', 
            backgroundColor: 'darkgreen',
            }
        }>
        <h1>React Parallax Tilt 👀</h1>
      </div>
    </Tilt>
  );
};


export default Logo;