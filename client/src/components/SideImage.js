import React from 'react';
import image1 from '../images/image1.png'; 
import '../styles/SideImage.css';

function SideImage() {
  return (
    <div className="side-image-container">
      <img src={image1} alt="Side Image" />
    </div>
  );
}

export default SideImage;
