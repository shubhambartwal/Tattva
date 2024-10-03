import React, { useState, useEffect } from 'react';

const reviews = [
  {
    name: 'Rahul Sharma',
    review: 'Tattva Photography captured every detail of our wedding beautifully. The candid shots were absolutely stunning!',
  },
  {
    name: 'Pooja Verma',
    review: 'Their team was professional and made our big day even more special. The wedding album is like a dream come true.',
  },
  {
    name: 'Amit Mehra',
    review: 'We had a traditional Punjabi wedding, and Tattva Photography ensured that every vibrant moment was captured perfectly.',
  },
  {
    name: 'Sneha Gupta',
    review: 'The photographers were so creative and friendly. They captured every ritual with such grace. Highly recommended!',
  },
  {
    name: 'Rohit Khurana',
    review: 'Tattva Photography made our wedding look like a royal affair. Their attention to detail is truly commendable.',
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
