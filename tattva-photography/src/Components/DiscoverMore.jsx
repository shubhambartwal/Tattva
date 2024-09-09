
const DiscoverMore = () => {
  return (
    <section className="relative w-full h-[40vh] bg-[#7d6957] flex flex-col items-center justify-center overflow-hidden py-4 md:py-8">
      {/* Main content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto px-4 md:px-8 py-4 md:py-8 text-center md:text-left">
        {/* Left side: Text content */}
        <div className="flex-1 mb-4 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Discover More About Us
          </h2>
          <p className="text-black mb-6">
            Explore the artistry and dedication behind Tattva Photography. Our team specializes in capturing the essence of your most cherished moments with elegance and flair. Whether it's a grand event or an intimate occasion, we are committed to delivering exceptional results that you'll treasure forever.
          </p>
        </div>
        {/* Right side: Button */}
        <div className="flex-1 flex items-center justify-center">
          <button className="bg-black p-1 text-white mb-2 px-6 rounded-lg shadow-lg hover:bg-white hover:text-[#7d6957] transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiscoverMore;
