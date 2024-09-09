
const ImageCollage = () => {
  return (
    <div className="bg-black flex flex-wrap h-screen w-full p-3 gap-2">
      {/* Image 1 */}
      <div className="flex-1 relative rounded-lg overflow-hidden group">
        <img
          src="https://via.placeholder.com/600x800"
          alt="Placeholder 1"
          className="h-full w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Image 2 */}
      <div className="flex-1 relative rounded-lg overflow-hidden group">
        <img
          src="https://via.placeholder.com/600x800"
          alt="Placeholder 2"
          className="h-full w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Image 3 with Text */}
      <div className="flex-1 relative rounded-lg overflow-hidden group">
        <img
          src="https://via.placeholder.com/600x800"
          alt="Placeholder 3"
          className="h-full w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          {/* You can add content here if needed */}
        </div>
      </div>

      {/* Image 4 */}
      <div className="flex-1 relative rounded-lg overflow-hidden group">
        <img
          src="https://via.placeholder.com/600x800"
          alt="Placeholder 4"
          className="h-full w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Image 5 */}
      <div className="flex-1 relative rounded-lg overflow-hidden group">
        <img
          src="https://via.placeholder.com/600x800"
          alt="Placeholder 5"
          className="h-full w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </div>
  );
};

export default ImageCollage;
