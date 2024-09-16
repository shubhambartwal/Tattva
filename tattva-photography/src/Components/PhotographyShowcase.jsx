const PhotographyShowcase = () => {
  return (
    <section className="bg-white min-h-screen py-4 mt-20"> {/* Add mt-20 to create space below the fixed navbar */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#7d6957]">Our Photography Work</h2>
        <p className="text-center text-black mb-8 max-w-2xl mx-auto">
          We capture the essence of every moment, from weddings to commercial ads and high fashion. Our work speaks for itself, reflecting our passion and dedication to photography.
        </p>

        <div className="flex flex-col mx-[15%] md:flex-row md:justify-between md:space-x-4">
          {/* Wedding Photography */}
          <div className="flex flex-col items-center flex-shrink-0 md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl font-semibold text-black mb-2 text-center">Wedding Photography</h3>
            <div className="group">
              <img
                src="https://via.placeholder.com/300x450.png?text=Wedding+Photography"
                alt="Wedding Photography"
                className="w-full object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105 mx-auto"
              />
            </div>
          </div>
          {/* Commercial Ad Photography */}
          <div className="flex flex-col items-center flex-shrink-0 md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl font-semibold text-black mb-2 text-center">Commercial Photography</h3>
            <div className="group">
              <img
                src="https://via.placeholder.com/300x450.png?text=Commercial+Ad+Photography"
                alt="Commercial Ad Photography"
                className="w-full object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105 mx-auto"
              />
            </div>
          </div>
          {/* Fashion Photography */}
          <div className="flex flex-col items-center flex-shrink-0 md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl font-semibold text-black mb-2 text-center">Fashion Photography</h3>
            <div className="group">
              <img
                src="https://via.placeholder.com/300x450.png?text=Fashion+Photography"
                alt="Fashion Photography"
                className="w-full object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotographyShowcase;
