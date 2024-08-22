import React, { useState } from 'react'
import Image from 'next/image'
import { Abhaya_Libre } from 'next/font/google'

const abhaya = Abhaya_Libre({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] })

const testimonialsData = [
  {
    image: "/assets/customer1.png",
    title: "Quick and best results. You are the best!",
    content: "“If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. There are many variations of passages of Lorem Ipsum available.”",
    author: "Dragos Gontralu",
    role: "Marketing Manager"
  },
  {
    image: "/assets/customer1.png",
    title: "Amazing experience and support!",
    content: "“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.”",
    author: "Jane Doe",
    role: "Product Designer"
  },
  // Add more testimonials here
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePaginationClick = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section className='w-full h-full py-12'>
      <div className='container px-4 mx-auto'>
        <div className='flex items-center justify-center gap-10 lg:flex-row lg:gap-20'>
          <div className='flex-shrink-0 '>
            <Image src={testimonialsData[currentIndex].image} width={468} height={661} alt="Customer testimonial image" className='w-[100px] lg:w-[468px]' />
          </div>
          <div className='flex flex-col lg:gap-5 max-w-[500px]'>
            <p className='text-[18px] text-[#8a60ff]'>Customer Story</p>
            <h3 className={`${abhaya.className} text-2xl font-extrabold`}>
              {testimonialsData[currentIndex].title}
            </h3>
            <blockquote className='lg:text-[18px] leading-[32px] text-[#4f6b7d]'>
              <p>{testimonialsData[currentIndex].content}</p>
            </blockquote>
            <div className='pt-8'>
              <p className={`${abhaya.className} text-[20px]`}>{testimonialsData[currentIndex].author}</p>
              <p className='text-[18px] text-[#4f6b7d]'>{testimonialsData[currentIndex].role}</p>
              <div className='flex gap-1 pt-3'>
                {testimonialsData.map((_, index) => (
                  <div
                    key={index}
                    className={`w-[12px] h-[12px] rounded-full cursor-pointer ${currentIndex === index ? 'bg-[#8a60ff]' : 'bg-[#f2edff]'}`}
                    onClick={() => handlePaginationClick(index)}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
