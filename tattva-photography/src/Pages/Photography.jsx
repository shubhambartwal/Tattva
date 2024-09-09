import CardHolder from '../Components/CardHolder';
import EventCards from '../Components/EventCard';
import Gallery from '../Components/Gallery';
import PhotoSlideshow from '../Components/PhotoSlideShow';

const Photography = () => {
  return (
    <div className="flex-grow pt-20 bg-black">
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#7d6957]">My Projects</h2>
        <PhotoSlideshow/>
        <CardHolder/>
        <Gallery />
      </div>
    </div>
  );
};

export default Photography;
