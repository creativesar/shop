import Image from "next/image";

const BrandLogos: React.FC = () => {
  return (
    <section className="bg-black w-full py-6">
      <div className="container mx-auto flex items-center justify-center">
        {/* Horizontal grid for logos with equal gaps */}
        <div className="grid grid-cols-5 gap-x-8">
          {/* Versace */}
          <div className="flex items-center justify-center">
            <Image
              src="/versce.png"
              alt="Versace"
              width={167} // Specify the default width
              height={33} // Specify the default height
              className="w-[116.74px] h-[23.25px] sm:w-[166.48px] sm:h-[33.16px]"
            />
          </div>
          {/* Zara */}
          <div className="flex items-center justify-center">
            <Image
              src="/zara.png"
              alt="Zara"
              width={91}
              height={38}
              className="w-[63.81px] h-[26.65px] sm:w-[91px] sm:h-[38px]"
            />
          </div>
          {/* Gucci */}
          <div className="flex items-center justify-center">
            <Image
              src="/gucci.png"
              alt="Gucci"
              width={156}
              height={36}
              className="w-[109.39px] h-[25.24px] sm:w-[156px] sm:h-[36px]"
            />
          </div>
          {/* Prada */}
          <div className="flex items-center justify-center">
            <Image
              src="/parada.png"
              alt="Prada"
              width={194}
              height={32}
              className="w-[127px] h-[21px] sm:w-[194px] sm:h-[32px]"
            />
          </div>
          {/* Calvin Klein */}
          <div className="flex items-center justify-center">
            <Image
              src="/ck.png"
              alt="Calvin Klein"
              width={207}
              height={33}
              className="w-[134.84px] h-[21.75px] sm:w-[206.79px] sm:h-[33.35px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
