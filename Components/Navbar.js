import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div id="navbar" className="order-2 w-fit h-fit b-b">
      <div className="flex-row items-center justify-between xl:flex w-fit">
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
