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

const ProductPrimer = () => {
  return (
    <div className="w-full h-full ">
      <PageHeader />
      <div className="container px-0 py-24 mx-auto">
        <div className="flex flex-col items-center justify-center w-full gap-10 lg:flex-row px-7">
          <Image
            src={"/assets/primer-plus.png"}
            width={400}
            height={200}
            alt="product-image"
          />
          <div className="flex flex-col gap-4">
            <h3
              className={`${abhaya.className} text-[#2c3538] text-[50px] leading-[60px] tracking-[-2%]`}
            >
              GOS- Primer Plus 30 ML
            </h3>
            <p className="text-[16px] text-[#72696a] leading-[28px] lg:max-w-[300px]">
              GOSH COPENHAGEN offers a wide selection of products in different
              categories: Cosmetics, Fragrances, Hair Care, Face Care, Body
              Care. GOSH Cosmetics are available online.{" "}
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

export default ProductPrimer;
