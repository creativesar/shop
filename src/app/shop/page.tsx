'use client'

import { useState } from "react";
import BreadcrumbShop from "@/components/shop-page/BreadcrumbShop";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MobileFilters from "@/components/shop-page/filters/MobileFilters";
import Filters from "@/components/shop-page/filters/page";
import { FiSliders } from "react-icons/fi";
import { newArrivalsData, relatedProductData, topSellingData } from "../page";
import ProductCard from "@/components/common/ProductCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PRODUCTS_PER_PAGE = 9;
const TOTAL_PAGES = 10;

export default function ShopPage() {
  const [currentPage, setCurrentPage] = useState(1);

  // Combine all products
  const allProducts = [
    ...relatedProductData.slice(1, 5),
    ...newArrivalsData.slice(1, 4),
    ...topSellingData.slice(1, 4),
  ];

  
  const limitedProducts = allProducts.slice(0, TOTAL_PAGES * PRODUCTS_PER_PAGE);

 
  const currentProducts = limitedProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

 
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
        <BreadcrumbShop />
        <div className="flex md:space-x-5 items-start">
          <div className="hidden md:block min-w-[295px] max-w-[295px] border border-black/10 rounded-[20px] px-5 md:px-6 py-5 space-y-5 md:space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-bold text-black text-xl">Filters</span>
              <FiSliders className="text-2xl text-black/40" />
            </div>
            <Filters />
          </div>
          <div className="flex flex-col w-full space-y-5">
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <div className="flex items-center justify-between">
                <h1 className="font-bold text-2xl md:text-[32px]">Casual</h1>
                <MobileFilters />
              </div>
              <div className="flex flex-col sm:items-center sm:flex-row">
                <span className="text-sm md:text-base text-black/60 mr-3">
                  Showing {PRODUCTS_PER_PAGE * (currentPage - 1) + 1}-
                  {Math.min(currentPage * PRODUCTS_PER_PAGE, limitedProducts.length)}{" "}
                  of {limitedProducts.length} Products
                </span>
                <div className="flex items-center">
                  Sort by:{" "}
                  <Select defaultValue="most-popular">
                    <SelectTrigger className="font-medium text-sm px-1.5 sm:text-base w-fit text-black bg-transparent shadow-none border-none">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="most-popular">Most Popular</SelectItem>
                      <SelectItem value="low-price">Low Price</SelectItem>
                      <SelectItem value="high-price">High Price</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} data={product} />
              ))}
            </div>
            <hr className="border-t-black/10" />
            <Pagination className="justify-between">
              <div className="flex items-center space-x-4">
                <PaginationPrevious
                  href="#"
                  className="border border-black/10"
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                />
                <span className="text-sm text-black/60">
                  Page {currentPage} of {TOTAL_PAGES}
                </span>
              </div>
              <PaginationContent>
                {[...Array(TOTAL_PAGES)].map((_, index) => (
                  <PaginationItem key={index}>
                    <PaginationLink
                      href="#"
                      className={`text-black/50 font-medium text-sm ${
                        currentPage === index + 1 ? "font-bold" : ""
                      }`}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
              </PaginationContent>
              <PaginationNext
                href="#"
                className="border border-black/10"
                onClick={() => handlePageChange(Math.min(TOTAL_PAGES, currentPage + 1))}
              />
            </Pagination>
          </div>
        </div>
      </div>
    </main>
  );
}
