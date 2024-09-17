import React, { useState, useEffect } from 'react';

const reviews = [
  {
    name: 'John Doe',
    review: 'Tattva Photography did an amazing job at our wedding. The photos were stunning, and they captured every special moment.',
  },
  {
    name: 'Jane Smith',
    review: 'Highly professional and talented photographers. They made our corporate event memorable with their incredible shots.',
  },
  {
    name: 'Sam Wilson',
    review: 'Their creativity and attention to detail are unmatched. The photos of our family reunion were beautiful.',
  },
  {
    name: 'Emily Johnson',
    review: 'Amazing work! The team at Tattva Photography made our engagement session so much fun and the pictures turned out perfect.',
  },
  {
    name: 'Michael Brown',
    review: 'The best photography experience I have ever had. Professional, talented, and passionate about their work.',
  },
];

const ClientReviewSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchDiff = touchStartX - touchEndX;

    if (touchDiff > 50) {
      handleNext(); // Swipe left, go to next review
    } else if (touchDiff < -50) {
      handlePrev(); // Swipe right, go to previous review
    }
  };

  return (
    <section
      className="w-full  bg-black text-white flex items-center justify-center mb-16 relative"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{ padding: '2rem', boxSizing: 'border-box' }} // Responsive padding
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-[#7d6957]">Client Reviews</h2>
        
        <div className="relative">
          <div className="flex flex-col items-center justify-center transition-opacity duration-500">
            <p className="text-xl md:text-2xl mb-4">{reviews[currentIndex].review}</p>
            <p className="text-lg md:text-xl font-bold text-[#7d6957]">- {reviews[currentIndex].name}</p>
          </div>
        </div>

        {/* Dots for slide indication */}
        <div className="flex justify-center mt-2 space-x-2">
          {reviews.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full ${currentIndex === index ? 'bg-[#7d6957]' : 'bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientReviewSlideshow;
