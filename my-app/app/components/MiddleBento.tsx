

function MiddleBento() {
  return (
    <div className="grid grid-cols-2 gap-3 w-full p-3 pt-0 pb-0">



<div className=" bg-[url('/images/Ipadair.jpg')] w-45% h-150 bg-cover bg-center flex flex-col items-center pt-10">
                <h1 className="text-black text-4xl font-bold">iPad Air</h1>
                <p className="text-black text-xl">Now super charged by the M3 chip</p>
                <div className="pt-5">
                    <button className="bg-blue-500 text-white py-2 px-6 rounded-full mr-4 cursor-pointer">Learn More</button>
                    <button className="bg-none border-2 border-blue-500 text-blue-500 py-2 px-6 rounded-full cursor-pointer">Buy</button>
                </div>


                <p className="pt-90 text-transparent bg-clip-text bg-gradient-to-r from-[#ff5fc8] via-[#6a5cff] to-[#00c3ff] font-semibold text-md">
                    Built for Apple Intelligence
                </p>

        </div>
        
        <div className="bg-[url('/images/airpods.jpg')] w-45% h-150 bg-cover bg-center flex flex-col items-center justify-center pb-15">
            <p className="pt-100 text-white text-4xl font-bold text-center">AirPods pro 2 </p>
            <p className="text-white text-xl text-center">Now with a Hearing Aid feature.</p>
            <div className="pt-5">
                    <button className="bg-blue-500 text-white py-2 px-6 rounded-full mr-4 cursor-pointer">Learn More</button>
                    <button className="bg-none border-2 border-blue-500 text-blue-500 py-2 px-6 rounded-full cursor-pointer">Buy</button>
                </div>


        </div>


       



    </div>
  )
}

export default MiddleBento