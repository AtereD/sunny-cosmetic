"use client";

import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import FAQ from "@/components/FAQ";

const Carts = () => {
  return (
    <div>
      <PageHeader/>
      <div className="w-full h-full py-24">
        <div className="container mx-auto">
          <div className="flex flex-col items-center w-full px-3 py-5 border md:p-7 rounded-3xl lg:flex-row gap-7 md:max-w-[600px]">
            <div className="flex items-center gap-2">
              <Image
                src={"/assets/Foundation.png"}
                width={150}
                height={150}
                alt="product image" className='w-[80px] lg:w-[150px]'
              />
              <div className="flex flex-col  gap-4 text-[#222]">
                <p>Foundation</p>
                <p>$150.00</p>
                <p></p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 bg-white border border-[#1b1139] rounded hover:scale-90 duration-300 ease-out">
                Purchase
              </button>
              <button className="p-2 bg-[#e05b36] hover:scale-90 duration-300 ease-out text-white rounded">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
      <FAQ/>
      <CTA />
    </div>
  );
};

export default Carts;
