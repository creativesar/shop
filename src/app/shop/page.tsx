'use client'

<<<<<<< HEAD
import { useEffect, useState } from "react";
import BreadcrumbShop from "@/components/shop-page/BreadcrumbShop";
=======
import { useState } from "react";
import BreadcrumbShop from "@/components/shop-page/BreadcrumbShop";

>>>>>>> 80db49b (done)
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
<<<<<<< HEAD
=======
import { newArrivalsData, relatedProductData, topSellingData } from "../page";
>>>>>>> 80db49b (done)
import ProductCard from "@/components/common/ProductCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
<<<<<<< HEAD
import { Product } from "@/types/product.types";
import { client } from "@/sanity/lib/client";
import { useSearchParams } from 'next/navigation';
import { FilterProvider } from "@/components/shop-page/filters/FilterContext";
=======
>>>>>>> 80db49b (done)

const PRODUCTS_PER_PAGE = 9;
const TOTAL_PAGES = 10;

<<<<<<< HEAD
async function getAllProducts() {
  try {
    const query = `*[_type=="products"] | order(_createdAt desc){
      "id": _id,
      name,
      "title": name,
      "image": image.asset->url,
      price,
      "discount": {
        "amount": 0,
        "percentage": coalesce(discountPercent, 0)
      },
      "stock": 50
    }`;
    
    const products = await client.fetch(query);
    
    if (!products || !Array.isArray(products)) {
      console.error('Invalid products data:', products);
      return [];
    }
    
    return products.map(product => ({
      ...product,
      discount: product.discount || { amount: 0, percentage: 0 },
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export default function ShopPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search');
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        if (searchQuery) {
          // Fetch searched products
          const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`);
          const data = await response.json();
          setProducts(data.products);
        } else {
          // Fetch all products
          const allProducts = await getAllProducts();
          setProducts(allProducts);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchQuery]);

  // Get products for current page
  const limitedProducts = products.slice(0, TOTAL_PAGES * PRODUCTS_PER_PAGE);
=======
export default function ShopPage() {
  const [currentPage, setCurrentPage] = useState(1);

  // Combine all products
  const allProducts = [
    ...relatedProductData.slice(1, 5),
    ...newArrivalsData.slice(1, 4),
    ...topSellingData.slice(1, 4),
  ];

  // Restrict total products to fit 10 pages
  const limitedProducts = allProducts.slice(0, TOTAL_PAGES * PRODUCTS_PER_PAGE);

  // Get products for the current page
>>>>>>> 80db49b (done)
  const currentProducts = limitedProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

<<<<<<< HEAD
=======
  // Handle page change
>>>>>>> 80db49b (done)
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

<<<<<<< HEAD
  if (loading) {
    return <div className="text-center py-10">Loading products...</div>;
  }

  return (
    <FilterProvider>
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
                  <h1 className="font-bold text-2xl md:text-[32px]">
                    {searchQuery ? `Search Results for "${searchQuery}"` : "Casual"}
                  </h1>
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
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={currentPage === 1 ? undefined : () => handlePageChange(currentPage - 1)}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                  {Array.from({ length: Math.ceil(limitedProducts.length / PRODUCTS_PER_PAGE) }).map((_, index) => (
                    <PaginationItem key={index}>
                      <PaginationLink
                        onClick={() => handlePageChange(index + 1)}
                        isActive={currentPage === index + 1}
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext 
                      onClick={currentPage === Math.ceil(limitedProducts.length / PRODUCTS_PER_PAGE) ? undefined : () => handlePageChange(currentPage + 1)}
                      className={currentPage === Math.ceil(limitedProducts.length / PRODUCTS_PER_PAGE) ? "pointer-events-none opacity-50" : ""}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </main>
    </FilterProvider>
=======
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
>>>>>>> 80db49b (done)
  );
}
