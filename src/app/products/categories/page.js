"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Breadcrumb from "@/app/_components/atoms/link/Breadcrumb";
import BreadcrumbItem from "@/app/_components/atoms/link/BreadcrumbItem";

import React from "react";
import { generateBreadcrumbs } from "@/app/_utils/generateBreadcrumb";

function CategoriesPage() {
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const pathname = usePathname();
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
      <div>page</div>
    </>
  );
}

export default CategoriesPage;
