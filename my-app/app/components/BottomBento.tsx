import { FaApple } from "react-icons/fa"; 

function BottomBento() {
  return (
    <div className="grid grid-cols-2 gap-3 w-full p-3 pt-0 pb-0">

        <div className="mt-[10] bg-[url('/images/promo.jpg')] w-45% h-150 bg-cover bg-center flex flex-col items-center pt-10">
        <       div className="flex items-center justify-center">
                    <FaApple className="text-4xl mb-1 text-black" />
                    <h1 className="text-black text-4xl font-bold">Trade in</h1>
                </div>
                <p className="text-black text-xl">Get $170-$630 in credit when you</p>
                <p className="text-black text-xl">trade in iPhone 12 or higher.</p>
                <div className="pt-5">
                    <button className="bg-blue-500 text-white py-2 px-6 rounded-full mr-4 cursor-pointer">Get your estimate</button>

                </div>



        </div>


        <div className="mt-[10] bg-[url('/images/applecard.jpg')] w-45% h-150 bg-cover bg-center flex flex-col items-center pt-10">
                <div className="flex items-center justify-center">
                    <FaApple className="text-4xl mb-1 text-black" />
                    <h1 className="text-black text-4xl font-bold">Card</h1>
                </div>
            
                <p className="text-black text-xl">Get up to 3% Daily Cash back</p>
                <p className="text-black text-xl">with every purchase</p>
                <div className="pt-5">
                    <button className="bg-blue-500 text-white py-2 px-6 rounded-full mr-4 cursor-pointer">Learn More</button>
                    <button className="bg-none border-2 border-blue-500 text-blue-500 py-2 px-6 rounded-full cursor-pointer">Apply now</button>
                </div>



        </div>
    </div>
  )
}

export default BottomBento