import './ImageLinkForm.css';

import React from "react";


const ImageLinkForm = ({inputForm, detectButtonClick}) => {

  return (
    <div className="">
      <p className="f3">
        {'This magic brain will detect faces in your pictures!'}    
      </p>
      <div className="center">
        <div className="form center pa4 br2 shadow-2">
          <input 
            onChange= { inputForm }
            className="pa2 f4 w-70" 
            type='text' />
          <button 
            onClick = { detectButtonClick }
            className="pa2 f4 w-30 grow link ph4 pv2 dib bg-light-blue"
            > Detect
          </button>
        </div>
      </div>      
    </div>
  );
};

export default ImageLinkForm;