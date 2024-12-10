import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-[#F2F0F1] pt-6">
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
          <div>
            <button className="w-full md:w-52 mb-5 md:mb-12 inline-block text-center bg-black hover:bg-black/80 transition-all text-white px-14 py-4 rounded-full font-satoshi">
              Shop Now
            </button>
          </div>
          
          {/* Brand Stats */}
          <div className="flex md:h-full md:max-h-11 lg:max-h-[52px] xl:max-h-[68px] items-center justify-center md:justify-start flex-wrap sm:flex-nowrap md:space-x-3 lg:space-x-6 xl:space-x-6 md:mb-[116px]">
            <div className="flex flex-col">
              <span className="font-bold font-satoshi text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2 ">200+</span>
              <span className="text-xs xl:text-base text-black/60 text-nowrap font-satoshi">International Brands</span>
            </div>
            <div data-orientation="vertical" role="none" className="shrink-0 w-[1px] ml-6 md:ml-0 h-12 md:h-full bg-black/10"></div>
            <div className="flex flex-col ml-6 md:ml-0">
              <span className="font-bold font-satoshi text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">2000+</span>
              <span className="text-xs xl:text-base text-black/60 text-nowrap font-satoshi">High-Quality Products</span>
            </div>
            <div data-orientation="vertical" role="none" className="shrink-0 h-full w-[1px] hidden sm:block sm:h-12 md:h-full ml-6 md:ml-0 bg-black/10"></div>
            <div className="flex flex-col w-full text-center sm:w-auto sm:text-left mt-3 sm:mt-0 sm:ml-6 md:ml-0">
              <span className="font-bold font-satoshi text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">30,000+</span>
              <span className="text-xs xl:text-base text-black/60 text-nowrap font-satoshi">Happy Customers</span>
            </div>
          </div>
        </div>

        {/* Right Content (Image) */}
        <div className="w-full lg:w-1/2 relative flex justify-center mt-10 lg:mt-0 animate-zoomOut delay-[0.6s]">
          <Image
            src="/main.svg" 
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
            className="absolute right-7 xl:right-0 top-6 max-w-[76px] max-h-[76px] lg:max-w-24 lg:max-h-[24px] xl:max-w-[104px] xl:max-h-[104px] animate-fade"
            priority
          />
          <Image
            src="/stars-2.png" 
            alt="Decorative star"
            width={56}
            height={56}
            className="absolute left-7 md:left-0 top-28 sm:top-64 md:top-44 lg:top-56 max-w-11 max-h-11 md:max-w-14 md:max-h-14 animate-fade"
            priority
          />
        </div>
      </div>
    </section>
  );
}
