import BrandLogos from "@/components/BrandLogos";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import TopSeller from "@/components/TopSeller";
import ProductLayout from "@/components/ProductLayout";
import Reviews from "@/components/Reviews";

// Unused import removed (Image from "next/image")

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Brand Logos Section */}
      <BrandLogos />

      {/* New Arrivals Section */}
      <NewArrivals />

      {/* Top Sellers Section */}
      <TopSeller />

      {/* Product Layout Section */}
      <ProductLayout />

      {/* Reviews Section */}
      <Reviews />

    </div>
  );
}
