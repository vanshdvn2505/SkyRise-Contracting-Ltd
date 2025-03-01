import React from "react";

const partners = [
  { name: "Chana Woodworking", logo: "/img1.jpg", url: "https://chana.com" },
  { name: "Shark Epoxy", logo: "/img1.jpg", url: "https://sharkepoxy.com" },
  { name: "SSEI", logo: "/img1.jpg", url: "https://ssei.com" },
  { name: "Space Ceil", logo: "/img1.jpg", url: "https://spaceceil.com" },
];

const TrustedPartners: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="bg-[#ca0606] text-white py-2 overflow-hidden whitespace-nowrap">
        <div className="marquee">
          <div className="marquee-content">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-lg font-semibold px-6">
                Contact Us: 1 (825) 454-9799
              </span>
            ))}
          </div>
          <div className="marquee-content">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-lg font-semibold px-6">
                Contact Us: 1 (825) 454-9799
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#161616] text-white py-12 text-center flex flex-col justify-center items-center gap-10">
        <h2 className="text-3xl font-bold text-[#b22222] mb-6">Our Trusted Partners</h2>
        
        <div className="relative w-full overflow-hidden">
          <div className="marquee">
            <div className="marquee-content">
              {[...partners, ...partners].map((partner, index) => (
                <a
                  key={index}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-105 transition flex-shrink-0 w-[150px] mx-4"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-24 w-[150px] object-contain rounded-md"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .marquee {
            display: flex;
            width: max-content;
            animation: marquee 25s linear infinite;
          }

          .marquee-content {
            display: flex;
            gap: 40px;
            white-space: nowrap;
          }

          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};

export default TrustedPartners;
