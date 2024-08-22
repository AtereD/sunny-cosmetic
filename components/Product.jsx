import React from "react";
import { Abhaya_Libre } from "next/font/google";
import Image from "next/image";

const abhaya = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Product = () => {
  return (
    <section className="w-full py-24" id="products">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2
            className={`${abhaya.className} text-3xl lg:text-6xl font-bold leading-[76px] tracking-[-5%] text-[#292019]`}
          >
            Best Cosmetic Product
          </h2>
          <p className="text-[#72696a] text-[16px] leading-[28px] max-w-[700px]">
            Launched in 2002, Makeup City has brought renowned international
            personal care brands under one roof for the first time in Pakistan.
            from a journey of a few stores, we have grown significantly, by
            making our brands available to almost every where a person can think
            off.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="items-center gap-8 lg:flex">
            <Image
              src={"/assets/primer-plus.png"}
              width={406}
              height={409}
              alt="Primer Plus Product"
              className="p-5 lg:p-0"
            />
            <div className="flex flex-col gap-4">
              <h3
                className={`${abhaya.className} text-[#2c3538] text-[50px] leading-[60px] tracking-[-2%]`}
              >
                GOS- Primer Plus 30 ML
              </h3>
              <p className="text-[16px] text-[#72696a] leading-[28px] max-w-[300px]">
                GOSH COPENHAGEN offers a wide selection of products in different
                categories: Cosmetics, Fragrances, Hair Care, Face Care, Body
                Care. GOSH Cosmetics are available online.{" "}
              </p>
              <a
                href="/product-primer"
                className="hover:underline text-[#2c3538] text-[15px] leading-[20px]"
              >
                Load More
              </a>
            </div>
          </div>
          <div className="items-center gap-8 lg:flex">
            <div className="flex flex-col gap-3">
              <h3
                className={`${abhaya.className} text-[#2c3538] text-[50px] leading-[60px] tracking-[-2%] max-w-[500px]`}
              >
                HD Micro Foundation Matifying Liquid
              </h3>
              <p className="text-[16px] text-[#72696a] leading-[28px] max-w-[300px]">
                HD Micro Foundation Matifying Liquid is a micronized and gently
                mattifying foundation with vitamin E for the most natural look.
                .{" "}
              </p>
              <a
                href="/product-foundation"
                className="hover:underline text-[#2c3538] text-[15px] leading-[20px]"
              >
                Load More
              </a>
            </div>
            <div className="relative">
              <span className="absolute top-[22%] right-[2%] p-2 lg:right-[-55px] md:right-[55px] sm:right-[55px]">
                <img src="/assets/Vector 133.png" />
              </span>
              <Image
                src={"/assets/Foundation.png"}
                width={406}
                height={409}
                alt="Primer Plus Product"
                className="p-5 lg:p-0 "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
