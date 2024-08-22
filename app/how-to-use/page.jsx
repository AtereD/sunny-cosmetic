import Image from "next/image";
import React from "react";
import { Abhaya_Libre } from "next/font/google";
import FAQ from "@/components/FAQ";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";

const abhaya = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const HowToUse = () => {
  return (
    <div className="w-full h-full ">
      <PageHeader />
      <div className="container px-0 py-24 mx-auto">
        <div className="items-center justify-center w-full gap-10 space-y-10 lg:flex lg:space-y-0 p-7">
          <Image
            src={"/assets/why-mockup.png"}
            width={500}
            height={200}
            alt="product-image"
          />
          <div className="flex flex-col gap-4">
            <h3
              className={`${abhaya.className} text-[#2c3538] text-[50px] leading-[60px] tracking-[-2%]`}
            >
              How to use? <br /> Learn more details
            </h3>
            <p
              className={`text-[22px] text-[#1b1b1b] leading-[30px] ${abhaya.className} font-semibold`}
            >
              Apply & Ingredients
            </p>
            <p className="text-[16px] leading-[28px] tracking-[1%] text-[#646464]">
              Give your face that gorgeous sun-kissed look with high-quality
              bronzers! Makeup city is a house to international brands that sell
              natural-looking bronzers. Bronzing is about giving your face the
              perfect dimension and warmth.{" "}
            </p>
            <p className="text-[16px] leading-[28px] tracking-[1%] text-[#646464]">
              If you are looking for ways to warm up your pale skin, apply
              bronzer, and see the difference. Bronzer face seems the smart way
              to add glamour to your otherwise simplistic look.
            </p>
          </div>
        </div>

        <FAQ />
        <CTA />
      </div>
    </div>
  );
};

export default HowToUse;
