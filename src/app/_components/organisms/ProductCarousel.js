"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../molecules/ProductCard";
import Button from "../atoms/button/ShortButton";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1536 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1536, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 475, min: 0 },
    items: 1,
  },
};

const products = [
  {
    id: 1,
    image: "https://picsum.photos/id/1/200/300",
    name: "Product 1",
    description: "Description of Product 1",
    price: 19.99,
  },
  {
    id: 2,
    image: "https://picsum.photos/id/10/200/300",
    name: "Product 2",
    description: "Description of Product 2",
    price: 24.99,
  },
  {
    id: 3,
    image: "https://picsum.photos/id/20/200/300",
    name: "Product 3",
    description: "Description of Product 3",
    price: 24.99,
  },
  {
    id: 1,
    image: "https://picsum.photos/id/1/200/300",
    name: "Product 1",
    description: "Description of Product 1",
    price: 19.99,
  },
  {
    id: 2,
    image: "https://picsum.photos/id/10/200/300",
    name: "Product 2",
    description: "Description of Product 2",
    price: 24.99,
  },
  {
    id: 3,
    image: "https://picsum.photos/id/20/200/300",
    name: "Product 3",
    description: "Description of Product 3",
    price: 24.99,
  },
];

function ProductCarousel() {
  return (
    <Carousel responsive={responsive}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
      <div className="relative bg-neutral-900 w-full h-96">
        <div className="absolute inset-0 flex flex-col justify-center items-start px-4">
          <div className="h-2/3 font-secondary text-2xl font-bold text-neutral-50">
            Need more ideas for your lifestyle?
          </div>
          <Button text={"Discover"} />
        </div>
      </div>
    </Carousel>
  );
}

export default ProductCarousel;
