import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';



const Logo = () => {
  return (
    <div className='logo ma3 pa2'>
      <Tilt
        className="tilt ma3 br3 shadow-2"
        tiltMaxAngleX={30}
        tiltMaxAngleY={30}
        perspective={1000}
        transitionSpeed={1000}
        scale={1.1}
        gyroscope={true}
      >
        <div className="pa3"
          style={{ 
            width: '125px',
            height: '125px',
          }}
        >
          <img style={{width: '100%'}} alt='brain' src={brain}/>
        </div>
      </Tilt>
    </div>
    
  );
};


export default Logo;