import Image from 'next/image'
import React from 'react'
import { Abhaya_Libre } from 'next/font/google'


const abhaya = Abhaya_Libre({subsets:["latin"], weight:["400", "500", "600", "700", "800"]})

const CTA = () => {
  return (
    <section className='w-full h-full'>
        <div className='container p-0 mx-auto'>
            <div className='w-full h-[280px] bg-[#7ccde1] rounded-xl relative p-7 flex items-center'>
                <div className='md:max-w-[600px] max-w-[500px] py-2 md:py-0'>
                    <h3 className={`${abhaya.className} md:text-[40px] text-[#00566b] md:leading-[50px] font-bold text-[20px] `}>Enough talk, let's make you <br/>look beautiful</h3>
                    <p className='md:text-[16px] text-[#ffffff] md:leading-[28px] tracking-[1%] text-[14px] max-w-[300px] md:max-w-[600px]'>There are many variations of passages of lorem ipsum available, but the Lorem ipsum dolor sit amet.</p>
                    <div className='mt-4'>
                    <button className='bg-[#fff] text-[#071440] text-[16px] rounded-lg px-2 py-3 hover:bg-[#071440] hover:text-white'>Get started</button>
                </div>
                </div>
                <div className='absolute md:left-[80%] left-[90%] pr-2 md:pr-0'>
                    <Image src={"/assets/cta-mockup-img.png"} width={109} height={348} alt="cta-product-image" className='w-[150px] md:w-[109px]'/>
                </div>
                
               
            </div>
        </div>
    </section>
  )
}

export default CTA