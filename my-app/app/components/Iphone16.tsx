import React from 'react';

const Iphone16 = () => {
  return (
    <div className="mt-[40px] bg-[url('/images/iphone16.jpg')] bg-cover bg-center lg:h-[600px] md:h-[600px] sm:h-[400px] w-full p-0 m-0">
      <div className="text-center text-white pt-15">
        <h1 className="text-6xl font-bold">iPhone 16 Pro</h1>
        <h3 className="text-2xl mt-3">Built for Apple Intelligence</h3>
        <div className="mt-6">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-full mr-4">Learn More</button>
          <button className="bg-none border-2 border-blue-500 text-white py-2 px-6 rounded-full">Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Iphone16;
