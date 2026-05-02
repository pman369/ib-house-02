import { useState } from 'react'
import { X, Maximize2 } from 'lucide-react'

// Selected Images
import exterior from '../assets/gallery/exterior-main.jpeg'
import reception from '../assets/gallery/reception-warm.jpeg'
import roomPurple from '../assets/gallery/room-purple.jpeg'
import roomGreen from '../assets/gallery/room-green.jpeg'
import roomBlue from '../assets/gallery/room-blue.jpeg'
import roomNatural from '../assets/gallery/room-natural.jpeg'
import detailChandelier from '../assets/gallery/detail-chandelier.jpeg'
import detailStairs from '../assets/gallery/detail-stairs.jpeg'
import loungeEntry from '../assets/gallery/lounge-entry.jpeg'
import barShelf from '../assets/gallery/bar-shelf.png'
import barLounge1 from '../assets/gallery/bar-lounge-1.jpg'
import barLounge2 from '../assets/gallery/bar-lounge-2.jpg'

const GALLERY_IMAGES = [
  { id: 1, src: exterior, alt: 'IB House 02 Hotel Exterior - Modern architecture with secure parking', category: 'Exterior' },
  { id: 2, src: reception, alt: 'Warm and inviting hotel reception area with high-quality finishes', category: 'Lobby' },
  { id: 3, src: roomPurple, alt: 'Luxury bedroom with purple ambient mood lighting and premium linens', category: 'Rooms' },
  { id: 4, src: roomNatural, alt: 'Bright and airy bedroom with natural light and contemporary design', category: 'Rooms' },
  { id: 5, src: detailChandelier, alt: 'Exquisite modern chandelier lighting detail on the ceiling', category: 'Details' },
  { id: 6, src: roomGreen, alt: 'Modern hotel room featuring smart home technology and green ambient lighting', category: 'Rooms' },
  { id: 7, src: detailStairs, alt: 'Architectural staircase with marble steps and stainless steel railings', category: 'Interior' },
  { id: 8, src: roomBlue, alt: 'Executive suite with serene blue ambient lighting for a relaxing stay', category: 'Rooms' },
  { id: 9, src: loungeEntry, alt: 'Elegant lounge entrance area showing the spacious layout', category: 'Interior' },
  { id: 10, src: barShelf, alt: 'Premium 4K Bar Shelf with a selection of world-class liquors and refined crystal glassware', category: 'Bar' },
  { id: 11, src: barLounge1, alt: 'Sophisticated hotel bar and lounge area with stylish seating and warm ambient lighting', category: 'Bar' },
  { id: 12, src: barLounge2, alt: 'Luxury bar lounge featuring a modern TV, premium sound, and comfortable seating', category: 'Lobby' }
]

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="gallery" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
            Visual Experience
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Step into a world of comfort and luxury. Explore our meticulously designed spaces where every detail is crafted for your ultimate experience.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((image) => (
            <div
              key={image.id}
              className="relative group overflow-hidden rounded-2xl cursor-pointer break-inside-avoid shadow-2xl shadow-black/50"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-1">
                  {image.category}
                </span>
                <div className="flex justify-between items-center">
                  <h3 className="text-white font-medium text-lg lg:opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    Discover More
                  </h3>
                  <Maximize2 className="text-amber-500 w-5 h-5 lg:opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-amber-500 transition-colors p-2 bg-gray-900/50 rounded-full"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
            >
              <X size={32} />
            </button>

            <div
              className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="mt-6 text-center">
                <p className="text-amber-500 font-semibold tracking-widest uppercase text-sm mb-2">
                  {selectedImage.category}
                </p>
                <p className="text-white text-lg font-medium">
                  {selectedImage.alt}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery
