// Carousel.js
import React, { useEffect, useState } from "react";
import img1 from "../images/a10.jpg";
import img2 from "../images/a9.jpg";
import img3 from "../images/diu.jpg";
import img4 from "../images/school1.webp";
import "./Carousel.css";

const images = [img1, img2, img3, img4];

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 3/4 second (750 milliseconds)

    return () => {
      clearInterval(interval);
    };
  }, [activeIndex]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="carousel">
      <button className="prev-button" onClick={prevSlide}>
        &#8249;
      </button>
      <div className="image-container_caresol">
        <img
          src={images[activeIndex]}
          alt={`Slide ${activeIndex + 1}`}
          className="carousel-image"
        />
      </div>
      <button className="next-button" onClick={nextSlide}>
        &#8250;
      </button>
    </div>
  );
}

export default Carousel;
