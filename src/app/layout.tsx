import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { satoshi } from "@/styles/fonts";
import TopBanner from "@/components/layout/Banner/TopBanner";
import TopNavbar from "@/components/layout/Navbar/TopNavbar/page";
import Footer from "@/components/layout/Footer/page";
import HolyLoader from "holy-loader";
import Providers from "./providers";
import { FilterProvider } from '@/components/shop-page/filters/FilterContext';



export const metadata: Metadata = {
  title: "Shopco",
  description: "Generated by create next app",
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
      <html lang="en">
        <body className={satoshi.className}>
          <HolyLoader color="#868686" />
          <TopBanner />
          <FilterProvider>
            <Providers>
              <TopNavbar />
              {children}
            </Providers>
          </FilterProvider>
          <Footer />
        </body>
      </html>
   
  );
}
