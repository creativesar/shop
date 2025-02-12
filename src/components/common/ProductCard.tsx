import React from "react";
import Rating from "../ui/Rating";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product.types";

type ProductCardProps = {
  data: Product;
};

const ProductCard = ({ data }: ProductCardProps) => {
  const formattedTitle = data.title.split(" ").join("-");
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
    >
      {/* Product Image */}
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gray-100">
        <Image
          src={data.srcUrl}
          width={300}
          height={300}
          alt={data.title}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          priority
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      </div>

      {/* Product Title */}
      <strong className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-black transition-colors duration-300">
        {data.title}
      </strong>

      {/* Rating Section */}
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

      {/* Price & Discount */}
      <div className="flex items-center gap-2 mt-2">
        <span className="text-xl font-bold text-gray-900">${discountedPrice}</span>

        {/* Original Price (if discounted) */}
        {data.discount.percentage > 0 || data.discount.amount > 0 ? (
          <span className="text-lg font-medium text-gray-400 line-through">${data.price}</span>
        ) : null}

        {/* Discount Badge */}
        {data.discount.percentage > 0 ? (
          <span className="px-3 py-1 text-xs font-medium text-red-600 bg-red-100 rounded-full">
            -{data.discount.percentage}%
          </span>
        ) : data.discount.amount > 0 ? (
          <span className="px-3 py-1 text-xs font-medium text-red-600 bg-red-100 rounded-full">
            -${data.discount.amount}
          </span>
        ) : null}
      </div>
    </Link>
  );
};

export default ProductCard;
