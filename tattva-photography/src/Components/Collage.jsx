import React from 'react';

const ImageCollage = () => {
  return (
    <div className="flex flex-wrap h-screen w-full p-2 gap-2">
      {/* Image 1 */}
      <div className="flex-1 relative rounded-lg overflow-hidden">
        <img
          src="https://via.placeholder.com/600x800"
          alt="Placeholder 1"
          className="h-full w-full object-cover rounded-lg"
        />
      </div>

      {/* Image 2 */}
      <div className="flex-1 relative rounded-lg overflow-hidden">
        <img
          src="https://via.placeholder.com/600x800"
          alt="Placeholder 2"
          className="h-full w-full object-cover rounded-lg"
        />
      </div>

      {/* Image 3 with Text */}
      <div className="flex-1 relative rounded-lg overflow-hidden">
        <img
          src="https://via.placeholder.com/600x800"
          alt="Placeholder 3"
          className="h-full w-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
        </div>
      </div>

      {/* Image 4 */}
      <div className="flex-1 relative rounded-lg overflow-hidden">
        <img
          src="https://via.placeholder.com/600x800"
          alt="Placeholder 4"
          className="h-full w-full object-cover rounded-lg"
        />
      </div>

      {/* Image 5 */}
      <div className="flex-1 relative rounded-lg overflow-hidden">
        <img
          src="https://via.placeholder.com/600x800"
          alt="Placeholder 5"
          className="h-full w-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default ImageCollage;
