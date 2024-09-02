
const YouTubeVideo = () => {
  return (
    <div className="relative pb-9/16 h-0 overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
       src='https://www.youtube.com/embed/M7lc1UVf-VE'
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video player"
      />
    </div>
  );
};

export default YouTubeVideo;
