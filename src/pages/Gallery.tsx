
import { useState } from "react";
import { Play, Camera, Mic } from "lucide-react";
import Button from "@/components/Button";

const Gallery = () => {
  // In a real implementation, these would be actual images and videos
  const eventImages = Array(9).fill(null).map((_, i) => ({
    id: i + 1,
    src: "https://source.unsplash.com/random/400x400/?art,culture",
    alt: `Gallery image ${i + 1}`
  }));

  const [selectedImage, setSelectedImage] = useState<null | { id: number; src: string; alt: string }>(null);

  return (
    <div className="pt-16">
      {/* Page Header */}
      <header className="bg-deep-teal py-24 px-4 md:px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair text-cream-beige mb-4">
            Visual Vibes: The Movement in Photos & Film
          </h1>
        </div>
      </header>
      
      {/* Introduction */}
      <section className="py-16 bg-cream-beige">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg font-poppins text-deep-teal mb-6 text-center">
              Experience the journey of <em>Bridging Generations</em> through photos and videos that capture the energy, beauty, and unity of the event. From gallery walls to artist-led workshops, explore how art brings us together.
            </p>
          </div>
        </div>
      </section>
      
      {/* Event Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-center gap-3 mb-10">
            <Play size={24} className="text-warm-terracotta" />
            <h2 className="text-3xl font-bold font-playfair text-deep-teal">
              Event Highlights
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* These would be actual embedded videos in a real implementation */}
            <VideoCard title="Opening Night Celebrations" />
            <VideoCard title="Artist Panel Discussion" />
            <VideoCard title="Workshop: Cultural Storytelling" />
          </div>
        </div>
      </section>
      
      {/* Gallery Walls */}
      <section className="py-16 bg-cream-beige">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-center gap-3 mb-10">
            <Camera size={24} className="text-warm-terracotta" />
            <h2 className="text-3xl font-bold font-playfair text-deep-teal">
              Gallery Walls
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {eventImages.map((image) => (
              <div 
                key={image.id} 
                className="relative aspect-square overflow-hidden rounded cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Artist Talks */}
      <section className="py-16 bg-soft-teal">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-center gap-3 mb-10">
            <Mic size={24} className="text-cream-beige" />
            <h2 className="text-3xl font-bold font-playfair text-cream-beige">
              Artist Talks & Interviews
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <InterviewCard 
              name="Ava Jasmine Dedier" 
              title="Creative Director"
              imageUrl="https://source.unsplash.com/random/400x400/?artist,portrait"
            />
            <InterviewCard 
              name="Featured Artist" 
              title="Visual Artist"
              imageUrl="https://source.unsplash.com/random/400x400/?painter,portrait"
            />
          </div>
        </div>
      </section>
      
      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button 
              className="absolute -top-10 right-0 text-white"
              onClick={() => setSelectedImage(null)}
            >
              Close &times;
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};

const VideoCard = ({ title }: { title: string }) => {
  return (
    <div className="overflow-hidden rounded shadow-md">
      <div className="aspect-video bg-eggplant-plum flex items-center justify-center">
        <Play size={48} className="text-cream-beige opacity-70" />
      </div>
      <div className="p-4 bg-white">
        <h3 className="font-playfair font-bold text-lg text-deep-teal">{title}</h3>
        <p className="text-sm font-poppins text-gray-600 mt-1">
          Video • 2025
        </p>
      </div>
    </div>
  );
};

const InterviewCard = ({ 
  name, 
  title, 
  imageUrl 
}: { 
  name: string; 
  title: string; 
  imageUrl: string 
}) => {
  return (
    <div className="bg-cream-beige rounded overflow-hidden shadow-md">
      <div className="aspect-video relative">
        <img 
          src={imageUrl} 
          alt={name} 
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-deep-teal/50 flex items-center justify-center">
          <Play size={48} className="text-cream-beige opacity-80" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-playfair font-bold text-lg text-deep-teal">{name}</h3>
        <p className="text-sm font-poppins text-gray-700 mb-3">{title}</p>
        <Button variant="soft-teal" size="sm">
          Watch Interview
        </Button>
      </div>
    </div>
  );
};

export default Gallery;
