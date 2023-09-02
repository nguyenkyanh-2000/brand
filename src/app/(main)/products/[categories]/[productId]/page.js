"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Breadcrumb from "@/app/_components/atoms/link/Breadcrumb";
import BreadcrumbItem from "@/app/_components/atoms/link/BreadcrumbItem";
import { generateBreadcrumbs } from "@/app/_utils/generateBreadcrumb";
import { useProductStore } from "@/app/_store/productStore";
import Image from "next/image";

function SingleProductPage({ params }) {
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const pathname = usePathname();
  const { currentProduct, fetchProductById } = useProductStore((state) => {
    return {
      currentProduct: state.currentProduct,
      fetchProductById: state.fetchProductById,
    };
  });

  console.log(currentProduct);

  useEffect(() => {
    fetchProductById(params.productId);
  }, [fetchProductById, params.productId]);

  useEffect(() => {
    let currentBreadcrumbs = generateBreadcrumbs(pathname);
    setBreadcrumbs(currentBreadcrumbs);
  }, [pathname]);
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        {breadcrumbs.map((breadcrumb) => (
          <BreadcrumbItem key={breadcrumb.href} href={breadcrumb.href}>
            {breadcrumb.label}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
      <div className="w-full rounded-lg overflow-hidden flex flex-row justify-between">
        <Image
          src={currentProduct.image}
          alt={currentProduct.title}
          height={0}
          width={0}
          className="w-40 h-auto object-fit object-center"
          sizes={"100vw"}
        />
        <div className="flex flex-col">
          <h2 className="inline-block text-gray-800 text-2xl font-semibold">
            {currentProduct.title}
          </h2>
          <p className="inline-block mt-2 text-gray-600">
            ${currentProduct.price}
          </p>
        </div>
      </div>
    </>
  );
}

export default SingleProductPage;
