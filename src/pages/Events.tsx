
import { AspectRatio } from "@/components/ui/aspect-ratio";
import EventsCalendar from "@/components/events/EventsCalendar";
import WorkshopsSection from "@/components/events/WorkshopsSection";
import { eventTours } from "@/data/eventData";

const Events = () => {
  return (
    <div className="pt-16">
      {/* Page Header with Background Image */}
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
      
      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-deep-teal text-center mb-8">
              Our Story
            </h2>

            <div className="prose prose-lg max-w-none text-deep-teal font-poppins space-y-6">
              <p>
                "Bridging Generations – A Cultural Tapestry in Art" is an innovative, community-driven art initiative designed as a collective movement of talented and purposeful BIPOC visual artists.
              </p>
              
              <p>
                What began as a personal vision from 17-year-old visual artist and creative director <strong>Ava Jasmine Dedier</strong> is now creating unforgettable community experiences.
              </p>
              
              <p>
                Ava noticed a gap — in galleries, in stories told, and in how young and culturally diverse voices are valued in the art world. That gap also reflected her own lived experience. So, she created a solution:
              </p>
              
              <p>
                <strong>Bridging Generations</strong> is her answer to a world in need of connection. It's a celebration of legacy, creativity, community and cultural identity.
              </p>

              <p>
                To strengthen the impact of the event Ava has thoughtfully selected powerhouse artists who will aid in collaboratively building this pioneering event, with a mission to establish an ongoing platform that amplifies artistic talent, fosters deeper cultural understanding, and actively unites multiple generations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Event Calendar Section */}
      <EventsCalendar />
      
      {/* Event Tours Section */}
      {eventTours.map((tour) => (
        <section key={tour.id} className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-10 mb-12">
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold font-playfair text-deep-teal mb-6">
                  {tour.title}
                </h2>
                <div className="prose prose-lg text-deep-teal max-w-none">
                  <p>Join us for a series of transformative art events hosted across the Markham area. Our tour brings together diverse cultural expressions, hands-on workshops, and opportunities to connect with leading artists of all ages.</p>
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
      ))}
      
      {/* Workshop Themes Section */}
      <WorkshopsSection />
      
      {/* Community Impact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold font-playfair text-deep-teal mb-6">Community Impact</h2>
              <div className="prose prose-lg text-deep-teal max-w-none">
                <p>Our events bring together people from all walks of life, creating spaces for intergenerational learning and cultural celebration. Through art, we build bridges between different communities and foster understanding across generations.</p>
                <p>Each workshop and exhibition creates lasting connections that extend beyond the event itself, nurturing creativity and cultural pride throughout the Markham community.</p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
              <AspectRatio ratio={4/3}>
                <img 
                  src="/lovable-uploads/8a19aff1-0965-434c-98ea-6824ce3db3bb.png" 
                  alt="Community art celebration" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
