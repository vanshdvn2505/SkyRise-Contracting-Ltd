import { Link } from "react-router-dom"

function BuildingDreams() {
    const images = [
      { src: "/CentralBuildingCalgary.jpeg", alt: "Central Bulding, Calgary" },
      { src: "/CommercialOfficeSpace.jpeg", alt: "Commercial Office Space" },
      { src: "/CarDealershipForestLawn.jpeg", alt: "Car Dealership, Forest Lawn" },
      { src: "/ApartmentBuildingCityScape.jpeg", alt: "Apartment Building, CityScape" },
      { src: "/BMOCenterCalgary.jpeg", alt: "BMO Center, Calgary" },
      { src: "/Steel1.jpeg", alt: "Steel Work" },
      { src: "/EclipseBurnaby.jpeg", alt: "Eclipse, Burnaby" },
      { src: "/RoyalCanadianPizzaSunridge.jpeg", alt: "Royal Canadian Pizza, Sunridge" },
      // { src: "/img1.jpeg", alt: "Final Touches" },
      // { src: "/img1.jpeg", alt: "Quality Inspection" },
      // { src: "/img1.jpeg", alt: "Project Completion" },
      // { src: "/img1.jpeg", alt: "Client Handover" },
    ]
  
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col justify-evenly items-center">
          <h2 className="text-4xl font-bold text-red-600 text-center mb-12">Building Dreams</h2>
  
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-center font-medium px-4">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            to="/projects"
            className="mt-6 px-6 py-3 bg-white text-[#1a2230] border-2 border-[#1a2230] rounded-full font-bold shadow-md hover:bg-[#1a2230] hover:text-white transition"
          >
            View More
          </Link>
        </div>
      </section>
    )
  }
  
  export default BuildingDreams
  
  