import React from 'react';
import Image from 'next/image';

const BottomFooter = () => {
  return (
    <div>
      <hr className="h-[1px] border-t-black/10 mb-6" />
      <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-2">
        <p className="text-sm text-center sm:text-left text-black/60 mb-4 sm:mb-0 sm:mr-1">
          Shop.co © 2000-2024, All Rights Reserved
          <a className="text-black font-medium" href="">
            Terms
          </a>
          .
        </p>
        <div className="flex items-center">
          <span className="mr-3 w-[46px] h-[30px] rounded-[5px] border-[#D6DCE5] bg-white flex items-center justify-center">
            <Image
              alt="Visa"
              width="33"
              height="100"
              decoding="async"
              className="max-h-[15px]"
              src="/Visa.svg"
            />
          </span>
          <span className="mr-3 w-[46px] h-[30px] rounded-[5px] border-[#D6DCE5] bg-white flex items-center justify-center">
            <Image
              alt="MasterCard"
              fetchpriority="high"
              width="33"
              height="100"
              decoding="async"
              className="max-h-[15px]"
              src="/mastercard.svg"
            />
          </span>
          <span className="mr-3 w-[46px] h-[30px] rounded-[5px] border-[#D6DCE5] bg-white flex items-center justify-center">
            <Image
              alt="PayPal"
              fetchpriority="high"
              width="33"
              height="100"
              decoding="async"
              className="max-h-[15px]"
              src="/paypal.svg"
            />
          </span>
          <span className="mr-3 w-[46px] h-[30px] rounded-[5px] border-[#D6DCE5] bg-white flex items-center justify-center">
            <Image
              alt="Apple Pay"
              fetchpriority="high"
              width="33"
              height="100"
              decoding="async"
              className="max-h-[15px]"
              src="/applePay.svg"
            />
          </span>
          <span className="w-[46px] h-[30px] rounded-[5px] border-[#D6DCE5] bg-white flex items-center justify-center">
            <Image
              alt="Google Pay"
              fetchpriority="high"
              width="33"
              height="100"
              decoding="async"
              className="max-h-[15px]"
              src="/googlePay.svg"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
