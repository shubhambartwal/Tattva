import { useState, useEffect } from 'react';

const videos = [
  'https://www.youtube.com/embed/VIDEO_ID_1',
  'https://www.youtube.com/embed/VIDEO_ID_2',
  'https://www.youtube.com/embed/VIDEO_ID_3',
  'https://www.youtube.com/embed/VIDEO_ID_4',
  'https://www.youtube.com/embed/VIDEO_ID_5',
];

const VideoSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change video every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  return (
    <section className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Video */}
      <div className="relative w-full h-full max-w-full max-h-full">
        <iframe
          src={videos[currentIndex]}
          title={`Video ${currentIndex + 1}`}
          className="w-full h-full"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={handlePrev} 
        className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-[#7d6957] text-white h-12 w-12 flex items-center justify-center rounded-full hover:bg-[#645349] transition-colors duration-300"
      >
        &#10094; {/* Left Arrow Icon */}
      </button>
      <button 
        onClick={handleNext} 
        className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-[#7d6957] text-white h-12 w-12 flex items-center justify-center rounded-full hover:bg-[#645349] transition-colors duration-300"
      >
        &#10095; {/* Right Arrow Icon */}
      </button>
    </section>
  );
};

export default VideoSlideshow;
