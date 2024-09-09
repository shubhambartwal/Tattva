import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { YOUTUBE_VIDEO_API } from '../Constants/youtube';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);

    const fetchYoutubeVideo = async () => {
        try {
            const res = await axios.get(YOUTUBE_VIDEO_API);
            console.log(res?.data?.items);
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
                <Link key={item.id} to={`/watch?v=${item.id}`}>
                    <VideoCard item={item} />
                </Link>
            ))}
        </div>
    );
};

export default VideoContainer;
