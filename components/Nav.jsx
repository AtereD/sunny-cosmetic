"use client";

import Image from "next/image";
import { React, useState } from "react";
import { FaSearch, FaShoppingBasket, FaUser } from "react-icons/fa";
import MobileNav from "./MobileNav";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCart } from "./CartContext";

const Nav = () => {
  const { cartCount, addToCart } = useCart();

  return (
    <nav className="pt-4 pb-7">
      {/* desktop nav */}
      <div className="container items-center hidden mx-auto lg:flex justify-evenly">
        <div className="flex items-center">
          <Image src={"/sunny-logo.png"} width={96} height={32} alt="Logo" />
        </div>
        <ul className="flex items-center gap-6 text-[17px]">
          <li className="p-1 hover:border-b-[1.5px] hover:border-b-black">
            <a href="/">home</a>
          </li>
          <li className="p-1 hover:border-b-[1.5px] hover:border-b-black">
            <a href="/">about us</a>
          </li>
          <li className="p-1 hover:border-b-[1.5px] hover:border-b-black">
            <a href="#products">products</a>
          </li>
          <li className="p-1 hover:border-b-[1.5px] hover:border-b-black">
            <a href="#faq">faqs</a>
          </li>
          <li className="p-1 hover:border-b-[1.5px] hover:border-b-black">
            <a href="#footer">contact us</a>
          </li>
        </ul>
        <ul className="flex items-center gap-6 text-[17px]">
          <li aria-label="Search">
            <FaSearch />
          </li>
          <li aria-label="Shopping Basket">
            <a href="/cart" className="relative">
              <FaShoppingBasket />
              {cartCount > 0 && (
                <span className="absolute px-2 text-xs text-white bg-red-500 rounded-full -top-3 -right-2">
                  {cartCount}
                </span>
              )}
            </a>
          </li>
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger aria-label="User Menu">
                <FaUser />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </ul>
      </div>

      {/* Mobile nav */}
      <div className="lg:hidden">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Nav;
