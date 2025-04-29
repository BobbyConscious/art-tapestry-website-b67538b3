
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { EventTour as EventTourType } from "@/data/eventData";

type EventTourProps = {
  tour: EventTourType;
};

const EventTour = ({ tour }: EventTourProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-deep-teal mb-6">
              {tour.title}
            </h2>
            <div className="prose prose-lg text-deep-teal max-w-none">
              <p>Join us for a series of transformative art events hosted across the Markham area. Our tour brings together diverse cultural expressions, hands-on workshops, and opportunities to connect with leading artists of all ages.</p>
            </div>
            
            <div className="mt-6 space-y-4">
              {tour.dates.map((date, index) => (
                <div key={index} className="p-4 border border-soft-teal rounded-md">
                  <p className="font-bold">{date.range}</p>
                  <p>{date.venue}</p>
                  {date.location && <p className="text-sm text-gray-600">{date.location}</p>}
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
            <AspectRatio ratio={16/9}>
              <img 
                src="/lovable-uploads/54ee77e5-d0a3-48e5-b8f2-30c28cb48c03.png" 
                alt="Intergenerational art event" 
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventTour;
