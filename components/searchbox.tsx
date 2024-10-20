"use client";
import { useAppContext } from "@/app/context";
import { Product } from "@/lib/interfaces";
import { ReactNode, useRef, useState } from "react";
import { LuSearch } from "react-icons/lu";

export default function Searchbox() {
  const [searchInput, setSearchInput] = useState("");
  const { products } = useAppContext();
  const searchResult = products.filter(({ name }: Product) =>
    name.toLowerCase().startsWith(searchInput)
  );
  // const inputRef = useRef<HTMLInputElement>(null);
  // const isFocused = inputRef.current?.focus()

  return (
    <div className="search-box">
      <div>
        <span>
          <LuSearch />
        </span>
        <input
          // ref={inputRef}
          type="text"
          placeholder="Search for a product"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      {/* If the input loses focus, this should disappear
        i.e isFocused && searchInput && result
      */}
      {searchInput && (
        <ul>
          {searchResult.length ? (
            searchResult.map(({ name }: Product) => <li key={name}>{name}</li>)
          ) : (
            <p>No item Found! 😓😢</p>
          )}
        </ul>
      )}
    </div>
  );
}
