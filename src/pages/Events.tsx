import { AspectRatio } from "@/components/ui/aspect-ratio";
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
      
      {/* Partner Logos */}
      <div className="container mx-auto px-4 md:px-6 py-16">
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
  );
};

export default Events;
