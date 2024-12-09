import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-white pt-6">
      {/* Hero Content */}
      <div className="container mx-auto flex flex-wrap items-center justify-between px-6 lg:px-20">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h1 className="text-4xl sm:text-6xl font-semibold font-['IntegralCF'] leading-tight tracking-tight animate-zoomOut">
            FIND CLOTHES <br />
            THAT MATCHES <br />
            YOUR STYLE
          </h1>
          <p className="text-gray-600 max-w-md animate-zoomOut delay-[0.2s]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Link
            href="/shop"
            className="bg-black text-white w-[210px] h-[52px] flex items-center justify-center rounded-md text-lg font-medium hover:bg-gray-800 transition animate-zoomOut delay-[0.4s]"
          >
            Shop Now
          </Link>
        </div>

        {/* Right Content (Image) */}
        <div className="w-full lg:w-1/2 relative flex justify-center mt-10 lg:mt-0 animate-zoomOut delay-[0.6s]">
          <Image
            src="/main.svg" // Update to your image path
            alt="Fashionable models"
            width={500}
            height={300}
          />
          {/* Decorative Stars */}
          <Image
            src="/stars.png"
            alt="Decorative star"
            width={104}
            height={104}
            className="absolute top-5 right-20 hidden sm:block animate-fade"
          />
          <Image
            src="/stars-2.png"
            alt="Decorative star"
            width={56}
            height={56}
            className="absolute top-48 left-2 transform -translate-x-1/2 -translate-y-1/2 hidden sm:block animate-fade"
          />
        </div>
      </div>
    </section>
  );
}
