import React from 'react';

const OurStory = () => {
  return (
    <section className="bg-black text-white py-16 px-6 tracking-[.15em]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-[#7d6957] text-center">Our Story</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <p className="text-lg mb-4">
              Our journey began with a simple passion for capturing moments and telling stories through the lens. 
              What started as a hobby quickly grew into a full-fledged passion. 
              We believe in the power of photography to preserve memories and emotions that words alone cannot capture.
            </p>
            <p className="text-lg mb-4">
              Over the years, we've honed our craft, learning and growing with each project. 
              Our mission is to create stunning, evocative images that resonate with our clients and viewers alike.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg mb-4">
              From humble beginnings to a thriving business, our story is one of dedication, creativity, and a love for the art of photography. 
              Join us as we continue to capture the world, one frame at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
