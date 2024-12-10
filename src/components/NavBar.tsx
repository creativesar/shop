'use client';

import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiCart } from "react-icons/bi";
import { TbUserCircle } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { HiMenuAlt3 } from "react-icons/hi";

const NavBar = () => {
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b w-full">
      {/* Announcement Bar */}
      <div className="bg-black text-white py-2 text-xs sm:text-sm flex justify-center items-center">
        <p className="text-center text-[12px] lg:text-[14px] px-">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <a
            href="#"
            className="underline hover:text-gray-400 font-bold transition-colors"
          >
            Shop Now
          </a>
        </p>
      </div>

      {/* Main Navigation */}
      <div className="flex justify-between items-center px-6 py-4">
        {/* Hamburger Menu Icon */}
        <div className="flex items-center space-x-2">
          <button
            className="md:hidden text-2xl text-gray-600 hover:text-black transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <HiMenuAlt3 />
          </button>

          {/* Logo */}
          <h1 className="text-xl md:text-2xl font-bold font-integral text-gray-900">
            SHOP.CO
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 relative">
          {/* Shop Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsShopDropdownOpen(true)}
            onMouseLeave={() => setIsShopDropdownOpen(false)}
          >
            <button
              className="flex items-center text-gray-600 hover:text-black transition-colors"
              aria-haspopup="true"
              aria-expanded={isShopDropdownOpen}
            >
              Shop
              <RiArrowDropDownLine className="ml-1 text-xl" />
            </button>
            {/* Dropdown Menu */}
            {isShopDropdownOpen && (
              <div className="absolute left-0 top-10 w-64 bg-white shadow-lg rounded-lg z-20">
                <ul className="py-2">
                  <li>
                    <a
                      href="#"
                      className="block px-6 py-3 text-gray-700 hover:text-white hover:bg-gray-900 rounded-md"
                    >
                      Men’s Clothes
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-6 py-3 text-gray-700 hover:text-white hover:bg-gray-900 rounded-md"
                    >
                      Women’s Clothes
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-6 py-3 text-gray-700 hover:text-white hover:bg-gray-900 rounded-md"
                    >
                      Kids’ Clothes
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-6 py-3 text-gray-700 hover:text-white hover:bg-gray-900 rounded-md"
                    >
                      Bags & Shoes
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <a
            href="#"
            className="text-gray-600 hover:text-black transition-colors"
          >
            On Sale
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-black transition-colors"
          >
            New Arrivals
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-black transition-colors"
          >
            Brands
          </a>
        </nav>

        {/* Icons Section */}
        <div className="flex items-center space-x-4">
          {/* Search Icon for Tablet and Desktop */}
          <CiSearch className="md:flex lg:hidden text-2xl text-gray-600 hover:text-black transition-colors" />

          {/* Search Bar for Tablet and Desktop */}
          <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-4 py-2 w-[500px]">
            <CiSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full bg-gray-100 outline-none px-3 text-sm"
            />
          </div>

          {/* Cart Icon */}
          <BiCart className="text-2xl text-gray-600 hover:text-black transition-colors" />

          {/* User Icon */}
          <TbUserCircle className="text-2xl text-gray-600 hover:text-black transition-colors" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md z-10 md:hidden">
          <ul className="py-4 px-6 space-y-4 text-gray-700">
            <li>
              <a href="#" className="block hover:text-black transition-colors">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-black transition-colors">
                On Sale
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-black transition-colors">
                New Arrivals
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-black transition-colors">
                Brands
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
