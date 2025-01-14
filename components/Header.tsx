"use client";
import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="my-5 flex justify-between gap-5">
      <Link href="/">
        <Image src="icons/logo.svg" alt="logo" width={40} height={40} />
      </Link>

      <ul className="flex flex-row items-center gap-8">
        <li>
          <Link
            href="/library"
            className={cn(
              "text-base cursor-pointer capitalize",
              pathname === "/library" ? "text-light-200" : "text-lime-100"
            )}
          >
            Library
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;