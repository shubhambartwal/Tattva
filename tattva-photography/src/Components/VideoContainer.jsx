import { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { ytvideos, freelance } from '../constants/ytvideos';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [activeButton, setActiveButton] = useState('All');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleButtonClick = (viewType) => {
    setActiveButton(viewType);
    setIsTransitioning(true);
    setTimeout(() => {
      if (viewType === 'All') {
        setVideos([...ytvideos, ...freelance]);
      } else if (viewType === 'Tattva Films') {
        setVideos(ytvideos);
      } else if (viewType === 'Freelance Projects') {
        setVideos(freelance);
      }
      setIsTransitioning(false);
    }, 300);
  };

  useEffect(() => {
    handleButtonClick('All');
  }, []);

  return (
    <div className="flex flex-col items-center justify-center px-4 mt-12">
      <div className="flex space-x-0 text-white mb-6 pb-3">
        <button
          onClick={() => handleButtonClick('All')}
          className={`px-1 py-0 ${activeButton === 'All' ? 'text-[#dda370]' : 'text-white'} hover:text-[#7d6957] transition-all duration-300`}
        >
          All
        </button>
        <span className="border-r border-[#7d6957]"></span>
        <button
          onClick={() => handleButtonClick('Tattva Films')}
          className={`px-1 py-0 ${activeButton === 'Tattva Films' ? 'text-[#dda370]' : 'text-white'} hover:text-[#7d6957] transition-all duration-300`}
        >
          Tattva Films
        </button>
        <span className="border-r border-[#7d6957]"></span>
        <button
          onClick={() => handleButtonClick('Freelance Projects')}
          className={`px-1 py-0 ${activeButton === 'Freelance Projects' ? 'text-[#dda370]' : 'text-white'} hover:text-[#7d6957] transition-all duration-300`}
        >
          Freelance Projects
        </button>
      </div>

      {/* Slide in/out transition */}
      <div
  className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-2 sm:px-6 md:px-24 transition-transform transition-opacity duration-300 ease-in-out ${isTransitioning ? 'opacity-0 translate-y-5' : 'opacity-100 translate-y-0'}`}
>
  {videos.map((item, index) => (
    <VideoCard key={index} item={item} />
  ))}
</div>


    </div>
  );
};

export default VideoContainer;
