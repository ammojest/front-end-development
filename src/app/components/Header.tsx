import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header>
      <div className="flex w-full bg-black text-white h-[100px] justify-between items-center">
        <div className="flex">
          <Link href="/">Front-end Development</Link>
        </div>
        <nav className="flex">
          <ul className="flex">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
