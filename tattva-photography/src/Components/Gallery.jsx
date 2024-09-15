import { useState } from 'react'
import { X } from 'lucide-react'

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
  <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
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
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    { src: "/placeholder.svg?height=1200&width=900", alt: "Gallery Image 1" },
    { src: "/placeholder.svg?height=1200&width=900", alt: "Gallery Image 2" },
    { src: "/placeholder.svg?height=1200&width=900", alt: "Gallery Image 3" },
    { src: "/placeholder.svg?height=1200&width=900", alt: "Gallery Image 4" },
    { src: "/placeholder.svg?height=1200&width=900", alt: "Gallery Image 5" },
    { src: "/placeholder.svg?height=1200&width=900", alt: "Gallery Image 6" },
    { src: "/placeholder.svg?height=1200&width=900", alt: "Gallery Image 7" },
    { src: "/placeholder.svg?height=1200&width=900", alt: "Gallery Image 8" },
    { src: "/placeholder.svg?height=1200&width=900", alt: "Gallery Image 9" },
    { src: "/placeholder.svg?height=1200&width=900", alt: "Gallery Image 10" },
    { src: "/placeholder.svg?height=1200&width=900", alt: "Gallery Image 11" },
    { src: "/placeholder.svg?height=1200&width=900", alt: "Gallery Image 12" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Photo Gallery</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((image, index) => (
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