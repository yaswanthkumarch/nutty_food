import React, { useState, useEffect } from 'react';
import './carousol.css';
const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '/one.png',
    '/star.png',
    '/image-72@2x.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change the time interval as needed (in milliseconds)

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel-container">
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className="carousel-image"
        style={{ width: '100%', height: '5%',objectFit: 'cover', alignSelf: 'center'  }}
      />
      <div className="carousel-text">
    <p>Just Mix And Cook</p>
  </div>
    </div>
  );
};

export default Carousel;
  
