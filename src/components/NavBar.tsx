"use client";

import React, { useState } from "react";
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { BiCart } from "react-icons/bi";
import { TbUserCircle } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { HiMenuAlt3 } from "react-icons/hi";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NavBar = () => {
  return (
    <header className="bg-white shadow-sm border-b w-full">
      {/* Announcement Bar */}
      <div className="bg-black text-white py-2 text-xs sm:text-sm flex justify-center items-center">
        <p className="text-center text-[12px] lg:text-[14px]">
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
          <Sheet>
            <SheetTrigger asChild>
              <button className="md:hidden text-2xl text-gray-600 hover:text-black transition-colors">
                <HiMenuAlt3 />
              </button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <ul className="py-4 px-6 space-y-4 text-gray-700">
                <li>
                  <Link href="#" className="block hover:text-black transition-colors font-normal font-satoshi">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block hover:text-black transition-colors font-normal font-satoshi">
                    On Sale
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block hover:text-black transition-colors font-normal font-satoshi">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block hover:text-black transition-colors font-normal font-satoshi">
                    Brands
                  </Link>
                </li>
              </ul>
              <SheetFooter>
                <SheetClose asChild>
                  <button className="text-gray-600 hover:text-black transition-colors">
                    Close
                  </button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <h1 className="text-xl md:text-2xl font-bold font-integral text-gray-900">
            SHOP.CO
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList>
              {/* Shop Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-normal font-satoshi">Shop</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="py-2 bg-white shadow-lg rounded-lg">
                    <li>
                      <Link
                        href="./productdetails"
                        className="block px-6 py-3 text-gray-700 hover:text-white hover:bg-gray-900 rounded-md"
                      >
                        Men’s Clothes
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-6 py-3 text-gray-700 hover:text-white hover:bg-gray-900 rounded-md"
                      >
                        Women’s Clothes
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-6 py-3 text-gray-700 hover:text-white hover:bg-gray-900 rounded-md"
                      >
                        Kids’ Clothes
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-6 py-3 text-gray-700 hover:text-white hover:bg-gray-900 rounded-md"
                      >
                        Bags & Shoes
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Other Links */}
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} font-normal font-satoshi`}>
                    On Sale
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} font-normal font-satoshi`}>
                    New Arrivals
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} font-normal font-satoshi`}>
                    Brands
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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
    </header>
  );
};

export default NavBar;
