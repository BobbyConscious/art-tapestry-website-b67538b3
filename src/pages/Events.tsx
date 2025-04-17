
import { Calendar, MapPin, Book, Palette, Mic, ShoppingBag } from "lucide-react";
import Button from "@/components/Button";
import FeaturedArtists from "@/components/FeaturedArtists";
import OurStory from "@/components/OurStory";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

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
  return (
    <div className="pt-16">
      {/* Page Header - Changed to "Partner With Purpose" */}
      <header className="bg-deep-teal py-24 px-4 md:px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair text-cream-beige mb-4">
            Partner With Purpose
          </h1>
        </div>
      </header>
      
      {/* Our Story Section */}
      <OurStory />
      
      {/* Event Tours Section */}
      {eventTours.map((tour) => (
        <section key={tour.id} className="py-16 bg-cream-beige">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair text-deep-teal text-center mb-12">
              {tour.title}
            </h2>
            
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
      
      {/* Workshop Themes */}
      <section className="py-16 bg-soft-teal text-cream-beige">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-cream-beige text-center mb-12">
            Workshop Themes
          </h2>
          
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
