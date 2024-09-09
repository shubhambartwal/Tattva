import React, { useState, useEffect } from 'react';
import Avatar from 'react-avatar';
import axios from 'axios';
import { API_KEY } from '../Constants/youtube';

const VideoCard = ({ item }) => {
  const [channelData, setChannelData] = useState([]);

  const getYoutubeChannelName = async () => {
    try {
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${item.snippet.channelId}&key=${API_KEY}`);
      setChannelData(res.data.items[0].snippet.thumbnails.high.url);
    } catch (error) {
      console.log(`Error from thumbnail, ${error}`);
    }
  };

  useEffect(() => {
    getYoutubeChannelName();
  }, []);

  return (
    <div className="w-full p-4  rounded-lg overflow-hidden shadow-lg">
      <img
        className="w-full h-auto mb-4 object-cover"
        src={item.snippet.thumbnails.medium.url}
        alt={item.snippet.title}
      />
      <div className="flex items-center flex-col md:flex-row">
        {/* Avatar hidden on mobile */}
        <div className="hidden md:block mr-4">
          <Avatar
            src={channelData}
            size={'40px'}
            round={true}
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-lg font-bold text-white mb-1">{item.snippet.title}</h1>
          <p className="text-sm text-gray-300">{item.snippet.channelTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
