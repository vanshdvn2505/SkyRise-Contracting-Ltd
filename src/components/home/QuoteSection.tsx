
const QuoteSection = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center text-center">
      <div className="absolute inset-0">
        <img
          src="/quote-back.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative max-w-3xl px-6 text-white">
        <span className="text-6xl md:text-7xl font-serif font-bold text-gray-300">“</span>
        <h2 className="text-xl md:text-4xl font-bold text-right leading-tight">
          A structure is only as strong as its  <br />
          foundation, and trust is <br />
          the foundation we build upon.
        </h2>
        <p className="mt-4 text-lg text-gray-300">— James R. Collins</p>
      </div>
    </section>
  );
};

export default QuoteSection;
