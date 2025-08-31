/* eslint-disable @next/next/no-img-element */
"use client";

import CurrentEvents from "@/components/current-event";
import Service from "@/components/service";
import Quotation from "@/components/quotation";
import Blog from "@/components/blog";
import Product from "@/components/product";

export default function SingaporeArtMuseum() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-[68px] md:pt-[92px]">
      {/* Navigation */}

      {/* Hero Section */}
      <section>
        <div className="relative h-[70vh]">
          <img
            src="/hero.jpg"
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Exhibitions Section */}
      <CurrentEvents />

      {/* Exhibitions Section */}
      <Service />

      <Product />

      {/* Blog Post Section */}
      <Quotation />

      {/* Blog Section */}
      <Blog />

      {/* Subscribe Section */}
      {/* <SubscribeNewsletter /> */}
    </div>
  );
}
