"use client";

import { useRef } from "react";
import { twMerge } from "tailwind-merge";

import IconSearch from "@/public/icon-search-18.svg";
import { antonio } from "@/utils/fonts";

export default function SearchBox() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => inputRef.current?.focus();

  return (
    <div
      role="presentation"
      className="flex h-10 min-w-48 items-center rounded-full border-2 border-black px-4"
      onClick={handleClick}
    >
      <input
        ref={inputRef}
        type="text"
        className={twMerge(
          "text-red-700 outline-none placeholder:text-red-700",
          antonio.className,
        )}
        placeholder="Search"
      />

      <IconSearch />
    </div>
  );
}
