import React from "react";
import ProductBanner from "../components/atoms/typography/ProductBanner";
import ProductCarousel from "../components/organisms/ProductCarousel";

function ProductPage() {
  return (
    <div>
      <div className="flex flex-col gap-5">
        <ProductBanner>Discover now</ProductBanner>
        <ProductCarousel />
      </div>
      <ProductBanner></ProductBanner>
    </div>
  );
}

export default ProductPage;
