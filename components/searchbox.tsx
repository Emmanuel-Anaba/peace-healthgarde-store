"use client";
import { useAppContext } from "@/app/context";
import { Product } from "@/lib/interfaces";
import formatName from "@/utils/formatName";
import Link from "next/link";
import { useState } from "react";
import { LuSearch } from "react-icons/lu";
import "./css/searchbox.css";

export default function Searchbox() {
  const [searchInput, setSearchInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const { products } = useAppContext();
  const searchResult = products.filter(({ name }: Product) =>
    name.toLowerCase().startsWith(searchInput)
  );

  return (
    <div className="search-box">
      <div>
        <span>
          <LuSearch />
        </span>
        <input
          type="text"
          placeholder="Search for a product"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 300)}
        />
      </div>
      {isFocused && searchInput && (
        <ul>
          {searchResult.length ? (
            searchResult.map(({ name }: Product) => (
              <li key={name}>
                <Link href={`/products/${formatName(name)}`}>{name}</Link>
              </li>
            ))
          ) : (
            <p>No item Found! 😓😢</p>
          )}
        </ul>
      )}
    </div>
  );
}
