'use client';

import React, { useState } from 'react';

type Review = {
  id: number;
  name: string;
  rating: number;
  testimonial: string;
};

const Reviews: Review[] = [
  {
    id: 1,
    name: 'Alex K.',
    rating: 5,
    testimonial:
      'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.',
  },
  {
    id: 2,
    name: 'Sarah M.',
    rating: 5,
    testimonial:
      'I am blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I\'ve bought has exceeded my expectations.',
  },
  {
    id: 3,
    name: 'James L.',
    rating: 5,
    testimonial:
      'As someone who is always on the lookout for unique fashion pieces, I am thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.',
  },
];

type StarRatingProps = {
  rating: number;
};

const StarRating: React.FC<StarRatingProps> = ({ rating }) => (
  <div className="flex mb-2">
    {Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927a1 1 0 011.902 0l1.434 4.414a1 1 0 00.95.69h4.635a1 1 0 01.592 1.806l-3.748 2.73a1 1 0 00-.364 1.118l1.434 4.415a1 1 0 01-1.536 1.118L10 14.347l-3.748 2.73a1 1 0 01-1.536-1.118l1.434-4.415a1 1 0 00-.364-1.118L2.038 9.837a1 1 0 01.592-1.806h4.635a1 1 0 00.95-.69L9.049 2.927z" />
      </svg>
    ))}
  </div>
);

type ReviewCardProps = {
  name: string;
  rating: number;
  testimonial: string;
};

const ReviewCard: React.FC<ReviewCardProps> = ({ name, rating, testimonial }) => (
  <div className="h-[186.19px] w-[358px] border rounded-lg p-4 text-center bg-white shadow-sm flex flex-col items-start">
    <div className="flex flex-col items-start mb-2">
      <StarRating rating={rating} />
      <div className="flex items-center gap-3">
        <h3 className="font-bold font-satoshi text-[16px] text-gray-800">{name}</h3>
        <img src="/frame.png" alt="Frame" className="w-6 h-6 object-cover" />
      </div>
    </div>
    <p className="text-left text-[14px] text-gray-600">{testimonial}</p>
  </div>
);

const ReviewsSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold font-integral mb-10">OUR HAPPY CUSTOMERS</h2>
        <div className="flex justify-center gap-6 overflow-auto">
          {Reviews.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
