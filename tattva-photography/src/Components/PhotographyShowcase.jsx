const PhotographyShowcase = () => {
    return (
      <section className="bg-[#7d6957] py-6">
        <div className="container mx-auto px-4 py-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-white">Our Photography Work</h2>
          <p className="text-center text-white mb-8 max-w-2xl mx-auto">
            We capture the essence of every moment, from weddings to commercial ads and high fashion. Our work speaks for itself, reflecting our passion and dedication to photography.
          </p>
          <div className="flex flex-col md:flex-row md:justify-between md:space-x-2">
            {/* Wedding Photography */}
            <div className="flex flex-col items-center flex-shrink-0 md:w-1/3 mb-4 md:mb-0">
              <h3 className="text-xl font-semibold text-white mb-2 text-center">Wedding Photography</h3>
              <div className="group">
                <img
                  src="https://via.placeholder.com/150x225.png?text=Wedding+Photography"
                  alt="Wedding Photography"
                  className="w-[150px] h-[225px] object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
            </div>
            {/* Commercial Ad Photography */}
            <div className="flex flex-col items-center flex-shrink-0 md:w-1/3 mb-4 md:mb-0">
              <h3 className="text-xl font-semibold text-white mb-2 text-center">Commercial Ad Photography</h3>
              <div className="group">
                <img
                  src="https://via.placeholder.com/150x225.png?text=Commercial+Ad+Photography"
                  alt="Commercial Ad Photography"
                  className="w-[150px] h-[225px] object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
            </div>
            {/* Fashion Photography */}
            <div className="flex flex-col items-center flex-shrink-0 md:w-1/3 mb-4 md:mb-0">
              <h3 className="text-xl font-semibold text-white mb-2 text-center">Fashion Photography</h3>
              <div className="group">
                <img
                  src="https://via.placeholder.com/150x225.png?text=Fashion+Photography"
                  alt="Fashion Photography"
                  className="w-[150px] h-[225px] object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default PhotographyShowcase;
  