"use client"

import React, {useState} from "react";
import { Abhaya_Libre } from "next/font/google";
import { FaPlayCircle } from "react-icons/fa";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useCart } from "./CartContext"; 

const abhaya = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
});

const details = [
  { price: "$100.45", size: "30ml", rating: [4, 1]},
  { price: "$120.00", size: "50ml", rating: [5, 0] },
  // Add more details as needed
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {Array.from({ length: rating[0] }).map((_, index) => (
        <svg key={index} className="w-6 h-6 " viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
      {Array.from({ length: rating[1] }).map((_, index) => (
        <svg key={index} className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
};

const Hero = () => {
  const { addToCart } = useCart();

  const [currentDetailIndex, setCurrentDetailIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentDetailIndex((prevIndex) =>
      prevIndex === 0 ? details.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentDetailIndex((prevIndex) =>
      prevIndex === details.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  return (
    <section className="w-full h-full py-4 bg-no-repeat lg:flex bg-hero-pattern lg:p-1 lg:py-8 lg:bg-contain">
      <div className="container w-full mx-auto">
        <div className="flex flex-col items-center justify-center w-full gap-5 lg:flex-row">
          {/* left section*/}

          <div className="flex flex-col lg:w-[40%] justify-center ">
            <div className="bg-[#fcc7c3] w-[242px] h-[30px] flex  items-center rounded-full  pl-3 justify-between ">
              <p className="text-[#524439] text-[13px] leading-[16px] pl-1">
                Free delivery worldwide
              </p>
              <img
                src="/assets/delivery-man.png"
                alt="delivery-bike"
                width={45}
                height={45}
              />
            </div>
            <div>
              <h1
                className={`${abhaya.className} pt-3 lg:pt-0 text-3xl sm:text-4xl md:text-5xl lg:text-[5rem] font-extrabold`}
              >
                Foundation Matte & Poreless
              </h1>
              <p className="text-[#999999] text-[18px] leading-[34px]">
                Maybelline's #1 foundation perfect for oily skin. No stickiness,
                no shine
              </p>
            </div>
            <div className="flex items-center gap-6 pt-3">
              <button className="bg-gradient-to-b from-[#b91122] to-[#d65b66] text-[#fff] w-[158px] h-[55px] rounded-xl hover:bg-gradient-to-t" onClick={() => addToCart()} >
                Add to cart
              </button>
              <a
                href="https://youtu.be/J9Pwg9_HIFI?si=H_AJU-YJSNwJOfKJ"
                className="p-2 border rounded-full border-[#d65b66] hover:scale-90 ease-out duration-300"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Watch video"
              >
                <FaPlayCircle className="text-[#d65b66]" />
              </a>
              <p>How it Works</p>
            </div>
          </div>

          {/* right section */}

          <div className="md:w-[60%] md:flex items-center gap-4 lg:pr-4 px-4 justify-center ">
            <div>
              <Image
                src={"/assets/mockup products.png"}
                width={610}
                height={561}
                alt="product-image"
                className="w-[610px] lg:w-[710px] md:w-auto"
              />
            </div>
            <div className="bg-[#fff8ef] h-[344px] md:w-[275px] p-4 rounded-2xl">
              <p className="text-[#999999] text-[20px] leading-[24px]">
                Details
              </p>
              <p
                className={`text-[38px] leading-[40px] ${abhaya.className} pb-16`}
              >
                {details[currentDetailIndex].price}
              </p>
              <p className={`${abhaya.className} text-[18px] leading-[24px]`}>
              {details[currentDetailIndex].size}
              </p>
              <StarRating rating={details[currentDetailIndex].rating}/>

              <div className="flex justify-center w-full mt-7">
                <button className="border rounded-l-full border-[#392529] bg-[#f5eede] p-4 hover:scale-95 duration-300 ease-in" aria-label="Previous slide" onClick={handlePrevClick}>
                  <FaChevronLeft />
                </button>
                <button className="rounded-r-full border border-[#392529] bg-[#f5eede] p-4 hover:scale-95 duration-300 ease-in" aria-label="Next slide" onClick={handleNextClick}>
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
