const ImageCollage = ({ collage }) => {
  return (
    <div className="my-18 h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Image 1 */}
      <img
        src={collage}
        alt="Placeholder 1"
        className="h-full object-contain"
      />
    </div>
  );
};

export default ImageCollage;
