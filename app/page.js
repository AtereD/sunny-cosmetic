"use client";

import Clients from "@/components/Clients";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Product from "@/components/Product";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import { CartProvider } from "@/components/CartContext";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <CartProvider>
        <Header />
        <Hero />
        <Product />
        <WhyChooseUs />
        <Clients />
        <Testimonials />
        <FAQ />
        <CTA />
      </CartProvider>
    </main>
  );
}
