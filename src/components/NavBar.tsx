import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <header className="flex justify-between  py-[20px]  px-[200px]  border-2">
      <div>
        <Image src="/logo.png" alt="" width={25} height={25} />
      </div>

      <ul className="flex gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <div>
        <button className="outline-none">Donate</button>
      </div>
    </header>
  );
};

export default NavBar;
