export type Discount = {
  amount: number;
  percentage: number;
};

export type Product = {
<<<<<<< HEAD
  id: string;
  discountPercent?: number;
  category?: string;
  price: number;
  sizes: string[];
  image: string;
  gallery?: string[];
  description: string;
  name: string;
  title?: string;
=======
  id: number;
  title: string;
  srcUrl: string;
  gallery?: string[];
  price: number;
  discount: Discount;
  rating: number;
>>>>>>> 80db49b (done)
  stock: number;
};
