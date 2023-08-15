import React from "react";
import Image from "next/image";
import Button from "../atoms/button/Button";

const ProductCard = ({ product }) => (
  <div className="relative w-full h-96 rounded-lg overflow-hidden">
    <Image
      src={product.image}
      alt={product.name}
      fill
      className="object-cover pr-5"
    />
    <div className="absolute inset-0 flex flex-col justify-center items-center">
      <div className="h-2/3"></div>
      <Button text={"Shop now"} />
    </div>
  </div>
);

export default ProductCard;
