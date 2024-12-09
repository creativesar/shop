import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiCart } from "react-icons/bi";
import { TbUserCircle } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";

const NavBar = () => {
  return (
    <header className="bg-white shadow-sm border-b mx-auto flex flex-col w-full">
      {/* Announcement Bar */}
      <div className="bg-black text-white py-2 text-xs sm:text-sm flex justify-center items-center px-4 sm:px-8 w-full">
        <div className="text-center text-[12px] lg:text-[14px] font-normal font-satoshi">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <a
            href="#"
            className="underline hover:text-slate-300 font-bold transition-colors"
          >
            Shop Now
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex justify-around items-center px-8 py-4">
        {/* Logo */}
        <h1 className="text-2xl text-black font-bold font-['integralcf']">SHOP.CO</h1>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 items-center">
          {/* Shop link with dropdown icon */}
          <a
            href="#"
            className="relative flex items-center text-slate-600 font-normal hover:text-black group transition-colors"
          >
            Shop
            <RiArrowDropDownLine className="ml-1 text-black text-xl sm:text-2xl" />
          </a>
          <a
            href="#"
            className="relative text-slate-600 font-normal hover:text-black group transition-colors"
          >
            On Sale
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a
            href="#"
            className="relative text-slate-600 font-normal hover:text-black group transition-colors"
          >
            New Arrivals
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
          <a
            href="#"
            className="relative text-slate-600 font-normal hover:text-black group transition-colors"
          >
            Brands
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </a>
        </nav>

        {/* Search Form */}
        <div className="flex items-center space-x-6">
          <div className="hidden lg:flex items-center bg-slate-100 rounded-full w-[545px] px-3 py-2 gap-3">
            <CiSearch className="h-[24px] w-[24px] text-slate-500" />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-slate-100 outline-none text-sm w-full"
            />
          </div>
        </div>

        {/* Icons with 14px gap */}
        <div className="flex items-center space-x-3.5">
          <BiCart className="h-[24px] w-[24px]" />
          <TbUserCircle className="h-[24px] w-[24px]" />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
