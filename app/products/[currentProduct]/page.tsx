"use client";

import { useAppContext } from "@/app/context";
import { Product } from "@/lib/interfaces";
import formatName from "@/utils/formatName";
import getImage from "@/utils/getImage";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function CurrentProduct() {
  const path = usePathname();
  const { products } = useAppContext();
  // How to do path.remove("/products")
  const { name, description, benefits } = products.find(
    ({ name }: Product) => formatName(name) === path.slice(10, Infinity)
  );

  return (
    <main className="md:ml-72 max-h-[calc(100svh-7.5rem)] overflow-y-scroll">
      <h1>{name}</h1>
      <Image
        src={getImage(name)}
        alt={`picture of ${name}`}
        width={400}
        height={400}
      />
      <p>{description}</p>
      <ul>
        {benefits.map((item: string, i: number) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </main>
  );
}
