import { IoBagOutline } from "react-icons/io5";
import { FaApple, FaSearch } from "react-icons/fa"; 

export const Navbar = () => {
  return (
    <div className="fixed top-0 w-full bg-[rgba(0,0,0,0.8)] z-50">
      <div className="flex flex-row justify-between items-center gap-4 sm:gap-6 md:gap-8 lg:gap-8 mx-auto cursor-pointer text-xs w-3/5 p-4">
        <FaApple className="text-lg text-white" />
        <p>Store</p>
        <p>Mac</p>
        <p>iPad</p>
        <p>iPhone</p>
        <p>Watch</p>
        <p>Vision</p>
        <p>AirPods</p>
        <p>TV & Home</p>
        <p>Entertainment</p>
        <p>Accessories</p>
        <p>Support</p>
        <FaSearch className="text-lg text-white" />
        <IoBagOutline className="text-lg text-white" />
      </div>
    </div>
  );
};

