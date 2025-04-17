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
                Connecting generations, honoring heritage, and shaping our collective future through art.
                Bridging Generations – A Cultural Tapestry in Art was born from a powerful idea: true inclusion is not about seeking permission to belong. It is about building new spaces where every generation, every culture, and every voice can create, connect, and thrive together. Through art, we are shaping a collective space that celebrates diversity, honors heritage, and fosters unity across communities.
              </p>
              
              <p>
                This vision began with Ava Jasmine Dedier, a 17-year-old visual artist who recognized a profound gap in representation and opportunity within the art world. Rather than waiting for change, Ava became the catalyst. She transformed her lived experiences into a platform that uplifts young, diverse voices and creates lasting bridges between generations.
              </p>
              
              <p>
                To expand this mission, Ava founded Rise Collective Canada, a nonprofit organization committed to advancing diversity, equity, and inclusion through innovative, youth-driven initiatives. Rise Collective is dedicated to empowering emerging artists and community leaders, providing them with the tools and spaces needed to shape the future on their own terms.
              </p>
              
              <p>
                Bridging Generations is a living example of this commitment. It is more than an event. It is a movement rooted in creativity, pride, and collective transformation, inviting all generations to come together and reimagine what community, culture, and collaboration can truly be.
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
      
      {/* Community Impact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-deep-teal text-center mb-8">
              Community Impact
            </h2>
            
            <div className="prose prose-lg max-w-none text-deep-teal font-poppins space-y-6">
              <p>
                Bridging Generations is reshaping what community connection looks like. Through art, storytelling, and cultural celebration, our event empowers BIPOC artists and community members by creating spaces where diversity, equity, and inclusion are not only highlighted but lived. We break down barriers between generations, cultures, and backgrounds, uniting people in a shared mission of creativity and pride.
              </p>
              
              <p>
                Our exhibitions and workshops offer more than just artistic expression; they offer visibility, validation, and voice to underrepresented communities. Every interaction fosters understanding, every creation nurtures belonging, and every gathering builds bridges that strengthen the cultural fabric of our neighborhoods. Through intentional representation and real engagement, Bridging Generations becomes a catalyst for lasting community empowerment and collective growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Artists Section */}
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
    </div>
  );
};

export default Events;
