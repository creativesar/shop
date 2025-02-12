'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Rating from '../ui/Rating';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product.types';

type ProductCardProps = {
  data: Product;
};

const ProductCard = ({ data }: ProductCardProps) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const discountBadgeRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: cardRef.current }
    );
  }, []);

  const handleMouseEnter = () => {
    gsap.to(imageRef.current, { scale: 1.1, duration: 0.5, ease: 'power3.out' });
    gsap.to(overlayRef.current, { opacity: 1, duration: 0.5, ease: 'power3.out' });
    gsap.fromTo(
      discountBadgeRef.current,
      { scale: 0, rotate: -20 },
      { scale: 1, rotate: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' }
    );
  };

  const handleMouseLeave = () => {
    gsap.to(imageRef.current, { scale: 1, duration: 0.5, ease: 'power3.out' });
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.5, ease: 'power3.out' });
  };

  const formattedTitle = data.title.split(' ').join('-');
  const discountedPrice =
    data.discount.percentage > 0
      ? Math.round(data.price - (data.price * data.discount.percentage) / 100)
      : data.discount.amount > 0
      ? data.price - data.discount.amount
      : data.price;

  return (
    <Link
      href={`/shop/product/${data.id}/${formattedTitle}`}
      className="group flex flex-col items-start transition-all duration-300"
      ref={cardRef}
    >
      <div
        className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-100"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          ref={imageRef}
          src={data.srcUrl}
          width={300}
          height={300}
          alt={data.title}
          className="w-full h-full object-contain transition-transform duration-500"
          priority
        />
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-black/10 opacity-0 transition-all duration-500"
        ></div>
        {data.discount.percentage > 0 || data.discount.amount > 0 ? (
          <div
            ref={discountBadgeRef}
            className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 text-xs font-medium rounded-full shadow-lg"
          >
            {data.discount.percentage > 0
              ? `-${data.discount.percentage}%`
              : `-$${data.discount.amount}`}
          </div>
        ) : null}
      </div>

      <strong className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-black transition-colors duration-300">
        {data.title}
      </strong>

      <div className="flex items-center gap-2 mt-1">
        <Rating
          initialValue={data.rating}
          allowFraction
          SVGclassName="inline-block"
          emptyClassName="fill-gray-50"
          size={18}
          readonly
        />
        <span className="text-sm text-gray-700">
          {data.rating.toFixed(1)} <span className="text-gray-500">/5</span>
        </span>
      </div>

      <div className="flex items-center gap-2 mt-2">
        <span className="text-xl font-bold text-gray-900">${discountedPrice}</span>
        {data.discount.percentage > 0 || data.discount.amount > 0 ? (
          <span className="text-lg font-medium text-gray-400 line-through">${data.price}</span>
        ) : null}
      </div>
    </Link>
  );
};

export default ProductCard;
