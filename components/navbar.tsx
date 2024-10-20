"use client";
import { useAppContext } from "@/app/context";
import { NavLink } from "@/lib/interfaces";
import getImage from "@/utils/getImage";
import Image from "next/image";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";
import ThemeSwitcher from "./themeswitcher";

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
      <div className="flex items-center gap-6">
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
        <ThemeSwitcher />
        <RiMenu3Line
          className="sidebar-button"
          onClick={() => setOpen(!open)}
        />
      </div>
    </nav>
  );
}
