

function TopBento() {
  return (
    <div className="grid grid-cols-2 gap-3 w-full p-3 pt-0">
        
        <div className="mt-[10px] bg-[url('/images/wddc.jpg')] w-45% h-150 bg-cover bg-center flex flex-col items-center justify-center">
            <p className="pt-100 text-black text-xl text-center">Apple Worldwide Developers Conference.</p>
            <p className="text-black text-xl text-center">Join us online June 9-13.</p>
            <button className="bg-blue-500 text-white py-2 px-6 rounded-full mr-4 cursor-pointer mt-5"> Learn more </button>


        </div>


        <div className="mt-[10px] bg-[url('/images/macbook.jpg')] w-45% h-150 bg-cover bg-center flex flex-col items-center pt-10">
                <h1 className="text-black text-4xl font-bold">MacBook Air</h1>
                <p className="text-black text-xl">Sky blue color.</p>
                <p className="text-black text-xl">Sky high performance with M4.</p>
                <div className="pt-5">
                    <button className="bg-blue-500 text-white py-2 px-6 rounded-full mr-4 cursor-pointer">Learn More</button>
                    <button className="bg-none border-2 border-blue-500 text-blue-500 py-2 px-6 rounded-full cursor-pointer">Buy</button>
                </div>


                <p className="pt-80 text-transparent bg-clip-text bg-gradient-to-r from-[#ff5fc8] via-[#6a5cff] to-[#00c3ff] font-semibold text-md">
                    Built for Apple Intelligence
                </p>

        </div>



    </div>
  )
}

export default TopBento