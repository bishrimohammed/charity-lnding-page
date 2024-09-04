"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdMenu } from "react-icons/md";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="   z-30 relative">
      <div className="flex items-center justify-between py-[20px]  md:px-[10%] px-[5%]">
        <div>
          <Image src="/logo.png" alt="" width={25} height={25} />
        </div>

        <ul className="lg:flex hidden  lg:gap-[30px] md:gap-[30px] text-white z-30 font-montserrat font-semibold">
          {/* <li className="text-base cursor-pointer">Home</li> */}
          <li className="text-base cursor-pointer ">About Us</li>
          <li className="text-base cursor-pointer">What We Do</li>
          <li className="text-base cursor-pointer">Get Involved</li>
          <li className="text-base cursor-pointer">News & Updates</li>
          <li className="text-base cursor-pointer">Resources</li>
          <li className="text-base cursor-pointer">Contact</li>
        </ul>
        <div className="lg:flex hidden  items-center gap-2 z-30">
          <div style={{ border: "1px solid #EE3123" }} className="p-1 z-10">
            <BiSearch className="color-red" />
          </div>
          <button className="outline-none bg-red text-white px-3 py-1 font-semibold text-sm border-none z-10">
            Donate
          </button>
        </div>
        <div className="lg:hidden block">
          <MdMenu
            color="white"
            size={30}
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
      </div>

      <div
        className={`lg:hidden flex flex-col items-center gap-2 z-40 bg-gray-900 pb-5 transition-transform duration-300 ease-in-out 
          // ${
            showMenu ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"
          }`}
      >
        {showMenu && (
          <>
            {" "}
            <ul className="flex flex-col w-full  text-white  font-montserrat font-semibold text-center">
              {/* <li className="text-base cursor-pointer">Home</li> */}
              <li className="text-base cursor-pointer p-1">About Us</li>
              <li className="text-base cursor-pointer p-1">What We Do</li>
              <li className="text-base cursor-pointer p-1">Get Involved</li>
              <li className="text-base cursor-pointer p-1">News & Updates</li>
              <li className="text-base cursor-pointer p-1">Resources</li>
              <li className="text-base cursor-pointer p-1">Contact</li>
            </ul>
            <div className="flex   items-center gap-2">
              {/* <div style={{ border: "1px solid #EE3123" }} className="p-1 ">
            <BiSearch className="color-red" />
          </div> */}
              <button className="outline-none bg-red text-white px-4 py-1 font-semibold text-sm border-none z-10">
                Donate
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default NavBar;
