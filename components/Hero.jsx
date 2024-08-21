import React from 'react'
import { Abhaya_Libre } from 'next/font/google';
import { FaPlayCircle } from 'react-icons/fa';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

const abhaya = Abhaya_Libre({ subsets:[ "latin" ], weight: ["400", "500", "600","800"]})

const Hero = () => {
  return (
    <section className=' h-[100vh] w-full flex items-center bg-hero-pattern p-1 '>
        {/* <div className='absolute flex items-center justify-center bg-hero-pattern'><img src="/assets/Vector 632.png" alt="hero-pattern"/></div> */}
        <div className='container w-full p-2 mx-auto'>
            <div className='flex items-center justify-center w-full '>
                <div className='flex flex-col lg:w-[40%] justify-center '>
                    <div className='bg-[#fcc7c3] w-[242px] h-[36px] flex  items-center rounded-full  pl-3 justify-between'>
                        <p className='text-[#524439] text-[13px] leading-[16px] pl-1'>Free delivery worldwide</p>
                        <img src="/assets/delivery-man.png" alt="delivery-bike" width={45} height={45}/>
                    </div>
                    <div>
                    <h1 className={`${abhaya.className}`}>Foundation Matte & Poreless</h1>
                    <p className='text-[#999999] text-[20px] leading-[34px]'>Maybelline's #1 foundation perfect for oily skin. No stickiness, no shine</p></div>
                    <div className='flex items-center gap-6 pt-3'>
                        <button className='bg-gradient-to-b from-[#b91122] to-[#d65b66] text-[#fff] w-[158px] h-[55px] rounded-xl '>Add to cart</button>
                        <a href="/" >
                            <FaPlayCircle className="text-[#d65b66]"/>
                        </a>
                        <p>How it Works</p>
                    </div>
                </div>
                <div className='lg:w-[60%] lg:flex items-center gap-5 px-4'>
                    <div>
                        <Image src={"/assets/mockup products.png"} width={510} height={561} alt="product-image"/>
                    </div>
                    <div className='bg-[#fff8ef] h-[344px] w-[275px] p-4 rounded-2xl'>
                        <p className='text-[#999999] text-[20px] leading-[24px]'>Details</p>
                        <p className={`text-[38px] leading-[40px] ${abhaya.className} pb-16`}>$100.45</p>
                        <p className={`${abhaya.className} text-[18px] leading-[24px]`}>30ml</p>
                        <p> &#9733; &#9733; &#9733; &#9733; &#9734;</p>
                        
                        <div className='flex justify-center w-full mt-7'>
                            <button className='border rounded-l-full border-[#392529] bg-[#f5eede] p-4'>
                           <FaChevronLeft/>
                            </button>
                            <button className='rounded-r-full border border-[#392529] bg-[#f5eede] p-4'>
                           <FaChevronRight/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero