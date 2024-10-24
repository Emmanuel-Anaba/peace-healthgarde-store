"use client";
import { useAppContext } from "@/app/context";
import { NavLink } from "@/lib/interfaces";
import getImage from "@/utils/getImage";
import Image from "next/image";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";
import ThemeSwitcher from "./themeswitcher";
import { useEffect, useRef } from "react";

export default function Navbar() {
  const { navLinks, pathname, open, setOpen } = useAppContext();
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        navbarRef.current?.classList.add("border-b-[1px]", "border-gray-400");
      } else {
        navbarRef.current?.classList.remove(
          "border-b-[1px]",
          "border-gray-400"
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav ref={navbarRef}>
      <Image
        priority
        src={getImage("logo")}
        alt="logo"
        width={130}
        height={55}
      />
      <div className="flex items-center gap-6">
        <ul>
          {navLinks.map(({ name, path }: NavLink) => {
            const newPath = path || `/${name.toLowerCase()}`;
            const active =
              pathname === newPath ||
              (newPath !== "/" && pathname.startsWith(newPath));
            return (
              <li key={name} className={active ? "after:w-full" : "after:w-0"}>
                <Link href={newPath}>{name}</Link>
              </li>
            );
          })}
        </ul>
        <ThemeSwitcher />
        <RiMenu3Line
          className="sidebar-button"
          onClick={() => setOpen(!open)}
        />
      </div>
    </nav>
  );
}
