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
    <section>
      <h1>Our Products</h1>
      <MySwiper
        delay={3000}
        items={products}
        breakpoints={productBreakpoints}
      />
      <Link href="/products">
        VIEW ALL PRODUCTS
      </Link>
      <h2>Suggested Supplement Packs</h2>
      <MySwiper
        delay={3000}
        items={supplement_packs.map((name: string) => ({ name }))}
        type="pack"
        breakpoints={supplementBreakpoints}
      />
    </section>
  );
}
