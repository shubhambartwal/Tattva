
import PhotoSlideshow from '../Components/PhotoSlideShow';
import PhotoCardHolder from '../Components/PhotoCardHolder';
const Photography = () => {
  return (
    <div className="flex-grow  bg-black">
      <div className="container ">
        <PhotoSlideshow />
        <div > <h1 className='text-[#da9b64] text-center text-4xl font-bold py-2'>Our Cients</h1></div>
        <PhotoCardHolder />
      </div>
    </div>
  );
};

export default Photography;
