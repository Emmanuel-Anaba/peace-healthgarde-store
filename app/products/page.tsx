"use client";
import { Product } from "@/lib/interfaces";
import { useState } from "react";

export default function Products() {
  const [currentProduct, setCurrentProduct] = useState<Product>();

  return (
    <main className="md:ml-72 max-h-[calc(100svh-7.5rem)] overflow-y-scroll">
      <h1>Getting Started</h1>
    </main>
  );
}
