import React from "react";

export const metadata = {
  title: "Products",
};

function ProductsLayout({ children }) {
  return <div className="flex flex-col mt-10">{children}</div>;
}

export default ProductsLayout;
