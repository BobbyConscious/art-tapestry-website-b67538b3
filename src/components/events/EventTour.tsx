
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { EventTour as EventTourType } from "@/data/eventData";
import Button from "@/components/Button";

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
            <div className="prose prose-lg text-deep-teal max-w-none space-y-4">
              <p>
                Experience the transformative power of art as we reimagine public spaces across Markham and The Greater York region.
                Through Bridging Generations, we will transform local libraries into vibrant, gallery-style fine art exhibitions — creating spaces where culture, creativity, and community come to life.
              </p>
              
              <p>
                Our tour brings together diverse cultural expressions, hands-on workshops, and opportunities to connect with leading artists of all ages. Each stop invites you to witness the beauty of shared heritage, intergenerational storytelling, and artistic excellence — all in the heart of the community.
              </p>
              
              <p>
                Join us as art moves beyond the canvas and into the soul of our neighborhoods.
              </p>
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
          
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <AspectRatio ratio={16/9}>
                <img 
                  src="/lovable-uploads/54ee77e5-d0a3-48e5-b8f2-30c28cb48c03.png" 
                  alt="Intergenerational art event" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
            <div className="mt-6 flex justify-center">
              <Button 
                href="https://www.markham.ca/about-city-markham/events/event-listings" 
                variant="forest" 
                size="lg"
              >
                Find Art Exhibit Details here
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventTour;
