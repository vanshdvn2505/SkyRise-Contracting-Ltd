// "use client"

// import { useState } from "react"
// import { ArrowRight, ChevronDown, CheckCircle } from "lucide-react"
// import { Link } from "react-router-dom"

// export default function ServicesPage() {
//   const [expandedServices, setExpandedServices] = useState<Set<number>>(new Set())

//   const toggleService = (index: number) => {
//     setExpandedServices((prev) => {
//       const newSet = new Set(prev)
//       if (newSet.has(index)) {
//         newSet.delete(index)
//       } else {
//         newSet.add(index)
//       }
//       return newSet
//     })
//   }

  // const services = [
  //   {
  //     title: "Steel Stud Framing",
  //     description:
  //       "Skyrise Contracting Ltd. is a trusted expert in the installation of both light gauge and heavy gauge structural framing. Our team specializes in providing top-quality framing solutions for a variety of construction projects, ensuring precision, durability, and structural integrity. We have the expertise to install both interior and exterior framing, catering to diverse architectural and engineering requirements. Additionally, we excel in the installation of drop ceilings, fire-rated shafts, and other essential structural components. With a commitment to excellence and efficiency, Skyrise Contracting Ltd. delivers superior craftsmanship tailored to meet the unique needs of every project.",
  //     features: [
  //       "Light gauge and heavy gauge structural framing",
  //       "Interior and exterior framing",
  //       "Drop ceilings installation",
  //       "Fire-rated shafts construction",
  //       "Precision engineering and durability",
  //     ],
  //     image: "/Steel1.jpeg",
  //   },
  //   {
  //     title: "Drywall",
  //     description:
  //       "At Skyrise Contracting Ltd., we specialize in professional drywall installation, ensuring precision and quality at every stage of the process. Our skilled team provides expert taping, mudding, and sanding services to achieve seamless and durable finishes. We work exclusively with reputable suppliers and high-quality materials to guarantee long-lasting results. Whether our clients require a Level 4 or Level 5 finish, we take pride in delivering flawlessly smooth surfaces that enhance the overall aesthetic and functionality of any space. With a strong commitment to excellence, we ensure that every project meets the highest industry standards and exceeds client expectations.",
  //     features: [
  //       "Professional drywall installation",
  //       "Expert taping, mudding, and sanding",
  //       "Level 4 and Level 5 finishes",
  //       "High-quality materials from reputable suppliers",
  //       "Flawlessly smooth surfaces",
  //     ],
  //     image: "/Drywall.jpeg",
  //   },
  //   {
  //     title: "Insulation",
  //     description:
  //       "Our company utilizes the highest quality insulation materials and advanced techniques, including batt insulation and spray foam insulation, to deliver superior thermal and soundproofing solutions. We strictly adhere to all safety standards and building code regulations, ensuring that every project meets the highest levels of efficiency, comfort, and protection. Our commitment to excellence guarantees a well-insulated environment that enhances both energy efficiency and overall safety for our clients.",
  //     features: [
  //       "Batt insulation installation",
  //       "Spray foam insulation application",
  //       "Superior thermal efficiency",
  //       "Advanced soundproofing solutions",
  //       "Building code compliance",
  //     ],
  //     image: "/Insulation.jpeg",
  //   },
  //   {
  //     title: "Suspension Ceilings",
  //     description:
  //       "We provide exceptional T-bar ceiling installation services, ensuring precision, efficiency, and a spotless finish with every project. Our suspension ceiling systems offer versatility and accessibility while maintaining a clean, professional appearance. Our experienced team handles every aspect of the installation process with meticulous attention to detail, from initial measurements to final adjustments. We work with a variety of ceiling tile options to match your aesthetic and functional requirements, creating spaces that are both beautiful and practical.",
  //     features: [
  //       "T-bar ceiling installation",
  //       "Precision engineering and alignment",
  //       "Various ceiling tile options",
  //       "Easy access to building systems",
  //       "Clean, professional appearance",
  //     ],
  //     image: "/SuspensionCeiling.jpeg",
  //   },
  // ]

//   return (
//     <div className="min-h-screen bg-white">
//       <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden">
//         <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
//         <div className="relative container mx-auto px-6 py-32 md:py-48">
//           <div className="max-w-4xl">
//             <div className="inline-block px-4 py-1 bg-red-600/20 rounded-full text-red-400 font-medium text-sm mb-6 backdrop-blur-sm">
//               Professional Construction Services
//             </div>
//             <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
//               Building Excellence <span className="text-red-500">Together</span>
//             </h1>
//             <p className="text-xl md:text-2xl max-w-3xl mb-10 text-gray-200 leading-relaxed">
//               Comprehensive commercial construction services delivered with precision, quality, and expertise.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <Link
//                 to="/contact"
//                 className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-red-600 text-white hover:bg-red-700 h-12 px-8 py-3 text-base font-medium transition-all shadow-lg hover:shadow-red-600/20 hover:translate-y-[-2px]"
//               >
//                 Request a Quote
//               </Link>
//               <Link
//                 to="/projects"
//                 className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 h-12 px-8 py-3 text-base font-medium transition-all border border-white/20"
//               >
//                 View Our Work
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
//       </div>

//       <div className="container mx-auto px-6 py-20 md:py-28">
//         <div className="max-w-3xl mx-auto text-center mb-16">
//           <div className="inline-block px-4 py-1 bg-red-50 rounded-full text-red-600 font-medium text-sm mb-4">
//             Our Expertise
//           </div>
//           <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Expert Construction Services</h2>
//           <p className="text-lg text-gray-600 leading-relaxed">
//             At Skyrise Contracting Ltd., we deliver exceptional quality across all our services. Our team of skilled
//             professionals ensures precision, durability, and superior craftsmanship for every project, regardless of
//             size or complexity.
//           </p>
//         </div>

//         <div className="flex flex-col gap-10 w-full max-w-5xl mx-auto">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row border border-gray-100"
//             >
//               <div className="relative md:w-2/5 aspect-square md:aspect-auto overflow-hidden">
//                 <img
//                   src={service.image || "/placeholder.svg?height=600&width=800"}
//                   alt={service.title}
//                   className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent md:bg-gradient-to-r"></div>
//                 <div className="absolute bottom-0 left-0 p-6 md:p-8">
//                   <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{service.title}</h3>
//                   <div className="h-1 w-16 bg-red-600 rounded-full"></div>
//                 </div>
//               </div>

//               <div className="p-6 md:p-8 flex-grow flex flex-col md:w-3/5">
//                 <p className="text-gray-700 mb-6 leading-relaxed">
//                   {expandedServices.has(index) ? service.description : `${service.description.substring(0, 180)}...`}
//                 </p>

//                 <div className="space-y-4 mt-auto">
//                   <button
//                     onClick={() => toggleService(index)}
//                     className="flex items-center text-red-600 font-medium hover:text-red-700 transition-colors group"
//                   >
//                     {expandedServices.has(index) ? "Show Less" : "Learn More"}
//                     <ChevronDown
//                       className={`ml-1 h-5 w-5 transition-transform duration-300 group-hover:translate-y-1 ${
//                         expandedServices.has(index) ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>

//                   {expandedServices.has(index) && (
//                     <div className="animate-in fade-in duration-500 slide-in-from-bottom-5">
//                       <h4 className="font-semibold text-lg mb-4 text-gray-800">Key Features:</h4>
//                       <ul className="space-y-3 mb-6">
//                         {service.features.map((feature, i) => (
//                           <li key={i} className="flex items-start">
//                             <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5 mr-3" />
//                             <span className="text-gray-700">{feature}</span>
//                           </li>
//                         ))}
//                       </ul>
//                       <Link
//                         to={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
//                         className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-red-600 text-white hover:bg-red-700 h-10 px-6 py-2 text-sm font-medium transition-all hover:translate-y-[-2px] shadow-sm hover:shadow-md"
//                       >
//                         Request Service{" "}
//                         <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//                       </Link>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }


"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServicesPage() {
  const [expandedServices, setExpandedServices] = useState<Set<number>>(
    new Set()
  );

  const toggleService = (index: number) => {
    setExpandedServices((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const services = [
    {
      title: "Steel Stud Framing",
      description:
        "Skyrise Contracting Ltd. is a trusted expert in the installation of both light gauge and heavy gauge structural framing. Our team specializes in providing top-quality framing solutions for a variety of construction projects, ensuring precision, durability, and structural integrity. We have the expertise to install both interior and exterior framing, catering to diverse architectural and engineering requirements. Additionally, we excel in the installation of drop ceilings, fire-rated shafts, and other essential structural components. With a commitment to excellence and efficiency, Skyrise Contracting Ltd. delivers superior craftsmanship tailored to meet the unique needs of every project.",
      features: [
        "Light gauge and heavy gauge structural framing",
        "Interior and exterior framing",
        "Drop ceilings installation",
        "Fire-rated shafts construction",
        "Precision engineering and durability",
      ],
      image: "/Steel1.jpeg",
    },
    {
      title: "Drywall",
      description:
        "At Skyrise Contracting Ltd., we specialize in professional drywall installation, ensuring precision and quality at every stage of the process. Our skilled team provides expert taping, mudding, and sanding services to achieve seamless and durable finishes. We work exclusively with reputable suppliers and high-quality materials to guarantee long-lasting results. Whether our clients require a Level 4 or Level 5 finish, we take pride in delivering flawlessly smooth surfaces that enhance the overall aesthetic and functionality of any space. With a strong commitment to excellence, we ensure that every project meets the highest industry standards and exceeds client expectations.",
      features: [
        "Professional drywall installation",
        "Expert taping, mudding, and sanding",
        "Level 4 and Level 5 finishes",
        "High-quality materials from reputable suppliers",
        "Flawlessly smooth surfaces",
      ],
      image: "/Drywall.jpeg",
    },
    {
      title: "Insulation",
      description:
        "Our company utilizes the highest quality insulation materials and advanced techniques, including batt insulation and spray foam insulation, to deliver superior thermal and soundproofing solutions. We strictly adhere to all safety standards and building code regulations, ensuring that every project meets the highest levels of efficiency, comfort, and protection. Our commitment to excellence guarantees a well-insulated environment that enhances both energy efficiency and overall safety for our clients.",
      features: [
        "Batt insulation installation",
        "Spray foam insulation application",
        "Superior thermal efficiency",
        "Advanced soundproofing solutions",
        "Building code compliance",
      ],
      image: "/Insulation.jpeg",
    },
    {
      title: "Suspension Ceilings",
      description:
        "We provide exceptional T-bar ceiling installation services, ensuring precision, efficiency, and a spotless finish with every project. Our suspension ceiling systems offer versatility and accessibility while maintaining a clean, professional appearance. Our experienced team handles every aspect of the installation process with meticulous attention to detail, from initial measurements to final adjustments. We work with a variety of ceiling tile options to match your aesthetic and functional requirements, creating spaces that are both beautiful and practical.",
      features: [
        "T-bar ceiling installation",
        "Precision engineering and alignment",
        "Various ceiling tile options",
        "Easy access to building systems",
        "Clean, professional appearance",
      ],
      image: "/SuspensionCeiling.jpeg",
    },
  ]

  return (
    <div className="min-h-screen bg-[#1a2230]">
      <div className="relative bg-[radial-gradient(circle_at_top,#1a2230_0%,#1a2230_40%,#ca0606_100%)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a2230]/60 to-[#1a2230]"></div>
        <div className="relative container mx-auto px-6 py-32 md:py-48">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1 bg-red-600/20 rounded-full text-red-400 font-medium text-sm mb-6 backdrop-blur-sm">
              Professional Construction Services
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Building Excellence <span className="text-red-500">Together</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mb-10 text-gray-200 leading-relaxed">
              Comprehensive commercial construction services delivered with
              precision, quality, and expertise.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#ca0606] text-white hover:bg-red-700 h-12 px-8 py-3 text-base font-medium transition-all shadow-lg hover:shadow-red-600/20 hover:translate-y-[-2px]"
              >
                Request a Quote
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 h-12 px-8 py-3 text-base font-medium transition-all border border-white/20"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#1a2230] via-[#1a2230]/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 ">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-4 py-1 bg-red-50 rounded-full text-red-600 font-medium text-sm mb-4">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            Expert Construction Services
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            At Skyrise Contracting Ltd., we deliver exceptional quality across
            all our services. Our team ensures precision, durability, and
            superior craftsmanship for every project.
          </p>
        </div>

        <div className="flex flex-col gap-10 w-full max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row border border-gray-100"
            >
              <div className="relative md:w-2/5 aspect-square md:aspect-auto overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg?height=600&width=800"}
                  alt={service.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent md:bg-gradient-to-r"></div>
                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <div className="h-1 w-16 bg-red-600 rounded-full"></div>
                </div>
              </div>

              <div className="p-6 md:p-8 flex-grow flex flex-col md:w-3/5">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {expandedServices.has(index)
                    ? service.description
                    : `${service.description.substring(0, 180)}...`}
                </p>

                <div className="space-y-4 mt-auto">
                  <button
                    onClick={() => toggleService(index)}
                    className="flex items-center text-red-600 font-medium hover:text-red-700 transition-colors group"
                  >
                    {expandedServices.has(index) ? "Show Less" : "Learn More"}
                    <ChevronDown
                      className={`ml-1 h-5 w-5 transition-transform duration-300 group-hover:translate-y-1 ${
                        expandedServices.has(index) ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {expandedServices.has(index) && (
                    <div className="animate-in fade-in duration-500 slide-in-from-bottom-5">
                      <h4 className="font-semibold text-lg mb-4 text-gray-800">
                        Key Features:
                      </h4>
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5 mr-3" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-red-600 text-white hover:bg-red-700 h-10 px-6 py-2 text-sm font-medium transition-all hover:translate-y-[-2px] shadow-sm hover:shadow-md"
                      >
                        Request Service{" "}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
