import React, { useState } from 'react';
import './Carousel.css';

function Carousel({ images, imageLinks }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="nav-button">‹</button>

      <a href={imageLinks[current]} target="_blank" rel="noopener noreferrer">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="carousel-image"
        />
      </a>

      <button onClick={nextSlide} className="nav-button">›</button>
    </div>
  );
}

export default Carousel;