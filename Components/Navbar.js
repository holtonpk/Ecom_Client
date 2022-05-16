import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  return (
    <div id="navbar" className="w-fit h-fit">
      <div className="flex-row items-center justify-between hidden xl:flex w-fit">
        <Link href="/#">
          <a className="mr-4 text-2xl font-thin text-white">Home</a>
        </Link>

        <Link href="/#">
          <a className="mr-4 text-2xl font-thin text-white">About</a>
        </Link>

        <Link href="/Catalog/TintCase/TintCase-black">
          <a className="mr-4 text-2xl font-thin text-white ">Catalog</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
