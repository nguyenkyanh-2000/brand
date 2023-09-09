"use client";

import DataTable from "@/app/_components/molecules/table/DataTable";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/app/_components/atoms/misc/DropdownMenu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Button } from "@/app/_components/atoms/button/Button";
import { DataTableColumnHeader } from "@/app/_components/molecules/table/DataTableColumnHeader";
import { format } from "date-fns";
const products = [
  {
    id: "e9dcb7af-78d7-4e92-9f48-1ae32c7f9d1a",
    name: "Laptop Stand",
    description:
      "A sleek and adjustable laptop stand designed for ergonomic comfort.",
    price: 39.99,
    created_at: "2023-09-08T12:00:00Z",
    category: "Office Accessories",
  },
  {
    id: "3d56a10f-6459-4ccf-8e5e-aa3c52ca3b27",
    name: "Wireless Earbuds",
    description:
      "High-quality wireless earbuds with noise-cancellation technology.",
    price: 129.99,
    created_at: "2023-09-07T10:30:00Z",
    category: "Electronics",
  },
  {
    id: "562e3f9d-7e0e-42c4-b0ca-451ce38ecf59",
    name: "Coffee Maker",
    description:
      "A programmable coffee maker that brews your favorite coffee at the touch of a button.",
    price: 79.99,
    created_at: "2023-09-06T15:45:00Z",
    category: "Kitchen Appliances",
  },
  {
    id: "7f5a9c11-327f-4150-b9f0-e44f14eb6960",
    name: "Running Shoes",
    description:
      "Lightweight and comfortable running shoes with advanced cushioning.",
    price: 89.99,
    created_at: "2023-09-05T14:20:00Z",
    category: "Footwear",
  },
  {
    id: "a2c503fb-3e9e-4edf-b92b-153179134ea4",
    name: "Smartphone",
    description:
      "The latest smartphone model with a high-resolution camera and fast processor.",
    price: 699.99,
    created_at: "2023-09-04T11:55:00Z",
    category: "Electronics",
  },
  {
    id: "f95d8e11-9a90-4fc3-b9a9-1ab72a3d13ad",
    name: "Desk Organizer",
    description:
      "A stylish desk organizer with compartments for pens, notepads, and more.",
    price: 24.99,
    created_at: "2023-09-03T09:40:00Z",
    category: "Office Accessories",
  },
  {
    id: "7e256ed1-8e8f-4680-9e4c-789a01055e22",
    name: "Yoga Mat",
    description:
      "Premium yoga mat with excellent grip and cushioning for your workouts.",
    price: 29.99,
    created_at: "2023-09-02T16:15:00Z",
    category: "Fitness and Wellness",
  },
  {
    id: "ce9e8d0e-69b2-4e5a-aadf-9a07e4a72c19",
    name: "Cookware Set",
    description: "A comprehensive cookware set for all your culinary needs.",
    price: 149.99,
    created_at: "2023-09-01T13:30:00Z",
    category: "Kitchen Appliances",
  },
  {
    id: "5f9d0781-6a76-43cb-b760-ec2b1f1e1e12",
    name: "Gaming Console",
    description:
      "The latest gaming console for an immersive gaming experience.",
    price: 399.99,
    created_at: "2023-08-31T18:50:00Z",
    category: "Electronics",
  },
  {
    id: "a358158e-f3e5-4d36-a202-07a361e3be71",
    name: "Travel Backpack",
    description:
      "A durable and spacious travel backpack with multiple compartments.",
    price: 59.99,
    created_at: "2023-08-30T14:10:00Z",
    category: "Travel and Outdoor",
  },
];

const columns = [
  { accessorKey: "id", header: "ID" },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created At" />
    ),
    cell: ({ row }) => {
      const amount = format(new Date(row.getValue("created_at")), "PPP");
      return React.createElement(
        "div",
        { className: "font-secondary font-medium" },
        amount
      );
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price (USD)" />
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return React.createElement(
        "div",
        { className: "font-secondary font-medium" },
        formatted
      );
    },
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 px-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy product ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View product</DropdownMenuItem>
            <DropdownMenuItem>View product variants</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

function ProductsDashBoardPage() {
  return (
    <>
      <DataTable data={products} columns={columns}></DataTable>
    </>
  );
}

export default ProductsDashBoardPage;
