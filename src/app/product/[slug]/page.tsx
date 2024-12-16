// Import necessary product data
import {
    newArrivalsData,
    relatedProductData,
    topSellingData,
  } from "@/app/page";
  import { Product } from "@/types/product.types";
  import { notFound } from "next/navigation";
  
  const data: Product[] = [
    ...newArrivalsData,
    ...topSellingData,
    ...relatedProductData,
  ];
  
  // Generate static params for the dynamic slug
  export function generateStaticParams() {
    return data.map((product) => ({
      slug: [product.id.toString()],
    }));
  }
  
  // Main Product Page Component
  export default function ProductPage({ params }: { params: { slug: string[] } }) {
    const productData = data.find(
      (product) => product.id === Number(params.slug[0])
    );
  
    if (!productData) notFound();
  
    return (
      <main>
        {/* Product Page Content */}
      </main>
    );
  }
  