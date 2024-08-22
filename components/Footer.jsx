"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { FaArrowRight, FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  return (
    <footer className="bg-[#f9f9f9] h-full w-full py-24 mt-24" id="footer">
      <div className='container flex flex-col gap-10 mx-auto text-center px-7 lg:flex-row lg:text-left'>
        <div className='flex flex-col items-center gap-5 lg:items-start lg:w-[50%]'>
          <Image src="/sunny-logo.png" width={70} height={32} alt="Sunny Logo" />

          <p className='text-[18px] leading-[32px] text-[#9a9a9a] max-w-[500px]'>
            Look good and beautiful using sunny products.
          </p>

          <div className='flex items-center gap-3'>
            <input
              type='email'
              id='email'
              value={email}
              className='bg-black text-[#9c9c9c] pl-3 md:py-4 placeholder:text-[#9c9c9c] w-full border-[#bead8f] border p-2'
              placeholder='Enter your email'
              onChange={handleEmailChange}
            />
            <button className='text-[#bead8f] p-3 hover:scale-90 duration-300 ease-out'>
              <FaArrowRight className='w-8 h-8 p-2 border md:h-12 md:w-12' />
            </button>
          </div>
        </div>
        <div className='flex flex-col gap-10 lg:flex-row lg:gap-20 lg:w-[50%]'>
          <div className='flex flex-col mb-5 lg:mb-0'>
            <h3 className='md:text-[20px] text-[#222222] text-[16px]'>About</h3>
            <ul>
              <li className='text-[16px] md:text-[18px] text-[#9a9a9a] leading-[38px]'>
                <a href="/">Home</a>
              </li>
              <li className='text-[16px] md:text-[18px] text-[#9a9a9a] leading-[38px]'>
                <a href="/">Features</a>
              </li>
              <li className='text-[16px] md:text-[18px] text-[#9a9a9a] leading-[38px]'>
                <a href="/">FAQs</a>
              </li>
              <li className='text-[16px] md:text-[18px] text-[#9a9a9a] leading-[38px]'>
                <a href="/">Reviews</a>
              </li>
              <li className='text-[16px] md:text-[18px] text-[#9a9a9a] leading-[38px]'>
                <a href="/">Products</a>
              </li>
            </ul>
          </div>
          <div className='flex flex-col mb-5 lg:mb-0'>
            <h3 className='md:text-[20px] text-[#222222] text-[16px]'>Privacy</h3>
            <ul>
              <li className='text-[16px] md:text-[18px] text-[#9a9a9a] leading-[38px]'>
                <a href="/">Privacy</a>
              </li>
              <li className='text-[16px] md:text-[18px] text-[#9a9a9a] leading-[38px]'>
                <a href="/">Policy</a>
              </li>
              <li className='text-[16px] md:text-[18px] text-[#9a9a9a] leading-[38px]'>
                <a href="/">Payments</a>
              </li>
              <li className='text-[16px] md:text-[18px] text-[#9a9a9a] leading-[38px]'>
                <a href="/">Terms</a>
              </li>
            </ul>
          </div>
          <div className='flex flex-col'>
            <h3 className='md:text-[20px] text-[#222222] text-[16px]'>Contact Us</h3>
            <ul className='mb-8'>
              <li className='text-[16px] md:text-[18px] text-[#9a9a9a] leading-[38px]'>+01 234 567 8910</li>
              <li className='text-[16px] md:text-[18px] text-[#9a9a9a] leading-[38px]'>sunny@gmail.com</li>
            </ul>
            <ul className='flex items-center justify-center gap-5'>
              <li className='text-[25px]'>
                <a href="/" aria-label="Instagram">
                  <FaInstagram />
                </a>
              </li>
              <li className='text-[25px]'>
                <a href="/" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className='text-[25px]'>
                <a href="/" aria-label="Facebook">
                  <FaFacebook />
                </a>
              </li>
              <li className='text-[25px]'>
                <a href="/" aria-label="Twitter">
                  <FaTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className='bg-[#edebe8] mx-7 my-14' />
      <div className='container mx-auto text-center'>
        <p className='text-[16px] text-[#9a9a9a]'>&copy; Copyright 2022 sunny.com. All rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
