import PhotoCard from './PhotoCard';
import { Link } from 'react-router-dom';

const photos = [
  { src: `https://picsum.photos/300/500?random=${Math.random()}`, title: 'Image 1', id: 1 },
  { src: `https://picsum.photos/300/500?random=${Math.random()}`, title: 'Image 2', id: 2 },
  { src: `https://picsum.photos/300/500?random=${Math.random()}`, title: 'Image 3', id: 3 },
  { src: `https://picsum.photos/300/500?random=${Math.random()}`, title: 'Image 4', id: 4 },
  { src: `https://picsum.photos/300/500?random=${Math.random()}`, title: 'Image 5', id: 5 },
  { src: `https://picsum.photos/300/500?random=${Math.random()}`, title: 'Image 6', id: 6 },
];

const PhotoCardHolder = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 sm:px-8 lg:px-[20%] py-8 max-w-full mx-auto">
      {photos.map((photo, index) => (
        <Link key={index} to={`/watch/${photo.id}`}>
          <PhotoCard key={index} src={photo.src} title={photo.title} />
        </Link>
      ))}
    </div>
  );
};

export default PhotoCardHolder;
