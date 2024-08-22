import Image from "next/image";
import React from "react";
import { Abhaya_Libre } from "next/font/google";
import { FaArrowRight } from "react-icons/fa6";

const abhaya = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const WhyChooseUs = () => {
  return (
    <section className="w-full h-full">
      <div className="container mx-auto">
        <div className="flex items-center justify-between px-3 py-10">
          <div className="text-left ">
            <p className="text-[#7d7d7d] md:text-[18px] tracking-[5%] font-medium italic">
              Why Choose Us ?
            </p>
            <h3
              className={`lg:text-[46px] text-[#222222] md:leading-[50px] font-extrabold ${abhaya.className} text-[30px]`}
            >
              How to use ?<br /> learn more details.
            </h3>
          </div>
          <div className="flex items-center gap-5">
            <Image
              src={"/assets/Group.png"}
              width={93}
              height={98}
              alt="graphical-representation"
            />
            <div className="flex flex-col gap-4">
              <p className="text-[#494949] text-[14px] leadinng-[19px] tracking-[1%]">
                Does not contain <br /> alcohol.
              </p>
              <p className="text-[16px] text-[#242424] font-bold leading-[20px] tracking-[-1%]">
                PH 3.5
              </p>
            </div>
          </div>
        </div>
        <div className="items-center justify-center w-full lg:flex">
          <div className="w-full">
            <Image
              src={"/assets/why-mockup.png"}
              width={648}
              height={547}
              alt="mockup-product"
            />
          </div>
          <div className="flex flex-col gap-3 lg:text-left max-w-[500px] w-full pt-5 lg:pt-0">
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

            <a href="/how-to-use">
              <button className="flex items-center gap-3 border-l text-[#F93801] border-l-[#f93801] rounded-l-full p-2">
                <FaArrowRight />
                Learn more
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
