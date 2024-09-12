import { useState, useEffect } from 'react';
import Avatar from 'react-avatar';
import axios from 'axios';

const VideoCard = ({ item }) => {
  const [channelData, setChannelData] = useState([]);

  const getYoutubeChannelName = async () => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${item.snippet.channelId}&key=${import.meta.env.VITE_API_KEY}`
      );
      setChannelData(res.data.items[0].snippet.thumbnails.high.url);
    } catch (error) {
      console.log(`Error fetching thumbnail: ${error}`);
    }
  };

  useEffect(() => {
    getYoutubeChannelName();
  }, []);

  return (
    <div className="w-full cursor-pointer p-2">
      {/* Video Thumbnail */}
      <img
        className="w-full rounded-lg"
        src={item.snippet.thumbnails.medium.url}
        alt="Video Thumbnail"
      />
      <div className="mt-2 flex items-center">
        {/* Channel Avatar */}
        <div className="flex-shrink-0">
          <Avatar
            className="mr-2"
            src={channelData}
            size="40px"
            round={true}
          />
        </div>

        {/* Video Title and Channel Name */}
        <div className="flex-1">
          <h1 className="font-bold text-sm text-white leading-tight sm:text-base">
            {item.snippet.title}
          </h1>
          <p className="text-xs text-gray-400 sm:text-sm">
            {item.snippet.channelTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
