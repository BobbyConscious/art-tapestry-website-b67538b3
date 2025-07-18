
import React, { useState } from "react";

const artists: Artist[] = [
  {
    name: "Ava Jasmine Dedier",
    title: "Creative Director, Published Visual and Digital Artist, Age 17",
    image: "/lovable-uploads/c572e257-9288-4a4a-b121-1f69652b30ca.png"
  },
  {
    name: "Fei Lu",
    title: "Published Visual Artist, Illustrator, Art Educator, Owner of Wing Canvas Art School",
    image: "/lovable-uploads/fecaad3c-2059-4a0d-b2b1-c928e773cfcd.png"
  },
  {
    name: "Candice Dixon",
    title: "TMU Carnival Arts Professor, Costume Creator, Owner of SugaCayne",
    image: "/lovable-uploads/eb19f842-857d-4a26-9593-f2a7c042b25e.png"
  },
  {
    name: "Tiffany Joy Villahermosa",
    title: "Published Visual Artist & Art Educator",
    image: "/lovable-uploads/fd1d85c6-e8be-4d0e-b49a-66ce39de680c.png"
  },
  {
    name: "Jamera DaCosta",
    title: "Published Visual and Digital Art, Illustrator and Designer and Art Educator",
    image: "/lovable-uploads/c717d225-8e0c-464a-ab73-57b13c7d0c6b.png"
  }
];

type Artist = {
  name: string;
  title: string;
  image: string;
};

const FeaturedArtists = () => {
  const [activeArtist, setActiveArtist] = useState<Artist | null>(null);

  return (
    <div className="py-16 bg-cream-beige">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-playfair text-deep-teal text-center mb-6">
          Featured Artists
        </h2>
        <p className="text-lg text-warm-terracotta font-playfair italic text-center mb-12">
          Five powerhouse artists. Infinite cultural impact.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {artists.map((artist, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center"
              onClick={() => setActiveArtist(artist)}
            >
              <div className="w-full aspect-square mb-4 overflow-hidden cursor-pointer relative group">
                <img 
                  src={artist.image} 
                  alt={artist.name} 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-deep-teal bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-cream-beige font-bold">View Details</span>
                </div>
              </div>
              <h3 className="font-playfair font-bold text-deep-teal text-xl text-center">{artist.name}</h3>
              <p className="text-center text-sm text-deep-teal mt-1 px-2">{artist.title}</p>
            </div>
          ))}
        </div>

        {/* Partner Logos - Updated with new logos */}
        <div className="mt-16">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <img src="/lovable-uploads/726a3789-46ad-45d8-8545-e59dfa7a97e8.png" alt="Bell Media" className="h-12 object-contain" />
            <img src="/lovable-uploads/2024673c-8174-4d93-9cf8-91c83446c808.png" alt="CTV" className="h-12 object-contain" />
            <img src="/lovable-uploads/f379b88a-160e-4fab-9f8f-318c70be679d.png" alt="NOW" className="h-12 object-contain" />
            <img src="/lovable-uploads/8d5b5a14-de84-4679-a118-672da198d177.png" alt="Newmarket Today" className="h-12 object-contain" />
            <img src="/lovable-uploads/c5bedac4-bfbd-4ce7-b1dd-0db1bfe66cc5.png" alt="CBC" className="h-12 object-contain" />
            <img src="/lovable-uploads/8272e694-b13d-450a-98b5-b216b02f6eb4.png" alt="York Region" className="h-12 object-contain" />
            <img src="/lovable-uploads/183a5038-7fe5-45d1-8b2b-a534901f9513.png" alt="Markham Economist & Sun" className="h-12 object-contain" />
          </div>
        </div>
      </div>

      {/* Artist Modal */}
      {activeArtist && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveArtist(null)}
        >
          <div 
            className="bg-cream-beige max-w-2xl w-full p-6 rounded-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-deep-teal hover:text-warm-terracotta"
              onClick={() => setActiveArtist(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3">
                <div className="aspect-square overflow-hidden rounded">
                  <img 
                    src={activeArtist.image} 
                    alt={activeArtist.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <h3 className="font-playfair font-bold text-deep-teal text-2xl">{activeArtist.name}</h3>
                <p className="text-warm-terracotta font-medium mt-1">{activeArtist.title}</p>
                
                <div className="mt-4 text-deep-teal">
                  <p>
                    {activeArtist.name} brings a wealth of experience and unique perspective to the Bridging Generations project. 
                    Their work celebrates cultural heritage and creates meaningful connections across generations.
                  </p>
                  <p className="mt-3">
                    Through their artistic practice, they inspire community engagement and help preserve important stories and traditions.
                  </p>
                </div>
                
                <div className="mt-6">
                  <button className="bg-deep-teal text-cream-beige px-6 py-2 rounded hover:bg-warm-terracotta transition-colors">
                    View Artist Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedArtists;
