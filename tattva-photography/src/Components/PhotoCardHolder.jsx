import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PhotoCard from './PhotoCard'
import { CloudinaryImages } from '../assets/CloudinaryData';
const PhotoCardHolder = () => {
  const [groupedImages, setGroupedImages] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchImages =  () => {
      const groupedByFolder = {};

      Object.values(CloudinaryImages).forEach((imageGroup) => {
        imageGroup.forEach((image) => {
          const folder = image.asset_folder;
          if (!groupedByFolder[folder]) {
            groupedByFolder[folder] = [];
          }
          groupedByFolder[folder].push(image);
        });
      });
  
      setGroupedImages(groupedByFolder);
      setLoading(false);
    }  
    fetchImages();
  }, []);
  if (loading) {
    return <p>Loading images...</p>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 py-8">
       {Object.entries(groupedImages).map((image,index) => (
        <Link key={index} to={`/watch/${index}`}  state= {{ imageData: Object.entries(groupedImages) }} >
          <div className="w-full sm:w-full md:w-full lg:w-1/4 xl:w-1/5">
            <PhotoCard src={image[1][0].url} title={image[1][0].asset_folder} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PhotoCardHolder;
