import { useEffect, useState } from 'react';
import axios from 'axios';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);
    const [viewType, setViewType] = useState('all'); // Toggle state for view type
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

    // Filter videos based on viewType
    const filteredVideos = viewType === 'all' ? videos : videos.filter(item => item.snippet.category === viewType);

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <div className="flex space-x-4 mb-4">
                {/* Toggle buttons */}
                <button onClick={() => setViewType('youtube')} className={`bg-[#7d6957] px-4 py-2 text-white rounded hover:bg-[#645349] ${viewType === 'youtube' ? 'bg-opacity-100' : 'bg-opacity-50'}`}>YouTube Videos</button>
                <button onClick={() => setViewType('freelance')} className={`bg-[#7d6957] px-4 py-2 text-white rounded hover:bg-[#645349] ${viewType === 'freelance' ? 'bg-opacity-100' : 'bg-opacity-50'}`}>Freelance Work</button>
                <button onClick={() => setViewType('all')} className={`bg-[#7d6957] px-4 py-2 text-white rounded hover:bg-[#645349] ${viewType === 'all' ? 'bg-opacity-100' : 'bg-opacity-50'}`}>All</button>
            </div>

            {/* Line between buttons and content */}
            <hr className="w-full border-t-2 border-[#7d6957] mb-4" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-24"> {/* Increased left and right padding */}
                {filteredVideos.map((item) => (
                    <Link key={item.id.videoId} to={`/watch?v=${item.id.videoId}`}>
                        <VideoCard item={item} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default VideoContainer;
