const PartnersSection = () => {
    const partners = [
      { src: "/img1.jpg", alt: "Pairs Auto" },
      { src: "/img1.jpg", alt: "Subway" },
      { src: "/img1.jpg", alt: "Car Deals 4U" },
    ];
  
    return (
      <section className="bg-gray-100 py-12">
        <h2 className="text-3xl font-bold text-[#ca0606] text-center mb-8">Our Partners</h2>
        <div className="flex justify-center items-center gap-8 flex-wrap">
          {partners.map((partner, index) => (
            <img
              key={index}
              src={partner.src}
              alt={partner.alt}
              className="h-24 w-auto object-contain bg-white shadow-md p-4 rounded-lg"
            />
          ))}
        </div>
      </section>
    );
  };
  
  export default PartnersSection;
  