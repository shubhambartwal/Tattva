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
        <div className="flex flex-col items-center justify-center p-4 mt-12">
            <div className="flex space-x-1 mb-4">
                {/* Toggle buttons with background color only for active button */}
                <button
    onClick={() => setViewType('all')}
    className={`px-2 py-0.5 text-white rounded ${viewType === 'all' ? 'bg-transparent text-[#e9ab75] ' : 'bg-transparent text-[#7d6957]'} hover:text-[#e9ab75] hover:rounded-xl`}
>
   <p> All</p>
</button>

{/* Line between buttons */}
<span className="border-l-2 border-[#7d6957]  h-6" />

<button
    onClick={() => setViewType('youtube')}
    className={`px-2 py-0.5 text-white rounded ${viewType === 'youtube' ? 'bg-transparent text-[#e9ab75] ' : 'bg-transparent text-[#7d6957]'} hover:text-[#e9ab75] hover:rounded-xl`}
>
  <p>Tattva</p>  
</button>

{/* Line between buttons */}
<span className="border-l-2 border-[#7d6957] h-6" />

<button
    onClick={() => setViewType('freelance')}
    className={`px-2 py-0.5 text-white rounded ${viewType === 'freelance' ? 'bg-transparent text-[#e9ab75] ' : 'bg-transparent text-white'}  hover:text-[#e9ab75] hover:rounded-xl`}
>
  <p> Freelance Work</p> 
</button>

             
            </div>

            {/* Grid of videos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-2 sm:.5py-0.5x-6 md:px-24">
                {filteredVideos.map((item) => (
                    <Link key={item.id.videoId} to={`/watch?v=${item.id.videoId}`} className="w-full">
                        <VideoCard item={item} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default VideoContainer;
