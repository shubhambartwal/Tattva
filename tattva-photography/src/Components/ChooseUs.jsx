
const WhyChooseUs = () => {
  return (
    <section className="w-full  tracking-[.15em] min-h-screen bg-black flex flex-col md:flex-row items-center justify-center overflow-hidden px-4 py-8 md:py-0">
      {/* Image Side */}
      <div className="flex relative max-w-[80%] max-h-[60%] md:max-w-[30%] md:max-h-[60%] p-4 pb-8 items-center justify-center">
        <img
          src={`https://picsum.photos/600/800?random=${Math.random()}`}
          alt="Photography and Video Services"
          className="w-[100%] md:w-[70%] rounded-lg transform transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Text Side */}
      <div className="flex-1 p-4 md:p-8 md:pl-16 flex flex-col items-start justify-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#7d6957]">Why Choose Us?</h2>
        <p className="text-base md:text-xl mb-6">
          At Tattva Photography, we offer more than just photos and videos. We bring passion, creativity, and professionalism to every project. Whether it's a wedding, corporate event, or personal celebration, we ensure that every moment is captured perfectly.
        </p>
        <ul className="list-disc pl-5 text-base md:text-xl space-y-2">
          <li>High-quality, professional photography and videography.</li>
          <li>Experienced team dedicated to capturing your special moments.</li>
          <li>Customized packages to fit your unique needs and budget.</li>
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;
