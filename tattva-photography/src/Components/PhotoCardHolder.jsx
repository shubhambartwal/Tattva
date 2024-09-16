import PhotoCard from './PhotoCard';
import { Link } from 'react-router-dom';
const photos = [
  { src: 'https://via.placeholder.com/300x500', title: 'Image 1', id: 1 },
  { src: 'https://via.placeholder.com/300x500', title: 'Image 2', id: 2 },
  { src: 'https://via.placeholder.com/300x500', title: 'Image 3', id: 3 },
  { src: 'https://via.placeholder.com/300x500', title: 'Image 4', id: 4 },
  { src: 'https://via.placeholder.com/300x500', title: 'Image 5', id: 5 },
  { src: 'https://via.placeholder.com/300x500', title: 'Image 6', id: 6 },
];

const PhotoCardHolder = () => {
  return (
    <div className='grid grid-cols-2 gap-12 p-3  md:grid-cols-2 lg:grid-cols-3 md:p-8 lg:px-[25%] lg:py-10'>
      {photos.map((photo, index) => (
        <Link key={index} to={`/watch/${photo.id}`}>
          <PhotoCard key={index} src={photo.src} title={photo.title} />
        </Link>
      ))}
    </div>
  );
};

export default PhotoCardHolder;
