import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="relative">
        {/* Background Section */}
        <div className="absolute bottom-0 w-full h-1/2 bg-[#F0F0F0]"></div>
        <div className="px-4">
          {/* Newsletter Section */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 py-9 md:py-11 px-6 md:px-16 max-w-frame mx-auto bg-black rounded-[20px]">
            <p className="font-bold font-integral text-[32px] md:text-[40px] text-white mb-9 md:mb-0">
              STAY UP TO DATE ABOUT OUR LATEST OFFERS
            </p>
            <div className="flex items-center">
              <div className="flex flex-col max-w-[349px] mx-auto">
                {/* Email Input */}
                <div className="input-group focus-within:shadow-lg pl-4 transition-all relative items-center w-full rounded-full overflow-hidden flex bg-white mb-[14px]">
                  <div className="input-group-text mr-3">
                    <Image
                      alt="email"
                      width="20"
                      height="20"
                      decoding="async"
                      className="min-w-5 min-h-5"
                      src="/envelope.svg"
                    />
                  </div>
                  <input
                    className="input-control w-full py-3 pr-4 outline-none placeholder:font-normal bg-transparent placeholder:text-black/40 placeholder:text-sm sm:placeholder:text-base"
                    autoCorrect="off"
                    spellCheck="false"
                    type="email"
                    placeholder="Enter your email address"
                    name="email"
                  />
                </div>
                {/* Subscribe Button */}
                <button
                  className="inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-secondary-foreground shadow-sm hover:bg-secondary/80 text-sm sm:text-base font-medium bg-white h-12 rounded-full px-4 py-3"
                  aria-label="Subscribe to Newsletter"
                  type="button"
                >
                  Subscribe to Newsletter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="pt-8 md:pt-[50px] bg-[#F0F0F0] px-6 pb-4">
        <div className="max-w-frame mx-auto">
          <nav className="lg:grid lg:grid-cols-12 mb-8">
            {/* Brand Information */}
            <div className="flex flex-col lg:col-span-3 lg:max-w-[248px]">
              <h1 className="text-[28px] lg:text-[32px] mb-6 font-bold font-integral">SHOP.CO</h1>
              <p className="text-black/60 text-sm mb-9">
                We have clothes that suit your style and which you’re proud to wear. From women to men.
              </p>
              {/* Social Media Icons */}
              <div className="flex items-center">
                {[
                  { href: "https://twitter.com", icon: "twitter-icon-path" },
                  { href: "https://facebook.com", icon: "facebook-icon-path" },
                  { href: "https://instagram.com", icon: "instagram-icon-path" },
                  { href: "https://github.com", icon: "github-icon-path" },
                ].map((item, index) => (
                  <a
                    key={index}
                    className="bg-white hover:bg-black hover:text-white transition-all mr-3 w-7 h-7 rounded-full border border-black/20 flex items-center justify-center p-1.5"
                    href={item.href}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d={item.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            <div className="hidden lg:grid col-span-9 lg:grid-cols-4 lg:pl-10">
              {[
                {
                  title: "company",
                  links: ["about", "features", "works", "career"],
                },
                {
                  title: "help",
                  links: [
                    "customer support",
                    "delivery details",
                    "terms & conditions",
                    "privacy policy",
                  ],
                },
                {
                  title: "faq",
                  links: ["account", "manage deliveries", "orders", "payment methods"],
                },
                {
                  title: "get in touch",
                  links: [
                    { text: "info@shop.co", isPlainText: true },
                    { text: "+1 (888) 123-4567", isPlainText: true },
                    { text: "New York, USA", isPlainText: true },
                  ],
                },
              ].map((section, index) => (
                <section key={index} className="flex flex-col mt-5">
                  <h3 className="font-medium text-sm md:text-base uppercase tracking-widest mb-6">
                    {section.title}
                  </h3>
                  {section.links.map((link, linkIndex) =>
                    typeof link === "string" ? (
                      <a
                        key={linkIndex}
                        className="capitalize text-black/60 text-sm md:text-base mb-4 w-fit"
                        href="#"
                      >
                        {link}
                      </a>
                    ) : (
                      <p
                        key={linkIndex}
                        className="text-black/60 text-sm md:text-base mb-5"
                      >
                        {link.text}
                      </p>
                    )
                  )}
                </section>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
