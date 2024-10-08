import Link from "next/link";
import React from "react";

const next = () => {
  return (
    <>
      <div>
        <h1>Next JS</h1>
      </div>
      <div>
        <h2>Guide: how to add a new page</h2>
        <p>
          Add a new folder with the URL name (in lower case) and then create a
          page.tsx file with the same export name as the URL
        </p>
        <Link href="https://nextjs.org/learn/dashboard-app/creating-layouts-and-pages">
          Page link
        </Link>
      </div>
    </>
  );
};

export default next;
