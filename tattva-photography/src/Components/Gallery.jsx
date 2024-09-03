import React, { useState } from 'react';

// Sample portrait image URLs
const images = [
  'https://picsum.photos/600/800?random=1',
  'https://picsum.photos/600/800?random=2',
  'https://picsum.photos/600/800?random=3',
  'https://picsum.photos/600/800?random=4',
  'https://picsum.photos/600/800?random=5',
  'https://picsum.photos/600/800?random=6'
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="relative">
      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {images.map((image, index) => (
          <div key={index} className="cursor-pointer">
            <img
              src={image}
              alt={`Gallery Item ${index + 1}`}
              className="w-full h-80 object-cover rounded-lg"
              onClick={() => openImage(image)}
            />
          </div>
        ))}
      </div>

      {/* Full-Screen Image Viewer */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 overflow-auto">
          <div className="relative max-w-full max-h-screen">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-screen object-contain"
            />
            <button
              onClick={closeImage}
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-400"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
