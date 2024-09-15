import React, { useState } from 'react';

// Modal Component for Photo Gallery
const PhotoGallery = ({ isOpen, onClose, gallery }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-11/12 md:w-2/3 lg:w-1/2">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 font-bold text-xl"
        >
          &times;
        </button>

        <div className="grid grid-cols-1 gap-4">
          {gallery.map((imgUrl, index) => (
            <img
              key={index}
              src={imgUrl}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-auto rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
