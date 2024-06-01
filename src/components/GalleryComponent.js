
// GalleryComponent.js
//import React from 'react';
import './GalleryComponent.css';

const GalleryComponent = () => {
  return (
    <div className="gallery">
      <img src={`${process.env.PUBLIC_URL}Screenshot 2024-05-28 185504.png`} alt="many clothes and pictures" />
      <img src={`${process.env.PUBLIC_URL}Screenshot 2024-05-28 185504.png`} alt="someone preparing artisanal coffee" />
      <img src={`${process.env.PUBLIC_URL}Screenshot 2024-05-28 185504.png`} alt="some tee" />
      <img src={`${process.env.PUBLIC_URL}Screenshot 2024-05-28 185504.png`} alt="an empty table in a restaurant" />
      <img src={`${process.env.PUBLIC_URL}Screenshot 2024-05-28 185504.png`} alt="a laptop with a notebook" />
      <img src={`${process.env.PUBLIC_URL}Screenshot 2024-05-28 185504.png`} alt="a laptop and many books around it" />
    </div>
  );
};

export default GalleryComponent;
