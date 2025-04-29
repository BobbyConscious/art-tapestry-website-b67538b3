
import React from "react";

const FeaturedArtistsSection = () => {
  return (
    <section className="py-16 bg-cream-beige">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-playfair text-deep-teal text-center mb-12">
          Featured Artists
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          <div className="flex flex-col items-center">
            <img 
              src="/lovable-uploads/c572e257-9288-4a4a-b121-1f69652b30ca.png"
              alt="Ava Jasmine Dedier"
              className="w-full aspect-square object-cover rounded mb-4"
            />
            <p className="text-deep-teal font-bold text-center">Ava Jasmine Dedier</p>
          </div>
          
          <div className="flex flex-col items-center">
            <img 
              src="/lovable-uploads/fecaad3c-2059-4a0d-b2b1-c928e773cfcd.png"
              alt="Fei Lu"
              className="w-full aspect-square object-cover rounded mb-4"
            />
            <p className="text-deep-teal font-bold text-center">Fei Lu</p>
          </div>
          
          <div className="flex flex-col items-center">
            <img 
              src="/lovable-uploads/eb19f842-857d-4a26-9593-f2a7c042b25e.png"
              alt="Candice Dixon"
              className="w-full aspect-square object-cover rounded mb-4"
            />
            <p className="text-deep-teal font-bold text-center">Candice Dixon</p>
          </div>
          
          <div className="flex flex-col items-center">
            <img 
              src="/lovable-uploads/fd1d85c6-e8be-4d0e-b49a-66ce39de680c.png"
              alt="Tiffany Joy Villahermosa"
              className="w-full aspect-square object-cover rounded mb-4"
            />
            <p className="text-deep-teal font-bold text-center">Tiffany Joy Villahermosa</p>
          </div>
          
          <div className="flex flex-col items-center">
            <img 
              src="/lovable-uploads/c717d225-8e0c-464a-ab73-57b13c7d0c6b.png"
              alt="Jamera DaCosta"
              className="w-full aspect-square object-cover rounded mb-4"
            />
            <p className="text-deep-teal font-bold text-center">Jamera DaCosta</p>
          </div>
        </div>
        
        {/* Partner Logos */}
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
    </section>
  );
};

export default FeaturedArtistsSection;
