"use client";
import getImage from "@/utils/getImage";
import Image from "next/image";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";

export default function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products" },
    { name: "Contact" },
  ];

  return (
    <>
      <nav>
        <Image
          priority
          src={getImage("logo")}
          alt="logo"
          width={75}
          height={45}
        />
        <ul className="hidden md:flex gap-6">
          {navLinks.map(({ name, path }) => (
            <li
              key={name}
              className="cursor-pointer text-laurel-600 relative after:absolute
              after:bg-laurel-600 after:w-0 after:h-0.5 after:left-1/2 after:-translate-x-1/2 after:-bottom-0.5 hover:after:w-full after:duration-500"
              onClick={() => {}}>
              <Link href={`/${path || name.toLowerCase()}`}>{name}</Link>
            </li>
          ))}
        </ul>
        <RiMenu3Line className="sidebar-button md:hidden text-xl" />
      </nav>
      {/* <aside>Sidebar</aside> */}
    </>
  );
}
