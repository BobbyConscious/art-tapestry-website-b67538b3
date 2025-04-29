
import React from "react";

const EventsHeader = () => {
  return (
    <header className="bg-deep-teal py-24 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="/lovable-uploads/f7c2c2ab-dce6-475c-aa55-2532c5ee2ffa.png" 
          alt="Events Background" 
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold font-playfair text-cream-beige mb-4">
          Events
        </h1>
      </div>
    </header>
  );
};

export default EventsHeader;
