'use client';

import React, { useState } from "react";

const Reviews = [
  {
    id: 1,
    name: "Alex K.",
    rating: 5,
    testimonial:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    id: 2,
    name: "Sarah M.",
    rating: 5,
    testimonial:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    id: 3,
    name: "James L.",
    rating: 5,
    testimonial:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
];

const StarRating = ({ rating }) => (
  <div className="flex mb-2">
    {Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`h-5 w-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927a1 1 0 011.902 0l1.434 4.414a1 1 0 00.95.69h4.635a1 1 0 01.592 1.806l-3.748 2.73a1 1 0 00-.364 1.118l1.434 4.415a1 1 0 01-1.536 1.118L10 14.347l-3.748 2.73a1 1 0 01-1.536-1.118l1.434-4.415a1 1 0 00-.364-1.118L2.038 9.837a1 1 0 01.592-1.806h4.635a1 1 0 00.95-.69L9.049 2.927z" />
      </svg>
    ))}
  </div>
);

const ReviewCard = ({ name, rating, testimonial }) => (
  <div className="border rounded-lg p-6 text-center bg-white shadow-sm">
    <StarRating rating={rating} />
    <p className="italic text-gray-600 mb-4">"{testimonial}"</p>
    <h3 className="font-bold text-gray-800">{name}</h3>
  </div>
);

const ReviewsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Reviews.length) % Reviews.length);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold font-integral mb-10">OUR HAPPY CUSTOMERS</h2>
        <div className="relative">
          <div className="flex justify-center gap-6 overflow-hidden">
            {Reviews.map((review, index) => (
              <div
                key={review.id}
                className={`flex-none w-80 transform transition-transform duration-300 ${
                  index === currentSlide ? "scale-100 opacity-100" : "scale-90 opacity-50"
                }`}
              >
                <ReviewCard {...review} />
              </div>
            ))}
          </div>
          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
          >
            &#8249;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
