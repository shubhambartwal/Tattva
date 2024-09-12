import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

const Watch = () => {
  const [singleVideo, setSingleVideo] = useState({});
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');

  const getSingleVideo = async () => {
    try {
      const resData = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${import.meta.env.VITE_API_KEY}`
      );
      setSingleVideo(resData?.data.items[0]);
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };

  useEffect(() => {
    getSingleVideo();
  }, [videoId]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
      {/* Container to make iframe take full width and height */}
      <div className="relative w-full h-0 overflow-hidden" style={{ paddingBottom: '56.25%' }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>

      {/* Video title */}
      <h1 className="text-white font-bold mt-4 text-xl text-center">
        {singleVideo?.snippet?.title || 'Loading...'}
      </h1>
    </div>
  );
};

export default Watch;
