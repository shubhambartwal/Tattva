import pic from '../assets/pic.jpg'
const PhotoSlideshow = () => {

  return (
    <section className=" w-[100vw] h-[60vh] ">
      {/* Image */}
      <div className="relative w-full h-full ">
        <img
          src={pic}
          alt='...'
          className="w-full h-full object-cover transition-opacity duration-500"
        />
      </div>

     
    </section>
  );
};

export default PhotoSlideshow;
