"use client";
import { useState } from "react";
import { IoBagOutline } from "react-icons/io5";
import { FaApple, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="fixed top-0 w-full bg-[rgba(0,0,0,0.8)] z-50 text-white">
   
      <div className="flex justify-between items-center mx-auto max-w-screen-xl p-4">
        
      
        <FaApple className="text-lg cursor-pointer" />

    
        <div className="hidden md:flex gap-6 text-xs">
          <p className="cursor-pointer">Store</p>
          <p className="cursor-pointer">Mac</p>
          <p className="cursor-pointer">iPad</p>
          <p className="cursor-pointer">iPhone</p>
          <p className="cursor-pointer">Watch</p>
          <p className="cursor-pointer">Vision</p>
          <p className="cursor-pointer">AirPods</p>
          <p className="cursor-pointer">TV & Home</p>
          <p className="cursor-pointer">Entertainment</p>
          <p className="cursor-pointer">Accessories</p>
          <p className="cursor-pointer">Support</p>
        </div>

      
        <div className="flex items-center gap-4">
          <FaSearch className="text-lg cursor-pointer" />
          <IoBagOutline className="text-lg cursor-pointer" />
          <button onClick={toggleMenu} className="md:hidden">
            {menuOpen ? <IoClose className="cursor-pointer text-2xl" /> : <GiHamburgerMenu className="cursor-pointer text-2xl" />}
          </button>
        </div>
      </div>

     
      {menuOpen && (
        <div className="md:hidden bg-[rgba(0,0,0,0.9)] text-white w-full p-6 space-y-4 text-sm">
          <p className="cursor-pointer">Store</p>
          <p className="cursor-pointer">Mac</p>
          <p className="cursor-pointer">iPad</p>
          <p className="cursor-pointer">iPhone</p>
          <p className="cursor-pointer">Watch</p>
          <p className="cursor-pointer">Vision</p>
          <p className="cursor-pointer">AirPods</p>
          <p className="cursor-pointer">TV & Home</p>
          <p className="cursor-pointer">Entertainment</p>
          <p className="cursor-pointer">Accessories</p>
          <p className="cursor-pointer">Support</p>
        </div>
      )}
    </div>
  );
};
