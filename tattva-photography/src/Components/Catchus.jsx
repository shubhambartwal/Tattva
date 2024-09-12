import React from 'react';

const CatchUs = () => {
    return (
        <section className="relative w-full bg-[#7d6957] py-8 md:py-12">
            {/* Main content */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between">
                    {/* Left side: Text content */}
                    <div className="md:w-1/2 md:pr-6 mb-6 md:mb-0 text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Our Story
                        </h2>
                        <p className="text-white">
                            Discover the passion and craftsmanship behind Tattva Photography. Our team excels in capturing the essence of your most cherished moments with creativity and precision. Whether it's a lavish event or an intimate gathering, we promise to deliver exceptional quality that will become cherished memories for a lifetime.
                        </p>
                    </div>
                    {/* Right side: Button */}
                    <div className="md:w-1/2 flex items-center justify-center">
                        <button className="bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-white hover:text-[#7d6957] transition-colors duration-300">
                            Explore More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CatchUs;
