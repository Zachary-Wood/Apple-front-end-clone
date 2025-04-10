import React from 'react';
import Image from 'next/image';

import '../animation.css';


const images = [
  "/images/golf.jpg",
  "/images/podcast.jpg",
  "/images/fitness.jpg",
  "/images/forrest.jpg",
  "/images/ai.jpg",
  "/images/arcade.jpg",
];

const SlidingCarousel = () => {
  return (
    <div className="mt-10 w-full overflow-hidden relative">
      <div className="flex animate-slide">
    
        {images.map((image, index) => (
          <div key={index} className="w-1/3 p-2 flex-shrink-0">
            <Image
              src={image}
              alt={`carousel-item-${index}`}
              className="object-cover w-full h-[250px]"
              width={500}
              height={500}
            />
          </div>
        ))}

       
        {images.map((image, index) => (
          <div key={`repeat-${index}`} className="w-1/4 p-2 flex-shrink-0">
            <Image
              src={image}
              alt={`carousel-item-${index}`}
              className="object-cover w-full h-[300px]"
              width={500}
              height={500}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidingCarousel;



