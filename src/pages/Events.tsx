
import { useState } from "react";
import { Calendar as CalendarIcon, MapPin, Book, Palette, Mic, ShoppingBag } from "lucide-react";
import Button from "@/components/Button";
import FeaturedArtists from "@/components/FeaturedArtists";
import OurStory from "@/components/OurStory";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

// Event data structure to support multiple events
type EventTour = {
  id: number;
  title: string;
  dates: {
    range: string;
    venue: string;
    location?: string;
  }[];
};

// Workshop data structure with detailed information
type Workshop = {
  id: number;
  title: string;
  icon: React.ReactNode;
  presenter: string;
  description: string[];
  takeaways: string[];
};

// Sample data for events
const eventTours: EventTour[] = [
  {
    id: 1,
    title: "The Tour: Art in Motion",
    dates: [
      {
        range: "August 7th to August 10th, 2025",
        venue: "Milliken Mills Library",
        location: "Markham, ON"
      },
      {
        range: "August 14th to August 17th, 2025",
        venue: "Angus Glen Library",
        location: "Markham, ON"
      },
      {
        range: "August 21st to August 24th, 2025",
        venue: "Markham Village Library",
        location: "Markham, ON"
      },
      {
        range: "August 28th to August 31st, 2025",
        venue: "Thornhill Village Library",
        location: "Thornhill, ON"
      }
    ]
  }
];

// Workshop data with updated detailed descriptions
const workshops: Workshop[] = [
  {
    id: 1,
    title: "Roots & Reflections: Visual Storytelling Through Culture",
    icon: <Palette size={36} />,
    presenter: "",
    description: [
      "Step into the art of storytelling with visionary artists and creative leaders. In this mixed media workshop, participants will create self-portraits or narrative scenes rooted in their heritage, dreams, or identity that is guided by Ava's own Afro-Caribbean influences.",
      "Learn how to sketch with purpose, translate personal stories into imagery, and combine materials to bring your vision to life. It's a journey into who you are, where you come from, and where you're going."
    ],
    takeaways: [
      "How to visually express identity and culture",
      "Rapid sketching and mixed media techniques",
      "Artistic storytelling from concept to creation"
    ]
  },
  {
    id: 2,
    title: "Foundations of Art: I Love Who I Am",
    icon: <Book size={36} />,
    presenter: "",
    description: [
      "Build confidence and artistic skill while celebrating your individuality. In this empowering workshop, the facilitator introduces the foundational elements of art. Using shape, value, and color through the lens of self-love and cultural pride.",
      "Participants will be guided from blank canvas to final artwork, using drawing and painting to explore the theme: \"I love who I am, and I'm proud to show it.\" Perfect for beginners and young creators alike."
    ],
    takeaways: [
      "Understanding the elements of art",
      "Step-by-step creative process guidance",
      "Positive affirmations through visual storytelling"
    ]
  },
  {
    id: 3,
    title: "Ink & Identity: Culture Through Poetic Expression",
    icon: <Mic size={36} />,
    presenter: "",
    description: [
      "Merge words and visuals in a deeply personal creative experience. The facilitator invites youth to reflect on what they love about their culture and channel those feelings into poetry and abstract art.",
      "Participants will write short, affirming poems and transform them into expressive artworks ranging from portraits, symbols, or abstract visuals. This session nurtures emotional literacy, self-worth, and creative freedom, reminding each participant: your story matters, and your art is enough."
    ],
    takeaways: [
      "Explore emotions and identity through poetry",
      "Learn abstract art techniques rooted in self-expression",
      "Celebrate authenticity and cultural pride"
    ]
  },
  {
    id: 4,
    title: "Wearable Culture: Fashion & Carnival Arts",
    icon: <ShoppingBag size={36} />,
    presenter: "",
    description: [
      "Experience the fusion of fashion and heritage with the vibrant artistry of Candice Dixon. This workshop dives into the world of Caribbean Carnival and its rich legacy as a cultural celebration.",
      "Participants will design and create their own wearable art: masks, costume elements, or bold accessories that draw from their cultural background and personal creativity. A joyful hands-on exploration of style, identity, and empowerment."
    ],
    takeaways: [
      "Learn the cultural roots of Carnival",
      "Explore fashion as a form of storytelling",
      "Create expressive, heritage-inspired wearable pieces"
    ]
  }
];

const Events = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
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
      
      {/* Our Story Section with updated text */}
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
                  <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                    <p className="font-bold text-warm-terracotta">{date.range}</p>
                    <p className="font-medium text-deep-teal">{date.venue}, {date.location}</p>
                    <p className="text-sm text-deep-teal mt-2">Art workshops and exhibitions</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Event Tours Section with Featured Image */}
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {tour.dates.map((date, index) => (
                <EventCard 
                  key={index}
                  date={date.range}
                  venue={date.venue}
                  location={date.location}
                />
              ))}
            </div>
          </div>
        </section>
      ))}
      
      {/* Workshop Themes with Gallery */}
      <section className="py-16 bg-soft-teal text-cream-beige">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-cream-beige text-center mb-12">
            Workshop Themes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/9a5fd8df-7472-4d9c-b4f5-336d74a00668.png" 
                alt="Group workshop activity" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/a42a3447-9bd9-4ceb-8a0b-4125c9324588.png" 
                alt="Creative art project" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/c7390662-fc90-451c-8be1-57ea6297d184.png" 
                alt="Young artist" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/4f434f45-47d7-4bde-ad0f-2cff14472537.png" 
                alt="Artist displaying work" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
            {workshops.map((workshop) => (
              <WorkshopCard 
                key={workshop.id}
                workshop={workshop}
              />
            ))}
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
      
      {/* Featured Artists Section with spacing added */}
      <div className="py-8"></div>
      <FeaturedArtists />
    </div>
  );
};

const EventCard = ({ date, venue, location }: { date: string; venue: string; location?: string }) => {
  return (
    <div className="bg-cream-beige border-l-4 border-warm-terracotta p-6 rounded-r shadow-md">
      <div className="flex items-start">
        <div className="mr-4 text-warm-terracotta">
          <CalendarIcon size={24} />
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
          {location && (
            <p className="font-medium font-poppins text-deep-teal mt-1">
              <strong>Location:</strong> {location}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const WorkshopCard = ({ workshop }: { workshop: Workshop }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-cream-beige text-deep-teal p-6 rounded shadow-md flex items-center hover:bg-opacity-90 cursor-pointer transition-colors">
          <div className="mr-4 text-warm-terracotta">
            {workshop.icon}
          </div>
          <h3 className="font-bold font-playfair text-xl">{workshop.title}</h3>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-cream-beige">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair text-deep-teal">{workshop.title}</DialogTitle>
          {workshop.presenter && (
            <DialogDescription className="text-warm-terracotta font-medium">
              {workshop.presenter}
            </DialogDescription>
          )}
        </DialogHeader>
        
        <div className="mt-4 text-deep-teal space-y-4">
          {workshop.description.map((paragraph, index) => (
            <p key={index} className="font-poppins">{paragraph}</p>
          ))}
          
          <div className="mt-6">
            <h4 className="font-bold font-playfair text-lg text-deep-teal mb-2">Takeaways:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {workshop.takeaways.map((takeaway, index) => (
                <li key={index} className="font-poppins">{takeaway}</li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Events;
