"use client";
import { createContext, useContext, useState } from "react";
import { usePathname } from "next/navigation";
import data from "@/lib/data.json";

const AppContext = createContext<any>(null);
export const useAppContext = () => useContext(AppContext);

export default function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { products, supplement_packs } = data;
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products" },
    { name: "Contact" },
  ];

  return (
    <AppContext.Provider
      value={{ navLinks, products, supplement_packs, open, setOpen, pathname }}>
      {children}
    </AppContext.Provider>
  );
}
