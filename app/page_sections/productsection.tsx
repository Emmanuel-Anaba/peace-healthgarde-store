"use client";
import Link from "next/link";
import MySwiper from "@/components/myswiper";
import { useAppContext } from "../context";

export default function ProductSection() {
  const productBreakpoints = {
    320: { slidesPerView: 1 },
    768: { slidesPerView: 4, spaceBetween: 30 },
  };

  const supplementBreakpoints = {
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2, spaceBetween: 80 },
  };

  const { products, supplement_packs } = useAppContext();

  return (
    <section className="grid gap-8 py-6">
      <p className="text-3xl md:text-4xl font-medium text-center">
        Our Products
      </p>
      <MySwiper
        delay={3000}
        items={products}
        breakpoints={productBreakpoints}
      />
      <Link href="/products" className="btn py-2 px-8 mx-auto rounded-full">
        VIEW ALL PRODUCTS
      </Link>
      <p className="text-2xl md:text-3xl font-medium text-center">
        Suggested Supplement Packs
      </p>
      <MySwiper
        delay={3000}
        items={supplement_packs.map((name: string) => ({ name }))}
        type="pack"
        breakpoints={supplementBreakpoints}
      />
    </section>
  );
}
