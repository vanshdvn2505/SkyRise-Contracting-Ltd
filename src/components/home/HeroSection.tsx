import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="relative h-screen bg-transparent">
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="mx-auto px-4 flex justify-center items-center">
          <div className="w-full text-center">
            <h1 className="mb-4 text-4xl  font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              Structured for Success,
            </h1>
            <h1 className="mb-4 text-4xl  font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              Finished for Impact

            </h1>
            <p className="mb-8 text-xl text-white md:text-2xl">
              Built to Last, Delivered with Precision.
            </p>
            <div className="flex flex-col justify-center items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-transparent border-2 border-white text-white hover:border-[#1a2230] hover:bg-[#1a2230] transition-all duration-300 ease-in-out h-11 px-8 text-sm font-medium"
              >
                COMMERCIAL DESIGN
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-transparent border-2 border-white text-white hover:border-[#1a2230] hover:bg-[#1a2230] transition-all duration-300 ease-in-out h-11 px-8 text-sm font-medium"
              >
                COMMERCIAL CONSTRUCTION
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
