import React from 'react'
import { FaApple } from "react-icons/fa"; 

function Applewatch() {
  return (
    <div className="mt-[10px] bg-[url('/images/applewatch.jpg')] bg-cover bg-center lg:h-[700px] md:h-[700px] sm:h-[500px] w-full p-0 m-0">
      <div className="text-center text-black pt-10">
            <div className='flex items-center justify-center'>
                <FaApple className="text-5xl mb-1.5" />
                <h1 className="text-5xl font-bold">WATCH</h1>
            </div>
        <h3 className="text-2xl mt-3">Live healthier. Train better. Stay connected.</h3>
        <div className="mt-6">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-full mr-4 cursor-pointer">Learn More</button>
          <button className="bg-none border-2 border-blue-500 text-blue-500 py-2 px-6 rounded-full cursor-pointer">Shop Watch</button>
        </div>
      </div>
    </div>
  )
}

export default Applewatch