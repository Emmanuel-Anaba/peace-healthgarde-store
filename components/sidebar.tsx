"use client";
import { useAppContext } from "@/app/context";
import { NavLink, Product } from "@/lib/interfaces";
import Link from "next/link";
import Searchbox from "./searchbox";

export default function Sidebar() {
  const { navLinks, pathname, open, setOpen, products } = useAppContext();
  const isProductsPage = pathname === "/products";

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
            const active = pathname === newPath;
            return (
              <li key={name} onClick={() => setOpen(!open)}>
                <Link
                  className={
                    active ? "bg-laurel-50 text-laurel-600" : "text-laurel-50"
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
                <li
                  key={name}>
                  {name}
                </li>
              ))}
            </ul>
          </>
        )}
      </aside>
    </>
  );
}
