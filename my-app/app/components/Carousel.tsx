"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/images/baseball.jpg',
  '/images/friday.jpg',
  '/images/soccer.jpg',
  '/images/movie.jpg',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="w-full h-[600px] overflow-hidden relative shadow-lg mt-[10] p-5">
      <Image
        src={images[currentIndex]}
        alt="carousel"
        className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        width={800}
        height={800}
      />
    </div>
  );
};

export default Carousel;
