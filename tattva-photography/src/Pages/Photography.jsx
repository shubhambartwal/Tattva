import PhotoSlideshow from '../Components/PhotoSlideShow';
import PhotoCardHolder from '../Components/PhotoCardHolder';
import DiscoverMore from '../Components/DiscoverMore';

const Photography = () => {
  return (
    <div className="flex-grow bg-black">
      <PhotoSlideshow />

      {/* Recent Project Showcase Section */}
      <div className='text-center pt-16 bg-black'>
        <h1 className='text-white text-3xl md:text-4xl lg:text-5xl font-bold'>
          Recent Project Showcase
        </h1>
        <p className='font-serif text-white py-4 text-base md:text-lg lg:text-xl px-4 md:px-16 lg:px-[25%]'>
          Explore our latest achievements and innovations in our Recent Projects Showcase, where we highlight our most cutting-edge work.
        </p>
      </div>
      <hr className="border-t-2 border-[#eab07d] my-6 mx-auto w-4/5" />
      <PhotoCardHolder />
      <DiscoverMore />
    </div>
  );
};

export default Photography;
