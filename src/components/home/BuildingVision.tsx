
const BuildingVision = () => {
  return (
    <section className="w-full mx-auto py-12 px-6 bg-white">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-red-700 text-center mb-8">
        Building <span className="text-black">Your Vision</span>
      </h2>

      <div className="grid md:grid-cols-5 gap-8 items-start">
        {/* Image on the Left */}
        <div className="md:col-span-2">
          <img
            src="/img1.jpg"
            alt="Custom Design Build"
            width={500}
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Services List */}
        <div className="md:col-span-3 space-y-6">
          <ServiceItem
            title="Custom Design Build"
            description="At Red Ruddy Group, we offer custom design-build services to bring your vision to life. Our team works closely with you to understand your unique needs and preferences, and we create a customized plan that fits your budget and timeline."
          />
          <ServiceItem
            title="Commercial Construction"
            description="We specialize in commercial construction projects of all sizes. Our team has experience working on projects ranging from small retail spaces to large commercial buildings. We work closely with architects and engineers to ensure that your project is completed to your satisfaction."
          />
          <ServiceItem
            title="Project Management"
            description="Our project management services ensure that your project is completed on time and within budget. We take care of all aspects of the project, from planning and design to construction and final inspection."
          />
          <ServiceItem
            title="Renovations and Remodeling"
            description="We offer a full range of renovation and remodeling services to transform your space into something beautiful and functional. Whether you're looking to update your kitchen, bathroom, or entire home, we can help."
          />
          <ServiceItem
            title="Expert Consulting"
            description="Our team of experts can provide you with consulting services to help you make informed decisions about your project. We can provide guidance on everything from design to construction and project management."
          />
        </div>
      </div>
    </section>
  );
};

// Reusable Service Item Component
const ServiceItem = ({ title, description }: { title: string; description: string }) => (
  <div>
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

export default BuildingVision;
