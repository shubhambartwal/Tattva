import  { useState, useEffect } from 'react';

const photos = [
  'https://imgs.search.brave.com/wb9oIZw7nmpuPf8t_1N7D5nLFxmSz0iMgsS5NVSGP3M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjM5/Njk1ODE4L3Bob3Rv/L3Bob3RvZ3JhcGhl/ci13b3JrcGxhY2Uu/d2VicD9hPTEmYj0x/JnM9NjEyeDYxMiZ3/PTAmaz0yMCZjPW5i/VzNQWlhhMFh6dUJH/NHozcHQ3aDNMdlFS/YjVISTh3TG52RHMy/VFdSZ0E9',
  'https://via.placeholder.com/800x600?text=Photo+2',
  'https://via.placeholder.com/800x600?text=Photo+3',
  'https://via.placeholder.com/800x600?text=Photo+4',
  'https://via.placeholder.com/800x600?text=Photo+5',
];

const PhotoSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  return (
    <section className="relative w-full h-[70vh] bg-black flex items-center justify-center overflow-hidden">
      {/* Image */}
      <div className="relative w-full h-full max-w-full max-h-full">
        <img
          src={photos[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
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

export default PhotoSlideshow;
