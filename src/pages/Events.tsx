
import { Calendar, MapPin, Book, Palette, Mic, ShoppingBag } from "lucide-react";
import Button from "@/components/Button";

const Events = () => {
  return (
    <div className="pt-16">
      {/* Page Header */}
      <header className="bg-deep-teal py-24 px-4 md:px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair text-cream-beige mb-4">
            The Tour: Art in Motion
          </h1>
        </div>
      </header>
      
      {/* Introduction */}
      <section className="py-16 bg-cream-beige">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg font-poppins text-deep-teal mb-6">
              What began as a personal vision from 17-year-old visual artist and creative director <strong>Ava Jasmine Dedier</strong> is now creating unforgettable community experiences.
            </p>
            
            <p className="text-lg font-poppins text-deep-teal mb-6">
              Ava noticed a gap — in galleries, in stories told, and in how young and culturally diverse voices are valued in the art world. That gap also reflected her own lived experience. So, she created a solution:
            </p>
            
            <p className="text-lg font-poppins text-deep-teal mb-6">
              <strong>Bridging Generations</strong> is her answer to a world in need of connection. It's a celebration of legacy, creativity, and cultural identity.
            </p>
          </div>
        </div>
      </section>
      
      {/* Event Dates */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-deep-teal text-center mb-12">
            Event Dates and Venues
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <EventCard 
              date="August 7th to August 10th, 2025" 
              venue="Milliken Mills Library" 
            />
            
            <EventCard 
              date="August 14th to August 17th, 2025" 
              venue="Angus Glen Library" 
            />
            
            <EventCard 
              date="August 21st to August 24th, 2025" 
              venue="Markham Village Library" 
            />
            
            <EventCard 
              date="August 28th to August 31st, 2025" 
              venue="Thornhill Village Library" 
            />
          </div>
        </div>
      </section>
      
      {/* Workshop Themes */}
      <section className="py-16 bg-soft-teal text-cream-beige">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-cream-beige text-center mb-12">
            Workshop Themes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
            <WorkshopCard 
              icon={<Palette size={36} />}
              title="Roots & Reflections: Visual Storytelling Through Culture"
            />
            
            <WorkshopCard 
              icon={<Book size={36} />}
              title="Foundations of Art: I Love Who I Am"
            />
            
            <WorkshopCard 
              icon={<Mic size={36} />}
              title="Ink & Identity: Culture Through Poetic Expression"
            />
            
            <WorkshopCard 
              icon={<ShoppingBag size={36} />}
              title="Wearable Culture: Fashion & Carnival Arts"
            />
          </div>
          
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg font-poppins mb-8">
              These dynamic, hands-on workshops will be led by our featured artists and special guests. Each workshop creates space for creative exploration, cultural pride, and personal growth for all ages.
            </p>
            
            <Button 
              variant="default" 
              size="lg" 
              href="https://www.markhampubliclibrary.ca/" 
              className="bg-cream-beige text-deep-teal hover:bg-opacity-90"
            >
              Register Here – Markham Public Library ➜
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

const EventCard = ({ date, venue }: { date: string; venue: string }) => {
  return (
    <div className="bg-cream-beige border-l-4 border-warm-terracotta p-6 rounded-r shadow-md">
      <div className="flex items-start">
        <div className="mr-4 text-warm-terracotta">
          <Calendar size={24} />
        </div>
        <div>
          <p className="font-bold font-playfair text-deep-teal text-xl mb-2">{date}</p>
        </div>
      </div>
      
      <div className="flex items-start mt-4">
        <div className="mr-4 text-warm-terracotta">
          <MapPin size={24} />
        </div>
        <div>
          <p className="font-medium font-poppins text-deep-teal">
            <strong>Venue:</strong> {venue}
          </p>
        </div>
      </div>
    </div>
  );
};

const WorkshopCard = ({ icon, title }: { icon: React.ReactNode; title: string }) => {
  return (
    <div className="bg-cream-beige text-deep-teal p-6 rounded shadow-md flex items-center">
      <div className="mr-4 text-warm-terracotta">
        {icon}
      </div>
      <h3 className="font-bold font-playfair text-xl">{title}</h3>
    </div>
  );
};

export default Events;
