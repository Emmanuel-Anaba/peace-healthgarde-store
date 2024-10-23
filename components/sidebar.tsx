"use client";
import { useAppContext } from "@/app/context";
import { NavLink, Product } from "@/lib/interfaces";
import Link from "next/link";
import Searchbox from "./searchbox";
import formatName from "@/utils/formatName";

export default function Sidebar() {
  const { navLinks, pathname, open, setOpen, products } = useAppContext();
  const isProductsPage = pathname.includes("/products");

  return (
    <>
      <div
        className={`overlay ${open ? "block" : "hidden"}`}
        onClick={() => setOpen(!open)}></div>
      <aside
        className={`md:left-0 ${open ? "left-0" : "-left-72"} ${
          isProductsPage ? "md:block" : "md:hidden"
        }`}>
        <ul className="nav-links">
          {navLinks.map(({ name, path }: NavLink) => {
            const newPath = path || `/${name.toLowerCase()}`;
            // There's a little bit of a bug here 😁😎
            // The active stuff doesnt show on /products/[currentProduct]
            // const active = pathname.includes(newPath);
            // and this doesn't solve it either cos pathname includes "/" which is the path for home
            const active = pathname === newPath;
            return (
              <li key={name} onClick={() => setOpen(!open)}>
                <Link
                  className={
                    active
                      ? "dark:bg-gray-800 dark:text-laurel-600"
                      : "text-inherit"
                  }
                  href={newPath}>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
        {isProductsPage && (
          <>
            <Searchbox />
            <ul className="product-list">
              {products.map(({ name }: Product) => (
                <li key={name}>
                  <Link href={`/products/${formatName(name)}`}>{name}</Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </aside>
    </>
  );
}
