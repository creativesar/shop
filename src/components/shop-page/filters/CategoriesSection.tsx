import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

const categoriesData = [
  { title: "T-shirts", slug: "/shop?category=t-shirts" },
  { title: "Shorts", slug: "/shop?category=shorts" },
  { title: "Shirts", slug: "/shop?category=shirts" },
];

const CategoriesSection = () => {
  return (
    <div className="flex flex-col space-y-0.5 text-black/60">
      {categoriesData.map((category, idx) => (
        <Link key={idx} href={category.slug} className="flex justify-between py-2">
          {category.title} <MdKeyboardArrowRight />
        </Link>
      ))}
    </div>
  );
};

export default CategoriesSection;
