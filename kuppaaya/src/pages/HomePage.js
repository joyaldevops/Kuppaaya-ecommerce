import React, { useState, useEffect } from 'react';
import { useTrail, animated } from 'react-spring';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BgTexture from '../assets/website/bg.jpg';
import Bwomen from '../assets/website/yellow.png';
import Bbag from '../assets/website/bag.png';
import Bchear from '../assets/website/chear.png';
import Footer from '../pages/Footer';
import Bwomenz from '../assets/website/womenzz.png';
import Bstand from '../assets/website/stand.png';
import Bblack from '../assets/website/black.png';
import Byellow from '../assets/website/yellow.png';
import Bbla from '../assets/website/bla.png';
import Bgimg from '../assets/website/img.jpg';

import Navbar from '../pages/Navbar'

const BackgroundSection = () => {
  const [toggle, setToggle] = useState(false);
  
  useEffect(() => {
    setToggle(true);
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const items = ["U", "N", "L", "O", "C", "K"];
  const config = { mass: 4, tension: 3000, friction: 200 };

  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      
      <div 
        className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center"
        style={{ backgroundImage: `url(${BgTexture})` }}
      >
        <div className="p-4 sm:p-8 md:p-12 lg:p-16">
          <div 
            className="flex transform transition-transform duration-1000 ease-out"
            data-aos="fade-left"
          >
            {trail.map(({ x, height, ...rest }, index) => (
              <animated.div
                key={items[index]}
                className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-none"
                style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}
              >
                <animated.div style={{ height }}>{items[index]}</animated.div>
              </animated.div>
            ))}
          </div>
          <p 
            className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light italic tracking-wide mt-2 transform transition-transform duration-1000 ease-out"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Your Style
          </p>
        </div>
      </div>

      <div className="bg-white py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* New Arrivals */}
            <div className="bg-yellow-400 p-4 ">
              <img src={Bwomen} alt="" className="w-full h-48 object-cover mb-4 rounded"/>
              <h2 className="text-xl font-bold mb-2">New Arrivals</h2>
              <p className="mb-4">There are many variations of clothes available</p>
              <button className="border-2 border-black text-black px-4 py-2 rounded hover:bg-black hover:text-yellow-400 transition duration-300">Shop Now</button>
            </div>

            {/* Exclusive Bags */}
            <div className="bg-pink-200 p-4 ">
              <img src={Bbag} alt="" className="w-full h-48 object-cover mb-4 rounded"/>
              <h2 className="text-xl font-bold mb-2">Exclusive Bags</h2>
              <p className="mb-4">There are many variations of bags available</p>
              <button className="border-2 border-black text-black px-4 py-2 rounded hover:bg-black hover:text-pink-200 transition duration-300">Shop Now</button>
            </div>

            {/* Top Selling Shoes */}
            <div className="bg-pink-200 p-4 ">
              <img src={Bchear} alt="" className="w-full h-48 object-cover mb-4 rounded"/>
              <h2 className="text-xl font-bold mb-2">Top Selling Shoes</h2>
              <p className="mb-4">There are many variations of shoes available</p>
              <button className="border-2 border-black text-black px-4 py-2 rounded hover:bg-black hover:text-pink-200 transition duration-300">Shop Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#666666] py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left column: Image */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <img 
                src={Bwomenz} 
                alt="Woman in stylish outfit" 
                className="w-full h-auto rounded-lg relative lg:top-[64px]"
              />
            </div>
            
            {/* Right column: Text */}
            <div className="w-full lg:w-1/2 lg:pl-8 text-center lg:text-left">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                LETS CREATE YOUR
                <span className="block italic font-normal">Own Style</span>
              </h1>
              <p className="text-white text-base sm:text-lg mb-6 max-w-md mx-auto lg:mx-0">
                Dress the part, resize the spotlight. Elevate your style
                with our latest collection - Where fashion
                meets experience.
              </p>
              <button className="bg-red-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-red-600 transition duration-300">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* New Arrival Section */}
      <div className="bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">NEW ARRIVAL</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {/* Product 1 */}
            <div className="bg-pink-200 rounded-lg overflow-hidden flex flex-col">
              <div className="overflow-hidden">
                <img src={Bbla} alt="Product 1" className="w-full h-auto" />
              </div>
            </div>
            {/* Product 2 */}
            <div className="bg-blue-200 rounded-lg overflow-hidden flex flex-col">
              <div className="overflow-hidden">
                <img src={Bstand} alt="Product 2" className="w-full h-auto " />
              </div>
            </div>
            {/* Product 3 */}
            <div className="bg-gray-700 rounded-lg overflow-hidden flex flex-col">
              <div className="overflow-hidden">
                <img src={Bblack} alt="Product 3" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Product 4 */}
            <div className="bg-yellow-200 rounded-lg overflow-hidden flex flex-col">
              <div className="h-96 overflow-hidden pt-6">
                <img src={Byellow} alt="Product 4" className="w-full h-full object-cover flex mr-20 " />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div 
        className="min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-start"
        style={{ backgroundImage: `url(${Bgimg})` }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4">
              BEAUTIFUL SHORT
            </h1>
            <p className="text-white text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6">
              Elegant in every detail and carefully crafted to last a lifetime of cherished moments.
            </p>
            <button className="bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-semibold hover:bg-red-700 transition duration-300 w-full sm:w-auto">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BackgroundSection;