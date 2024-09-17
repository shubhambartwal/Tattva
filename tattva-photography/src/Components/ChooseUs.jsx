import states from '../assets/state.png'
const WhyChooseUs = () => {
  return (
    <section className="w-full  bg-black flex items-center justify-center px-4 py-2 md:py-4">
      {/* Container for Image and Text */}
      <div className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto md:px-12 px-6">
        {/* Image Side */}
        <div className="flex-shrink-0 mb-2 md:mb-0 md:mr-6 flex items-center justify-center">
          <div className="relative  max-w-[500px] md:w-[50%] md:max-w-[600px]">
            <img
              src={states}
              alt="Photography and Video Services"
              className="w-full  rounded-lg "
            />
          </div>
        </div>

        {/* Text Side */}
        <div className="text-center md:text-left text-white max-w-lg">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#7d6957]">
            Why Choose Us?
          </h2>
          <p className="text-base md:text-xl mb-6">
            At Tattva Photography, we offer more than just photos and videos. We bring passion, creativity, and professionalism to every project. Whether it's a wedding, corporate event, or personal celebration, we ensure that every moment is captured perfectly.
          </p>
          <ul className="list-disc pl-5 text-base md:text-xl space-y-2">
            <li>High-quality, professional photography and videography.</li>
            <li>Experienced team dedicated to capturing your special moments.</li>
            <li>Customized packages to fit your unique needs and budget.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
