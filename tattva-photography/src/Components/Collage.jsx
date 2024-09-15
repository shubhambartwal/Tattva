

const ImageCollage = ({collage}) => {
  return (
    <div className=" flex  h-[60%]  w-auto   ">
      {/* Image 1 */}
      <div className="flex-1 relative  overflow-hidden ">
        <img
          src={collage}
          alt="Placeholder 1"
          className=""
        />
      </div>
    </div>
  );
};

export default ImageCollage;
