import React from "react";
import "./globals.css";

export const metadata = {
  title: "Brand",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden bg-neutral-50">{children}</body>
    </html>
  );
}
