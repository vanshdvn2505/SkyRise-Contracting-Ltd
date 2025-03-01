export default function DedicationSection() {
  return (
    <div className="flex flex-col items-center text-center px-6 py-10 bg-[#f6f6f6]">
      <h1 className="text-[#ca0606] text-2xl md:text-5xl mb-10 tracking-tighter font-bold uppercase">
        Our Dedication is to Provide
      </h1>

      <div className="flex flex-col md:flex-row justify-evenly items-center w-full">
        <div className="w-1/2 flex justify-center items-center">
          <img src="/logo-removebg.png" alt="Company Logo" className="rounded-lg order-1 md:order-none w-96"/>
        </div>
        <div className="flex justify-center items-center w-1/2">
          <div className="text-[#575757] text-lg flex flex-col max-w-xl justify-center order-2 md:order-none items-center">
            <p className="font-bold">A Better Product</p>
            <p className="font-bold">A Better Experience</p>
            <p className="font-bold">For Everyone And Our Family!</p>
            <a href="#" className="text-[#ca0606] font-semibold mt-2 inline-block underline tracking-wider hover:cursor-pointer">
              BECOME OUR CLIENT!
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-8 w-full">
        {[{
          title: "Our Approach",
          text: "At Skyrise Contracting Ltd., we believe that a structured and transparent approach is the foundation of every successful construction project. From initial planning to project completion, we focus on every operational aspect to identify key areas for improvement and efficiency.",
          image: "/approach.jpg"
        }, {
          title: "Our Team",
          text: "At Skyrise Contracting, we pride ourselves on our skilled and knowledgeable team of construction professionals. Our leadership team brings decades of combined experience in the construction industry, providing expert guidance on every project. Each member of our team is dedicated to ensuring quality, safety, and client satisfaction in every phase of the project.",
          image: "/team.jpg"
        }, {
          title: "Our Performance",
          text: "With a strong portfolio of successfully completed projects across Calgary, Skyrise Contracting Ltd. takes pride in delivering high-quality construction solutions that stand the test of time. Our expertise in steel stud framing, drywall installation, and acoustic ceilings ensures that every project is built with structural integrity, aesthetic appeal, and functional excellence.",
          image: "/performance.jpg"
        }].map((section, index) => (
          <div key={index} className={`flex flex-col md:flex-row justify-around items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
            <div className="flex flex-col justify-center items-center max-w-xl order-2 md:order-none">
              <h2 className="text-lg font-bold">{section.title}</h2>
              <p className="text-gray-600 mt-2">{section.text}</p>
            </div>
            <img src={section.image} alt={section.title} className="rounded-lg shadow-md order-1 md:order-none w-80 md:w-96" />
          </div>
        ))}
      </div>
    </div>
  );
}