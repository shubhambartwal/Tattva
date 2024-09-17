import pic from '../assets/pic.jpg'
const PhotoSlideshow = () => {

  return (
    <section className=" ">
      {/* Image */}
      <div className="relative w-full h-[70vh] ">
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
