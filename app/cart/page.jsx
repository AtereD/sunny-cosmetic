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
      <div className="w-full h-full px-5 py-24">
        <div className="container mx-auto">
          <div className="flex items-center justify-between max-w-[500px] bg-[#808ba5] p-7 rounded-3xl w-full">
            <div className="flex items-center ">
              <Image
                src={"/assets/Foundation.png"}
                width={150}
                height={150}
                alt="product image"
              />
              <div className="flex flex-col  gap-4 text-[#fff]">
                <p>Foundation</p>
                <p>$150.00</p>
                <p></p>
              </div>
            </div>
            <div className="gap-2 lg:flex">
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
