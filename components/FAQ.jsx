import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Abhaya_Libre } from "next/font/google";

const abhaya = Abhaya_Libre({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const FAQ = () => {
  return (
    <section className="w-full h-full py-24 " id="faq">
      <div className="container p-2 mx-auto ">
        <div className="text-center">
          <h3
            className={`${abhaya.className} text-[#2d1d61] text-[44px] leading-[130%] font-bold`}
          >
            Frequently Asked Questions
          </h3>
        </div>
        <div className="w-full lg:p-10">
          <Accordion
            type="single"
            collapsible
            className="flex flex-col md:gap-10 gap-4 bg-[#f7f7f7] md:p-10 p-5 rounded-2xl"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How long until we deliver your product.
              </AccordionTrigger>
              <AccordionContent>
                It takes 7 to 14 days to get your product delivered.  Please note that delivery times are  can vary based on
                your location and the availability of the product. Once your
                order is shipped, you'll receive a tracking number so you can
                monitor its progress. If you have any specific delivery needs or
                questions, feel free to contact our customer service team!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Do you ship out of United States?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we do offer international shipping! We can send our
                products to most countries around the world. Shipping rates and
                delivery times vary depending on your location. For specific
                details on shipping costs and estimated delivery times to your
                country, please check our shipping policy or contact our
                customer service team.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Do you offer money back guarantee?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we offer a money-back guarantee on our products! If you're
                not completely satisfied with your purchase, you can return it
                within 15days for a full refund. Please make sure the item is in
                its original condition and packaging. For more details on our
                return process and any applicable conditions, please refer to
                our return policy or reach out to our customer service team.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Is it medically tested?</AccordionTrigger>
              <AccordionContent>
                Our cosmetic products undergo rigorous testing to ensure safety
                and quality. While they are not tested on humans, they are
                formulated in compliance with industry standards and
                regulations. We conduct comprehensive testing for safety,
                stability, and performance. For detailed information about the
                testing and safety of a specific product, please refer to the
                product details on our website or contact our customer service
                team.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                How to get best results from this product?
              </AccordionTrigger>
              <AccordionContent>
                To get the best results, follow the product’s instructions
                carefully, apply it to clean, dry skin, and use it consistently
                as recommended. Always perform a patch test first and store the
                product in a cool, dry place. For personalized advice, feel free
                to contact our customer service team.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
