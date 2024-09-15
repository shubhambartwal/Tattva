
const VideoCard = ({ item }) => {
  return (
    <div className="w-full cursor-pointer p-2 rounded-xl">
      {/* Embedded YouTube Video */}
      <iframe
        src={`${item}`}
        className="w-full h-full aspect-video"
        allow="autoplay; "
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoCard;
