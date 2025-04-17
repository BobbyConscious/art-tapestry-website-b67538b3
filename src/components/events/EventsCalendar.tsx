
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import EventCard from "./EventCard";
import { eventTours } from "@/data/eventData";

const EventsCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  return (
    <section className="py-16 bg-cream-beige">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-playfair text-deep-teal text-center mb-8">
          Event Calendar
        </h2>
        
        <div className="flex flex-col md:flex-row items-start gap-8 max-w-6xl mx-auto">
          <div className="w-full md:w-1/2 bg-white rounded-lg shadow-md p-4">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border pointer-events-auto"
            />
          </div>
          
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-2xl font-bold font-playfair text-deep-teal">
              Upcoming Events
            </h3>
            
            <div className="space-y-4">
              {eventTours[0].dates.map((date, index) => (
                <EventCard 
                  key={index}
                  date={date.range}
                  venue={date.venue}
                  location={date.location}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsCalendar;
