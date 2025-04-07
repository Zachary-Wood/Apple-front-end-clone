
import { Navbar } from "./components/Navbar";
import Iphone16 from "./components/Iphone16";
import Iphone162 from "./components/Iphone162";

export default function Home() {
  return (
   <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white">
        <Navbar />
        <Iphone16 />
        <Iphone162 />
   </div>
  );
}
