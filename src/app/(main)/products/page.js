"use client";

import React from "react";
import { SplashScreenImage1 } from "../../../../public/images";
import ProductBanner from "../../_components/atoms/typography/ProductBanner";
import FeatureSection from "../../_components/organisms/FeatureSection";
import ProductCarousel from "../../_components/organisms/ProductCarousel";

function ProductPage() {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <ProductBanner>Discover now</ProductBanner>
        <ProductCarousel />
      </div>
      <FeatureSection
        imageURL={SplashScreenImage1}
        title="Our innovative Brand product"
        content={
          "Discover a new realm of possibilities as you interact with our product's cutting-edge features. From its sleek and ergonomic design to its intuitive user interface, every detail has been meticulously crafted to enhance your daily routines."
        }
      />

      <div className="flex flex-col gap-5">
        <ProductBanner>Discover now</ProductBanner>
        <ProductCarousel />
      </div>
    </div>
  );
}

export default ProductPage;
