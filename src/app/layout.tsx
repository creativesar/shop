import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import BottomFooter from "@/components/BottomFooter";

export const metadata: Metadata = {
  title: "Shop.co",
  description: "hackathon template 01",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <footer>
          <Footer />
          <BottomFooter />
        </footer>
      </body>
    </html>
  );
}
