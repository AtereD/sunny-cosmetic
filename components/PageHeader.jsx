"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaSearch, FaUser, FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCart } from "./CartContext";

const PageHeader = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header>
      <nav className="p-4">
        {/* Desktop */}
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

        {/* Mobile */}
        <div className="lg:hidden">
          <div className="flex justify-between">
            <div>
              <Image
                src={"/sunny-logo.png"}
                width={70}
                height={32}
                alt="Logo"
              />
            </div>

            <div className="flex items-center gap-6">
              <div>
                <ul className="flex items-center gap-3 text-[17px]">
                  <li>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
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
              <FaBars onClick={handleNav} />
            </div>
          </div>

          <div
            className={
              nav
                ? "lg:hidden fixed top-0 left-0 w-full h-screen bg-black/70"
                : ""
            }
          >
            <div
              className={
                nav
                  ? "lg:hidden fixed top-0 right-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 ease-in duration-500 overflow-y-auto bg-[#fff]"
                  : "fixed top-0 right-[-500%] p-10 ease-in duration-500 "
              }
            >
              <div className="flex flex-col gap-10">
                <div className="flex items-center justify-between w-full">
                  <div className={`logo dark:flex hidden`}>
                    <Image
                      src={"/sunny-logo.png"}
                      alt="logo"
                      width={50}
                      height={50}
                      className="logo"
                    />
                  </div>
                  <FaX onClick={handleNav} />
                </div>
                <div>
                  <ul className="flex flex-col gap-5">
                    <li className="p-1 hover:underline">
                      <a href="/">home</a>
                    </li>
                    <li className="p-1 hover:underline">
                      <a href="/about">about us</a>
                    </li>
                    <li className="p-1 hover:underline">
                      <a href="#faq">faq</a>
                    </li>
                    <li className="p-1 hover:underline">
                      <a href="#footer">contact us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default PageHeader;
