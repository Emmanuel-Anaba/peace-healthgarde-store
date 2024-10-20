"use client";
import { useAppContext } from "@/app/context";
import { NavLink } from "@/lib/interfaces";
import getImage from "@/utils/getImage";
import Image from "next/image";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";

export default function Navbar() {
  const { navLinks, pathname, open, setOpen } = useAppContext();

  return (
    <nav>
      <Image
        priority
        src={getImage("logo-white")}
        alt="logo"
        width={75}
        height={45}
      />
      <ul>
        {navLinks.map(({ name, path }: NavLink) => {
          const newPath = path || `/${name.toLowerCase()}`;
          const active = pathname === newPath;
          return (
            <li key={name} className={active ? "after:w-full" : "after:w-0"}>
              <Link href={newPath}>{name}</Link>
            </li>
          );
        })}
      </ul>
      <RiMenu3Line className="sidebar-button" onClick={() => setOpen(!open)} />
    </nav>
  );
}
