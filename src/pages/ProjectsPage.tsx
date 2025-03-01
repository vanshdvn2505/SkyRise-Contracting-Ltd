const projects = [
  {
    image: "/CentralBuildingCalgary.jpeg",
    name: "Central Building Calgary",
    place: "Calgary",
    tag: "Office Building",
    type: "Commercial"
  },
  {
    image: "/CommercialOfficeSpace.jpeg",
    name: "Commercial Office Space",
    place: "Calgary",
    tag: "Office Space",
    type: "Commercial"
  },
  {
    image: "/BMOCenterCalgary.jpeg",
    name: "BMO Center",
    place: "Calgary",
    tag: "Convention Center",
    type: "Commercial"
  },
  {
    image: "/CarDealershipForestLawn.jpeg",
    name: "Car Dealership",
    place: "Forest Lawn",
    tag: "Commercial Building",
    type: "Commercial"
  },
  {
    image: "/DayCareChinook.jpeg",
    name: "Day Care",
    place: "Chinook",
    tag: "Child Care Facility",
    type: "Commercial"
  },
  {
    image: "/HairSalonCarrington.jpeg",
    name: "Hair Salon",
    place: "Carrington",
    tag: "Retail Store",
    type: "Commercial"
  },
  {
    image: "/RoyalCanadianPizzaSunridge.jpeg",
    name: "Royal Canadian Pizza",
    place: "Sunridge",
    tag: "Restaurant",
    type: "Commercial"
  },
  {
    image: "/PearlVisionChinookMall.jpeg",
    name: "Pearl Vision",
    place: "Chinook Mall",
    tag: "Optical Store",
    type: "Commercial"
  },
  {
    image: "/KraftyHandsSazeHill.jpeg",
    name: "Kraft Hands",
    place: "Saze Hill",
    tag: "Handicrafts Store",
    type: "Commercial"
  },
  {
    image: "/OliveWall.jpeg",
    name: "Olive Wall",
    place: "Calgary",
    tag: "Architectural Feature",
    type: "Commercial"
  },
  {
    image: "/Steel1.jpeg",
    name: "Steel Work",
    place: "Calgary",
    tag: "Industrial Construction",
    type: "Commercial"
  },
  {
    image: "/ApartmentBuildingCityScape.jpeg",
    name: "Apartment Building",
    place: "Calgary",
    tag: "Residential Building",
    type: "Residential"
  },
  {
    image: "/2BedSuitsChaparralBlvd.jpeg",
    name: "Two Bed Suits",
    place: "Chaparral Blvd",
    tag: "Residential Apartment",
    type: "Residential"
  },
  {
    image: "/ApartmentBuildingCoquitlum.jpeg",
    name: "Apartment Building",
    place: "Coquitlum",
    tag: "Residential Complex",
    type: "Residential"
  },
  {
    image: "/EclipseBurnaby.jpeg",
    name: "Eclipse",
    place: "Burnaby",
    tag: "Luxury Apartments",
    type: "Residential"
  },
  
];


function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16 mt-20">
      <h1 className="text-4xl font-bold mb-8 text-red-600">Our Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg relative">
            <div className="absolute top-4 right-4 z-10">
              <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full">{project.type}</span>
            </div>
            <img src={project.image} alt={project.name} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{project.place}</span>
                <span className="bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full">{project.tag}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;