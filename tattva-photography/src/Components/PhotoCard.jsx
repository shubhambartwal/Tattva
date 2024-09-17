const PhotoCard = ({ src, title }) => {
  return (
      <div className="group overflow-hidden h-full w-full rounded-3xl shadow-md shadow-[#ecc39e]">
        <div className="relative h-full w-full aspect-[9/16] rounded-3xl overflow-hidden">
          <img
            src={src}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300" />
   
          <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold transition-all duration-300 group-hover:bottom-6 sm:text-xl">
            {title}
          </h3>
        </div>
      </div>
  );
};
export default PhotoCard