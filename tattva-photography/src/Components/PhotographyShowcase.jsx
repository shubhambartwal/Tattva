const PhotographyShowcase = () => {
  return (
    <section className="bg-black  py-4">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#7d6957]">Our Services</h2>
        <p className="text-center text-white mb-8 max-w-2xl mx-auto">
          We capture the essence of every moment, from weddings to commercial ads and high fashion. Our work speaks for itself, reflecting our passion and dedication to photography.
        </p>

        <div className="flex flex-col mx-[15%] md:flex-row md:justify-between md:space-x-4">

          {/* Wedding Photography */}
          <div className=" p-3 relative flex flex-col items-center flex-shrink-0 md:w-1/3 mb-4 md:mb-0">
            <div className="group relative">
              <img
                src={`https://picsum.photos/300/450?random=${Math.random()}`}
                alt="Wedding Photography"
                className="w-full object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105 mx-auto"
              />
              {/* Text at the bottom of the image */}
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center">
                <h3 className="text-lg font-semibold text-white bg-black/50 w-full p-2 text-center transition-opacity duration-300 ease-in-out opacity-80 group-hover:opacity-100 rounded-b-lg">
                  Weddings 
                </h3>
              </div>
            </div>
          </div>

          {/* Commercial Ad Photography */}
          <div className="p-3 relative flex flex-col items-center flex-shrink-0 md:w-1/3 mb-4 md:mb-0">
            <div className="group relative">
              <img
                src={`https://picsum.photos/300/450?random=${Math.random()}`}
                alt="Wedding Photography"
                className="w-full object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105 mx-auto"
              />
              {/* Text at the bottom of the image */}
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center">
                <h3 className="text-lg font-semibold text-white bg-black/50 w-full p-2 text-center transition-opacity duration-300 ease-in-out opacity-80 group-hover:opacity-100 rounded-b-lg">
                Commercials 
                </h3>
              </div>
            </div>
          </div>

          {/* Fashion Photography */}
          <div className="p-3 relative flex flex-col items-center flex-shrink-0 md:w-1/3 mb-4 md:mb-0">
            <div className="group relative">
              <img
                src={`https://picsum.photos/300/450?random=${Math.random()}`}
                alt="Wedding Photography"
                className="w-full object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105 mx-auto"
              />
              {/* Text at the bottom of the image */}
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center">
                <h3 className="text-lg font-semibold text-white bg-black/50 w-full p-2 text-center transition-opacity duration-300 ease-in-out opacity-80 group-hover:opacity-100 rounded-b-lg">
                Fashion 
                </h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PhotographyShowcase;
