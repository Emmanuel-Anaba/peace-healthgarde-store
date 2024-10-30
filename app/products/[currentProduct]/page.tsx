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
  const { name, description, benefits } = products.find(
    ({ name }: Product) => formatName(name) === path.slice(10, Infinity)
  );

  return (
    <main id="products-page" className="p-4 lg:flex items-start">
      <Image
        priority
        loading="eager"
        src={getImage(name)}
        alt={`picture of ${name}`}
        width={400}
        height={400}
      />
      <div className="grid gap-2">
        <h1 className="text-2xl md:text-3xl font-medium">{name}</h1>
        <p>{description}</p>
        <ul className="">
          {benefits.map((item: string, i: number) => (
            <li key={i}>
              <b>-</b> {item}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
