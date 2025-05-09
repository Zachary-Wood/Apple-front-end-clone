
import { Navbar } from "./components/Navbar";
import Iphone16 from "./components/Iphone16";
import Iphone162 from "./components/Iphone162";
import Applewatch from "./components/Applewatch";
import TopBento from "./components/TopBento";
import MiddleBento from "./components/MiddleBento";
import BottomBento from "./components/BottomBento";
import Carousel from "./components/Carousel";
import SlidingCarousel from "./components/SlidingCarousel";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
   <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white">
        <Navbar />
        <Iphone16 />
        <Iphone162 />
        <Applewatch />
        <TopBento />
        <MiddleBento/>
        <BottomBento />
        <Carousel />
        <SlidingCarousel />
        <Footer/>

   </div>
  );
}
