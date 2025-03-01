
const ServiceCard = ({ title, image, description, points } : { title: string, image: string, description: string, points: string[]}) => {
  return (
    <div className="flex flex-col items-center text-center p-4 max-w-lg">
      <h2 className="text-xl font-semibold">{title}</h2>
      <img src={image} alt={title} className="w-full h-56 object-cover rounded-lg mt-7" />
      <p className="text-gray-600 mt-2">{description}</p>
      <ul className="mt-2 text-gray-500 list-disc text-left px-6">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <ContactSection />
    </div>
  );
};

const ContactSection = () => (
  <div className="text-center text-red-600 text-lg font-bold mt-4">
    (825) 454-9799
  </div>
);

const VisionSection = () => {
  const services = [
    {
      title: "Get A Construction Budgetary Report",
      image: "/img1.jpg",
      description: "FREE Consultation Includes:",
      points: [
        "Basic Market Price Estimate for Budget & Evaluate Cost",
        "Based on Existing Drawings or Relevant Information",
        "45 min Discovery Call",
      ],
    },
    {
      title: "Project Assessment & Planning Services",
      image: "/img1.jpg",
      description: "Phase 1 Includes:",
      points: [
        "Electrical Planning",
        "Plumbing & GAS Planning",
        "Mechanical (M.E.P.) Planning",
        "Architectural Finishes Planning",
        "Equipment Planning",
        "Basic Floor Plan Ready for Professional Services",
      ],
    },
    {
      title: "Project Design & Development Services",
      image: "/img1.jpg",
      description: "Phase 2 Includes: Project Design & Development",
      points: [
        "Initial Site Assessment",
        "Project Cost & Schedule Development",
        "Development & Building Permit Application ",
        "Design Development (All Floor Plans Created)",
        "Existing Floor Plan, Demo Plan, New Floor Plan, New Partition Plan, Interior Finishes Plan, Ceiling Plan, Equipment Plan.",
        "Electrical Power & Auxiliary Plan, Lighting Plan, Specifications.",
        "Mechanical Sanitary Plan, Domestic Water & GAS Plan, HVAC Plan, Specifications",
        "Design Management with Professional Engineering Services If Required ",
        "3x Project Site Visits",
      ],
    },
    {
      title: "Full Comprehensive Construction Representation Services",
      image: "/img1.jpg",
      description: "Phase 3 Includes: Contract Tender & Contract Management",
      points: [
        "Creation of Project Tendering and Administration" ,
        "Overseeing Bids Estimates and Selection",
        "Creating Contracts for Clients and General Contractors",
      ],
    },
  ];

  return (
    <div className="mx-auto flex flex-col justify-center items-center px-4 py-10 bg-white">
      <h1 className="text-center text-5xl font-bold text-[#ca0606] mb-6">
        Designing Your Vision
      </h1>
      <div className="grid md:grid-cols-2 gap-6 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default VisionSection;
