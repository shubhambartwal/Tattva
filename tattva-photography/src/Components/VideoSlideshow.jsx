import { useState } from 'react'

const videos = [
  'https://www.youtube.com/embed/tjkk9cZ1ZOw',
  'https://www.youtube.com/embed/ccRcdNt-fFQ',
  'https://www.youtube.com/embed/vqUUTOSAUJQ',
  'https://www.youtube.com/embed/gysw4vQX-Nk',
  'https://www.youtube.com/embed/vqUUTOSAUJQ',
]

const VideoSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length)
  }

  return (
    <section className="relative w-full   bg-black flex items-center justify-center overflow-hidden">
      {/* Container with reduced size */}
      <div className="mt-12 relative w-[60%] h-[60%] max-w-full max-h-full px-[10%] py-[5%] flex items-center justify-center">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 md:left-4 bg-transparent border-2 border-[#7d6957] text-[#7d6957] h-6 w-6 md:h-8 md:w-8 flex items-center justify-center rounded-full hover:bg-white hover:text-black hover:bg-opacity-20 transition-colors duration-300"
        >
          &#10094;
        </button>

        {/* Video */}
        <iframe
          src={videos[currentIndex]}
          title={`Video ${currentIndex + 1}`}
          className=" w-full h-full aspect-video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 md:right-4 bg-transparent border-2 border-[#7d6957] text-[#7d6957] h-6 w-6 md:h-8 md:w-8 flex items-center justify-center rounded-full hover:bg-white hover:text-black hover:bg-opacity-20 transition-colors duration-300"
        >
          &#10095;
        </button>
      </div>
    </section>
  )
}

export default VideoSlideshow