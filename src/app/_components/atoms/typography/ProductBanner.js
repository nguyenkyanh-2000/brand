import React from "react";

function ProductBanner({ children }) {
  return (
    <p className="w-full lg:w-2/3 font-primary font-black text-2xl xs:text-2xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl">
      {children}
    </p>
  );
}

export default ProductBanner;
