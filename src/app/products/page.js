"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { SplashScreenImage1 } from "../../../public/images";
import Button from "../_components/atoms/button/Button";
import ProductBanner from "../_components/atoms/typography/ProductBanner";
import ProductCarousel from "../_components/organisms/ProductCarousel";

function ProductPage() {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <ProductBanner>Discover now</ProductBanner>
        <ProductCarousel />
      </div>
      <div className="flex flex-col lg:flex-row w-full min-h-96 bg-black">
        <div className="w-full lg:w-1/2 h-[400px] lg:h-[400px] relative flex-grow">
          <Image
            src={SplashScreenImage1}
            alt={"test"}
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center p-8 text-neutral-50 gap-10">
          <div className="max-w-md">
            <p className="text-lg font-semibold mb-2">
              Plan and design your dream bathroom
            </p>
            <p className="text-gray-300">
              Do you want a cosy bathroom where you can recharge your batteries
              and have a fresh start to the day? Use the bathroom planning tool
              to design the best solution for your space and budget.
            </p>
          </div>
          <Button text={"Discover now"} />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <ProductBanner>Discover now</ProductBanner>
        <ProductCarousel />
      </div>
    </div>
  );
}

export default ProductPage;
