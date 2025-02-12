export type Discount = {
  amount: number;
  percentage: number;
};

export type Product = {
  reviews: ReactNode;
  id: number;
  title: string;
  srcUrl: string;
  gallery?: string[];
  price: number;
  discount: Discount;
  rating: number;
};
