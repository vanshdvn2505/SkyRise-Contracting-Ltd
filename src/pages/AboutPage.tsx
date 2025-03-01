function AboutPage() {
  return (
    <div className="bg-white">
      <section className="container mx-auto px-6 py-16 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-red-600 mb-6">About Us</h2>
            <h3 className="text-2xl font-semibold text-black mb-4">Our Story</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Founded in 2023, Skyrise Contracting is a trusted leader in the construction industry,
              specializing in steel stud framing, drywall installation, and acoustic ceiling systems. With a
              commitment to delivering exceptional craftsmanship and unparalleled service, we help
              bring commercial and residential projects to life with efficiency and precision. Our
              experienced team ensures that every job, from large-scale developments to smaller
              renovations, is completed on time and within budget, while maintaining the highest
              standards of safety and quality.
            </p>

            <h3 className="text-2xl font-semibold text-black mb-4">Core Competencies</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
            • Precision and Craftsmanship: Attention to detail in every project to ensure exceptional quality and durability. <br />
            • On-Time Delivery: Dedicated to completing every project on time, minimizing
            delays, and ensuring efficient project completion. <br />
            • Safety and Compliance: Adhering to all safety standards and regulations to ensure a
            secure work environment. <br />
            • Customer Satisfaction: Focused on building strong, long-term relationships by
            delivering projects that exceed client expectations.
            </p>

            <h3 className="text-2xl font-semibold text-black mb-4">Key Achievements</h3>
            <p className="text-gray-700 leading-relaxed">
            • Large-Scale Commercial Project: Successfully completed steel stud framing and
            drywall installation for a [specific building type, e.g., commercial office complex] <br />
            ensuring all materials were installed with precision and within the project timeline.
            • High-Profile Residential Project: Led the drywall and acoustic ceiling installation for
            [high-end residential project], enhancing the home’s aesthetic appeal while
            ensuring soundproofing and insulation were up to industry standards. <br />
            • Repeat Clients: Established long-term relationships with contractors, developers,
            and building managers, serving as a preferred partner for multiple projects across
            all around Calgary
            </p>
          </div>

          <div className=" hidden md:flex justify-center items-start">
            <img
              src="/logo-removebg.png"
              alt="About Us"
              className="w-full"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-red-600 mb-12">
            About SkyRise Contracting Ltd.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="/design.jpg" alt="Design" className="rounded-md mb-4 w-full h-40 object-cover" />
              <h3 className="text-xl font-bold text-black mb-2">Design</h3>
              <p className="text-gray-700 text-sm">
                We are here to support you at every step of your construction journey.
                Attention to detail in every project to ensure exceptional quality and durability
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="/contract.jpg" alt="General Contracting" className="rounded-md mb-4 w-full h-40 object-cover" />
              <h3 className="text-xl font-bold text-black mb-2">General Contracting</h3>
              <p className="text-gray-700 text-sm">
               We pride ourselves on our skilled and knowledgeable team
              of construction professionals. Our leadership team brings decades of combined
              experience in the construction industry, providing expert guidance on every project. 
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="/consult.jpg" alt="Consulting" className="rounded-md mb-4 w-full h-40 object-cover" />
              <h3 className="text-xl font-bold text-black mb-2">Consulting</h3>
              <p className="text-gray-700 text-sm">
                Focused on building strong, long-term relationships by
                delivering projects that exceed client expectations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="/manage.jpg" alt="Project & Construction Management" className="rounded-md mb-4 w-full h-40 object-cover" />
              <h3 className="text-xl font-bold text-black mb-2">Project & Construction Management</h3>
              <p className="text-gray-700 text-sm">
                Ensuring efficiency, cost-effectiveness, and successful project execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-black text-white text-center py-8">
        <p className="text-sm">
          SkyRise Contracting Ltd. <br />
          <span className="text-red-500 font-semibold">778-325-3540</span>
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
