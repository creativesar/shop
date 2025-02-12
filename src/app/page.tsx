import ProductListSec from "@/components/common/ProductListSec";
import Brands from "@/components/homepage/Brands/page";
import DressStyle from "@/components/homepage/DressStyle/page";
import Header from "@/components/homepage/Header/page";
import Reviews from "@/components/homepage/Reviews/page";
import { Product } from "@/types/product.types";
import { Review } from "@/types/review.types";
<<<<<<< HEAD
import { client } from "@/sanity/lib/client";

async function getNewArrivals() {
  try {
    console.log('Fetching new arrivals...');
    const query = `*[_type=="products"] {
     _id,discountPercent,category,price,sizes,
    "image":image.asset->url,
    name
    } [15...19]`;
    
    const products = await client.fetch(query);
    console.log('New Arrivals Data:', products);
    
    if (!products || !Array.isArray(products)) {
      console.error('Invalid products data:', products);
      return [];
    }
    
    // Transform the data to match our Product type
    return products.map(product => ({
      ...product,
      id: product._id,
      description: ''
    }));
  } catch (error) {
    console.error('Error fetching new arrivals:', error);
    return [];
  }
}

async function getTopSelling() {
  try {
    console.log('Fetching top selling...');
    const query = `*[_type=="products"] {
     _id,discountPercent,category,price,sizes,
    "image":image.asset->url,
    name
    } [10...14]`;
    
    const products = await client.fetch(query);
    console.log('Top Selling Data:', products);
    
    if (!products || !Array.isArray(products)) {
      console.error('Invalid products data:', products);
      return [];
    }
    
    // Transform the data to match our Product type
    return products.map(product => ({
      ...product,
      id: product._id,
      description: ''
    }));
  } catch (error) {
    console.error('Error fetching top selling:', error);
    return [];
  }
}
=======


export const newArrivalsData: Product[] = [
  {
    id: 1,
    title: "T-shirt with Tape Details",
    srcUrl: "/images/pic1.png",
    gallery: ["/images/pic1.png", "/images/pic10.png", "/images/pic11.png"],
    price: 120,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
    stock: 50, // Added stock
  },
  {
    id: 2,
    title: "Skinny Fit Jeans",
    srcUrl: "/images/pic2.png",
    gallery: ["/images/pic2.png"],
    price: 260,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 3.5,
    stock: 30, // Added stock
  },
  {
    id: 3,
    title: "Chechered Shirt",
    srcUrl: "/images/pic3.png",
    gallery: ["/images/pic3.png"],
    price: 180,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
    stock: 20, // Added stock
  },
  {
    id: 4,
    title: "Sleeve Striped T-shirt",
    srcUrl: "/images/pic4.png",
    gallery: ["/images/pic4.png", "/images/pic10.png", "/images/pic11.png"],
    price: 160,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 4.5,
    stock: 100, // Added stock
  },
];

export const topSellingData: Product[] = [
  {
    id: 5,
    title: "Vertical Striped Shirt",
    srcUrl: "/images/pic5.png",
    gallery: ["/images/pic5.png", "/images/pic10.png", "/images/pic11.png"],
    price: 232,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 5.0,
    stock: 50, // Added stock
  },
  {
    id: 6,
    title: "Courage Graphic T-shirt",
    srcUrl: "/images/pic6.png",
    gallery: ["/images/pic6.png", "/images/pic10.png", "/images/pic11.png"],
    price: 145,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.0,
    stock: 40, // Added stock
  },
  {
    id: 7,
    title: "Loose Fit Bermuda Shorts",
    srcUrl: "/images/pic7.png",
    gallery: ["/images/pic7.png"],
    price: 80,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 3.0,
    stock: 60, // Added stock
  },
  {
    id: 8,
    title: "Faded Skinny Jeans",
    srcUrl: "/images/pic8.png",
    gallery: ["/images/pic8.png"],
    price: 210,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
    stock: 20, // Added stock
  },
];

export const relatedProductData: Product[] = [
  {
    id: 12,
    title: "Polo with Contrast Trims",
    srcUrl: "/images/pic12.png",
    gallery: ["/images/pic12.png", "/images/pic10.png", "/images/pic11.png"],
    price: 242,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 4.0,
    stock: 80, // Added stock
  },
  {
    id: 13,
    title: "Gradient Graphic T-shirt",
    srcUrl: "/images/pic13.png",
    gallery: ["/images/pic13.png", "/images/pic10.png", "/images/pic11.png"],
    price: 145,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 3.5,
    stock: 70, // Added stock
  },
  {
    id: 14,
    title: "Polo with Tipping Details",
    srcUrl: "/images/pic14.png",
    gallery: ["/images/pic14.png"],
    price: 180,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
    stock: 50, // Added stock
  },
  {
    id: 15,
    title: "Black Striped T-shirt",
    srcUrl: "/images/pic15.png",
    gallery: ["/images/pic15.png"],
    price: 150,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 5.0,
    stock: 40, // Added stock
  },
  {
    id: 16,
    title: "One Life Graphic T-Shirt",
    srcUrl: "/images/pic16.png",
    gallery: ["/images/pic16.png", "/images/pic10.png", "/images/pic11.png"],
    price: 300,
    discount: {
      amount: 0,
      percentage: 40,
    },
    rating: 4.5,
    stock: 60, // Added stock
  },
];
>>>>>>> 80db49b (done)

export const reviewsData: Review[] = [
  {
    id: 1,
    user: "Alex K.",
    content:
<<<<<<< HEAD
      '"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."',
=======
      '"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”',
>>>>>>> 80db49b (done)
    rating: 5,
    date: "August 14, 2023",
  },
  {
    id: 2,
    user: "Sarah M.",
<<<<<<< HEAD
    content:
      '"I love how Shop.co curates its collection. Every piece feels carefully chosen, and the quality is consistently impressive. Shopping here has helped me build a wardrobe that I truly love."',
    rating: 5,
    date: "December 9, 2023",
  },
  {
    id: 3,
    user: "James L.",
    content:
      '"The attention to detail in their clothing is remarkable. From the stitching to the choice of fabrics, everything speaks quality. Its refreshing to find a brand that doesnt compromise."',
    rating: 5,
    date: "December 23, 2023",
  },
  {
    id: 4,
    user: "Emily R.",
    content:
      '"What stands out about Shop.co is not just their clothes, but the entire shopping experience. The website is user-friendly, the delivery is prompt, and their customer service is exceptional."',
    rating: 5,
    date: "December 29, 2023",
  },
];

export default async function Home() {
  const newArrivals = await getNewArrivals();
  const topSelling = await getTopSelling();

  return (
    <main>
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <Header />
        <Brands />
        <div className="mb-[50px] sm:mb-20">
          <ProductListSec title="New Arrivals" data={newArrivals} viewAllLink="/shop" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <ProductListSec title="Top Selling" data={topSelling} viewAllLink="/shop" />
        </div>
        <DressStyle />
        <Reviews reviewsData={reviewsData} />
      </div>
    </main>
  );
}
=======
    content: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
    rating: 5,
    date: "August 15, 2023",
  },
  {
    id: 3,
    user: "Ethan R.",
    content: `"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."`,
    rating: 5,
    date: "August 16, 2023",
  },
  {
    id: 4,
    user: "Olivia P.",
    content: `"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."`,
    rating: 5,
    date: "August 17, 2023",
  },
  {
    id: 5,
    user: "Liam K.",
    content: `"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."`,
    rating: 5,
    date: "August 18, 2023",
  },
  {
    id: 6,
    user: "Samantha D.",
    content: `"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."`,
    rating: 5,
    date: "August 19, 2023",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <Brands />
      <main className="my-[50px] sm:my-[72px]">
        <ProductListSec
          title="NEW ARRIVALS"
          data={newArrivalsData}
          viewAllLink="/#new-arrivals"
        />
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <hr className="h-[1px] border-t-black/10 my-10 sm:my-16" />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <ProductListSec
            title="top selling"
            data={topSellingData}
            viewAllLink="/#top-selling"
          />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <DressStyle />
        </div>
        <Reviews data={reviewsData} />
      </main>
    </>
  );
}


>>>>>>> 80db49b (done)
