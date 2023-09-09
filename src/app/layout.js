import dynamic from "next/dynamic";
import React from "react";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Brand",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 dark:bg-neutral-950 overflow-x-hidden">
        {children}
        <Toaster
          position="top-right"
          toastOptions={{ className: "font-secondary" }}
        />
      </body>
    </html>
  );
}
