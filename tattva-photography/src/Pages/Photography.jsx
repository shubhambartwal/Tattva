
import PhotoSlideshow from '../Components/PhotoSlideShow';
import PhotoCardHolder from '../Components/PhotoCardHolder';
const Photography = () => {
  return (
    <div className="flex-grow pt-20 bg-black">
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#7d6957]">My Projects</h2>
        <PhotoSlideshow/>
      <PhotoCardHolder/>
      </div>
    </div>
  );
};

export default Photography;
