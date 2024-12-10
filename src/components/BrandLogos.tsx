import React from 'react';
import Image from 'next/image';

const BrandLogos = () => {
  return (
    <div className="bg-black jusity">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-center md:justify-between py-5 md:py-0 sm:px-4 xl:px-16 space-x-7">
        <Image 
          alt="versace" 
          className="h-auto w-auto max-w-[116px] lg:max-w-48 max-h-[26px] lg:max-h-9 my-5 md:my-11" 
          src="/versce.png" 
          width={116} // Specify the width
          height={26} // Specify the height
        />
        <Image 
          alt="zara" 
          className="h-auto w-auto max-w-[116px] lg:max-w-48 max-h-[26px] lg:max-h-9 my-5 md:my-11" 
          src="/zara.png" 
          width={116} 
          height={26} 
        />
        <Image 
          alt="gucci" 
          className="h-auto w-auto max-w-[116px] lg:max-w-48 max-h-[26px] lg:max-h-9 my-5 md:my-11" 
          src="/gucci.png" 
          width={116} 
          height={26} 
        />
        <Image 
          alt="prada" 
          className="h-auto w-auto max-w-[116px] lg:max-w-48 max-h-[26px] lg:max-h-9 my-5 md:my-11" 
          src="/parada.png" 
          width={116} 
          height={26} 
        />
        <Image 
          alt="calvin-klein" 
          className="h-auto w-auto max-w-[116px] lg:max-w-48 max-h-[26px] lg:max-h-9 my-5 md:my-11" 
          src="/ck.png" 
          width={116} 
          height={26} 
        />
      </div>
    </div>
  );
};

export default BrandLogos;
