import Image from 'next/image'
import React from 'react'
import {FaSearch, FaShoppingBasket, FaUser} from 'react-icons/fa'
import MobileNav from './MobileNav'

const Nav = () => {
  return (
    <nav className='py-4'>
        {/* desktop nav */}
        <div className='container items-center hidden mx-auto lg:flex justify-evenly'>
            <div className='flex items-center'>
                <Image src={"/sunny-logo.png"} width={96} height={32} alt="Logo"/>
            </div>
            <ul className='flex items-center gap-6 text-[17px]'>
                <li className="p-1 hover:border-b-[1.5px] hover:border-b-black">
                    <a href="/">home</a></li>
                <li className="p-1 hover:border-b-[1.5px] hover:border-b-black"><a href="/#about">about us</a></li>
                <li className="p-1 hover:border-b-[1.5px] hover:border-b-black"><a href="/">products</a></li>
                <li className="p-1 hover:border-b-[1.5px] hover:border-b-black"><a href="/">faqs</a></li>
                <li className="p-1 hover:border-b-[1.5px] hover:border-b-black"><a href="/">contact us</a></li>
            </ul>
            <ul className='flex items-center gap-6 text-[17px]'>
                <li>
                    <FaSearch/>
                </li>
                <li>
                    <a href="/">
                        <FaShoppingBasket/>
                    </a>
                </li>
                <li>
                    <FaUser/>
                </li>
            </ul>
        </div>
        
        {/* Mobile nav */}
        <div>
            <MobileNav />
        </div>
    </nav>
  )
}

export default Nav