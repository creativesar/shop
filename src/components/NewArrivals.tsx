'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { ScrollArea } from "@/components/ui/scroll-area"

interface Product {
  id: number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  rating?: number;
  reviews?: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'T-shirt with Tape Details',
    href: '#',
    imageSrc: '/newarrival-1.png',
    imageAlt: 'Front of T-shirt with tape details.',
    price: '$120',
    oldPrice: '$145',
    discount: '20%',
    rating: 4.5,
    reviews: 432,
  },
  {
    id: 2,
    name: 'Skinny Fit Jeans',
    href: '#',
    imageSrc: '/newarrival-2.png',
    imageAlt: 'Front of skinny fit jeans.',
    price: '$240',
    oldPrice: '$260',
    discount: '10%',
    rating: 4.8,
    reviews: 290,
  },
  {
    id: 3,
    name: 'Checkered Shirt',
    href: '#',
    imageSrc: '/newarrival-3.png',
    imageAlt: 'Front of checkered shirt.',
    price: '$180',
    rating: 4.4,
    reviews: 145,
  },
  {
    id: 4,
    name: 'Sleeve Striped T-shirt',
    href: '#',
    imageSrc: '/newarrival-4.png',
    imageAlt: 'Front of sleeve striped T-shirt.',
    price: '$130',
    oldPrice: '$150',
    discount: '15%',
    rating: 4.2,
    reviews: 312,
  },
];

// Component to render stars with reviews
const Rating = ({ rating, reviews }: { rating: number; reviews?: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center justify-center">
      <div className="flex space-x-1">
        {Array.from({ length: fullStars }, (_, i) => (
          <span key={i} className="text-yellow-500">★</span>
        ))}
        {hasHalfStar && <span className="text-yellow-500">⯨</span>}
        {Array.from({ length: 5 - fullStars - (hasHalfStar ? 1 : 0) }, (_, i) => (
          <span key={i} className="text-gray-300">★</span>
        ))}
      </div>
      {reviews && (
        <span className="ml-2 text-sm text-gray-500">({reviews})</span>
      )}
    </div>
  );
};

export default function NewArrivals() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Animated "New Arrivals" Header */}
        <h2 className="text-3xl font-semibold font-['IntegralCF'] tracking-tight text-gray-900 text-center animate__animated animate__fadeInDown">
          New Arrivals
        </h2>
        
        <div className="mt-8">
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              320: { slidesPerView: 1 },
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="product-slider"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                {/* Product Box with Zoom Animation */}
                <div className="group relative w-[295px] h-[298px] bg-transparent rounded-md p-4">
                  <Image
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    width={295}
                    height={200} // Fixed height for all images
                    className="w-full h-[200px] rounded-md object-cover transition-transform duration-300 group-hover:scale-105 animate__animated animate__zoomIn"
                  />
                  <div className="mt-2 flex flex-col items-center text-center">
                    <h3 className="text-sm font-bold text-gray-900">
                      <a href={product.href}>{product.name}</a>
                    </h3>
                    <div className="mt-1 text-gray-500 text-sm">
                      <Rating rating={product.rating || 0} reviews={product.reviews} />
                    </div>
                    <div className="mt-2 flex items-center space-x-2">
                      <p className="text-lg font-semibold text-gray-900">{product.price}</p>
                      {product.oldPrice && (
                        <p className="text-sm line-through text-gray-500">{product.oldPrice}</p>
                      )}
                      {product.discount && (
                        <p className="text-sm font-medium text-red-500">{product.discount}</p>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        {/* View All Button with Bottom-to-Top Animation */}
        <div className="mt-10 flex justify-center animate__animated animate__fadeInUp animate__delay-1s">
          <button className="w-[218px] h-[52px] bg-white shadow-md text-black py-2 px-6 rounded-full hover:bg-gray-800 hover:text-white transition">
            View All
          </button>
        </div>
      </div>
    </div>
  );
}
