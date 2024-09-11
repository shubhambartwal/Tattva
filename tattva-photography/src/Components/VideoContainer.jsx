import { useEffect, useState } from 'react';
import axios from 'axios';
// import { MY_CONTENT } from '../Constants/youtube';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
const VideoContainer = () => {
    const [videos, setVideos] = useState([]);
    const apiUrl = `${import.meta.env.VITE_BASE_URL}/search?key=${import.meta.env.VITE_API_KEY}&channelId=${import.meta.env.VITE_CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`;
    const fetchYoutubeVideo = async () => {
        try {
            const res = await axios.get(apiUrl);
            
            setVideos(res?.data?.items);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchYoutubeVideo();
    }, []);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4">
            {videos.map((item) => (
                 <Link key={item.id.videoId} to={`/watch?v=${item.id.videoId}`}>
                    <VideoCard  item={item} />
                 </Link>
            ))}
        </div>
    );
};

export default VideoContainer;
