"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  return (
    <header
      className={`sticky top-0 left-0 z-50 ease-in-out duration-1000 ${
        scrolling ? "bg-gray-800" : "bg-transparent"
      }`}
    >
      <div
        className={`flex w-full ${
          scrolling ? "text-white h-[100px]" : "text-black h-[150px]"
        }  justify-center items-center`}
      >
        <div className="flex w-full max-w-7xl justify-between">
          <Link href="/">
            <h2 className="text-xl fonnt-bold">Front-end Development</h2>
          </Link>
          <div className="flex">
            <ul className="flex space-x-5">
              <li className="hover:underline underline-offset-4">
                <Link href="/guides/react">React</Link>
              </li>
              <li className="hover:underline underline-offset-4">
                <Link href="/guides/google-analytics">Google Analytics</Link>
              </li>
              <li className="hover:underline underline-offset-4">
                <Link href="/guides/next">Next JS</Link>
              </li>
              <li className="hover:underline underline-offset-4">
                <Link href="/guides/react/components">React Components</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
