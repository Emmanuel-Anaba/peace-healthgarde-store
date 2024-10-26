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
            const active =
              pathname === newPath ||
              (newPath !== "/" && pathname.startsWith(newPath));
            return (
              <li key={name} onClick={() => setOpen(!open)}>
                <Link
                  className={
                    active && "bg-gray-200 dark:bg-gray-900"
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
              {products.map(({ name }: Product) => {
                const active = pathname.includes(formatName(name));
                return (
                  <li key={name}>
                    <Link
                      className={`${
                        active && "border-l-4 border-current font-medium"
                      }`}
                      href={`/products/${formatName(name)}`}>
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </aside>
    </>
  );
}
