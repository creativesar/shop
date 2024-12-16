import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

const dressStylesData = [
  { title: "Casual", slug: "/shop?style=casual" },
  { title: "Formal", slug: "/shop?style=formal" },
  { title: "Party", slug: "/shop?style=party" },
];

const DressStyleSection = () => {
  return (
    <div>
      {dressStylesData.map((style, idx) => (
        <Link key={idx} href={style.slug} className="flex justify-between py-2">
          {style.title} <MdKeyboardArrowRight />
        </Link>
      ))}
    </div>
  );
};

export default DressStyleSection;
