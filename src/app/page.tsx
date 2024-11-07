import Service from "./components/services";
import OurProducts from "./products/page";
import Link from 'next/link';

function Home() {
  return ( 
    <>
    <>
      <div className="flex-col lg:flex-row items-center justify-center bg-cover bg-[url('/home.png')] bg-center h-[600px] border-2 border-gray-300 hidden md:block font-serif text-gray-800 animate-fadeInLeft">
        <div className="text-center font-bold text-4xl mt-10 font-serif text-black">
          <span className="bg-[#FFF8DE] text-6xl ">
            Expert Solar 
          </span> <br />
          <span className="mt-8 bg-[#D0E8C5] text-5xl leading-normal"> 
            Services  
          </span> <br />
          <span>for a <br />Sustainable Future </span>
        </div>
        <p className="mt-3 text-center ml-80 mr-80 text-1xl font-serif">
          We offer reliable solar solutions, from installation to maintenance, helping you save energy and reduce your carbon footprint. Power your future with sustainable, efficient solar energy.
        </p>
        {/* Button to Explore Products */}
        <div className="flex justify-center mt-6">
          <Link href="/services" className="bg-[#D0E8C5] text-gray-800 py-2 px-8 rounded-lg text-xl hover:bg-[#C0D8A5] transition-all">
            Explore our Services
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-cover bg-[url('/home.png')] bg-center h-auto w-full border-2 border-gray-300 lg:hidden md:hidden">
        <div className="text-center font-bold mt-10 font-serif px-4 text-black">
          <span className="bg-[#FFF8DE] text-6xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Expert Solar
          </span>
          <br />
          <span className="mt-8 bg-[#D0E8C5] text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-normal">
            Services
          </span>
          <br />
          <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            for a <br /> Sustainable Future
          </span>
        </div>
        <p className="mt-3 text-center mx-4 text-sm sm:text-base md:text-lg lg:text-xl font-serif mb-32 text-black">
          We offer reliable solar solutions, from installation to maintenance, helping you save energy and reduce your carbon footprint. Power your future with sustainable, efficient solar energy.
        </p>
        {/* Button to Explore Products */}
        <div className="flex justify-center mt-6">
          <Link href="/services" className="bg-[#D0E8C5] text-gray-800 py-2 px-8 rounded-lg text-xl hover:bg-[#C0D8A5] transition-all mb-10">
            Explore our Services
          </Link>
        </div>
      </div>
      <Service />
      

      
    </>
   
    </>
    
  );
}

export default Home;
