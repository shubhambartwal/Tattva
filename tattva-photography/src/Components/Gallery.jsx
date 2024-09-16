import { useState } from 'react'
import { X } from 'lucide-react'
import { images } from '../constants/images'
import { useParams } from 'react-router-dom'

const GalleryImage = ({ src, alt, onClick }) => (
  <div 
    className="relative aspect-[3/4] overflow-hidden rounded-lg cursor-pointer group"
    onClick={onClick}
  >
    <img
      src={src}
      alt={alt}
      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
  </div>
)

const FullScreenImage = ({ src, alt, onClose }) => (
  <div className="fixed inset-0 bg-black z-50 flex items-center justify-center w-full h-full">
    <button
      onClick={onClose}
      className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors duration-200"
      aria-label="Close full screen view"
    >
      <X size={24} />
    </button>
    <img src={src} alt={alt} className="max-w-full max-h-full object-contain" />
  </div>
)

export default function GalleryPage() {
  const { id } = useParams()
  const [selectedImage, setSelectedImage] = useState(null)
  const gallery = images.find(gal => gal.id === parseInt(id))
  
  if (!gallery) {
    return <p>No images found for this gallery.</p>
  }

  return (
    <div className="w-full h-full min-h-screen bg-black"  >
      <h1 className="text-3xl font-bold mb-8 text-center text-white">Photo Gallery</h1>
      <div className="grid p-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {gallery.pics.map((image, index) => (
          <GalleryImage
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
      {selectedImage && (
        <FullScreenImage
          src={selectedImage.src}
          alt={selectedImage.alt}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  )
}
