import CTA from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import React from "react";
import { Abhaya_Libre } from "next/font/google";
import FAQ from "@/components/FAQ";

const abhaya = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ProductFoundation = () => {
  return (
    <div className="w-full h-full ">
      <PageHeader />
      <div className="container py-24 mx-auto">
        <div className="items-center justify-center w-full gap-10 p-10 space-y-10 lg:flex lg:space-y-0">
          <Image
            src={"/assets/Foundation.png"}
            width={400}
            height={200}
            alt="product-image"
          />
          <div className="flex flex-col gap-4">
            <h3
              className={`${abhaya.className} text-[#2c3538] text-[50px] leading-[60px] tracking-[-2%] max-w-[500px]`}
            >
              HD Micro Foundation Matifying Liquid
            </h3>
            <p className="text-[16px] text-[#72696a] leading-[28px] max-w-[300px]">
              HD Micro Foundation Matifying Liquid is a micronized and gently
              mattifying foundation with vitamin E for the most natural look. .{" "}
            </p>
            <button className="bg-gradient-to-b from-[#b91122] to-[#d65b66] text-[#fff] w-[158px] h-[55px] rounded-xl hover:bg-gradient-to-t">
              Add to cart
            </button>
          </div>
        </div>

        <FAQ />
        <CTA />
      </div>
    </div>
  );
};

export default ProductFoundation;
