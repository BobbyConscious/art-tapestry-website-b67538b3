
import { useState } from "react";

const images = [
  {
    src: "/lovable-uploads/a0fe7ef8-b510-44b2-9a4a-bac4263bc2e9.png",
    alt: "Group of diverse people holding colorful art pieces",
  },
  {
    src: "/lovable-uploads/54ee77e5-d0a3-48e5-b8f2-30c28cb48c03.png",
    alt: "Intergenerational group with young child, adult, and elder",
  },
  {
    src: "/lovable-uploads/9a5fd8df-7472-4d9c-b4f5-336d74a00668.png",
    alt: "Diverse group engaging in craft activities",
  },
  {
    src: "/lovable-uploads/a42a3447-9bd9-4ceb-8a0b-4125c9324588.png",
    alt: "Young people working on creative projects",
  },
  {
    src: "/lovable-uploads/c7390662-fc90-451c-8be1-57ea6297d184.png",
    alt: "Young artist with apron against colorful background",
  },
  {
    src: "/lovable-uploads/4f434f45-47d7-4bde-ad0f-2cff14472537.png",
    alt: "Artist in library displaying cultural art",
  }
];

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold font-playfair text-deep-teal text-center mb-12">
        Celebrating Artistic Diversity
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-md group">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
              onClick={() => setSelectedImage(image.src)}
            />
            <div className="absolute inset-0 bg-deep-teal bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-cream-beige font-poppins font-medium text-center px-4">
                {image.alt}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-screen">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-4xl"
            >
              &times;
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
