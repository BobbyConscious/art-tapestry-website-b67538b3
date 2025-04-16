
import { Link } from "react-router-dom";
import Button from "@/components/Button";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-deep-teal">
          <div className="absolute inset-0" style={{ 
            backgroundImage: "url('/lovable-uploads/dcc5b3c2-3d6a-4452-9986-9179a51d8f8a.png')", 
            backgroundSize: "cover", 
            backgroundPosition: "center",
            mixBlendMode: "soft-light", 
            opacity: 0.9 
          }}></div>
          
          {/* Color blocks - these mimic the design in the reference image */}
          <div className="absolute left-0 top-0 w-1/3 h-1/3 bg-deep-teal opacity-70"></div>
          <div className="absolute left-1/3 top-0 w-1/3 h-1/3 bg-warm-terracotta opacity-60"></div>
          <div className="absolute left-2/3 top-0 w-1/3 h-1/3 bg-soft-teal opacity-70"></div>
          <div className="absolute left-0 top-1/3 w-1/4 h-1/3 bg-burnt-mustard opacity-60"></div>
          <div className="absolute left-1/4 top-1/3 w-1/2 h-1/3 bg-eggplant-plum opacity-50"></div>
          <div className="absolute left-3/4 top-1/3 w-1/4 h-1/3 bg-forest-green opacity-60"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 pt-16 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-playfair text-cream-beige mb-4 leading-tight">
            BRIDGING<br />GENERATIONS
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-playfair text-cream-beige mb-12">
            A Cultural Tapestry of Art
          </h2>
          
          {/* Quote Box */}
          <div className="max-w-2xl mx-auto mb-12 p-6 bg-warm-terracotta rounded-lg">
            <p className="text-lg md:text-xl font-poppins text-cream-beige font-medium">
              Art has no age limit. Culture has no boundaries. Unity starts with us.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
            <Button variant="default" size="lg" to="/#join-movement">
              Join the Movement
            </Button>
            <Button variant="soft-teal" size="lg" to="/events">
              Explore the Event
            </Button>
            <Button variant="denim" size="lg" to="/sponsors">
              Become a Sponsor
            </Button>
          </div>
        </div>
      </section>

      {/* Join The Movement Section */}
      <section id="join-movement" className="py-16 md:py-24 bg-cream-beige">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-playfair text-deep-teal mb-8">
              Be Part of the Art Revolution
            </h2>
            
            <p className="text-lg font-poppins text-deep-teal mb-6">
              <em>Bridging Generations</em> isn't just an art show – it's a movement. A platform for emerging and established BIPOC women artists to tell stories, pass down wisdom, and reshape the future of art accessibility.
            </p>
            
            <p className="text-lg font-poppins text-deep-teal mb-8">
              When you join, you support:
            </p>
            
            <ul className="space-y-3 mb-10">
              <li className="flex items-start font-poppins">
                <span className="text-forest-green mr-3">•</span>
                <span className="text-lg">Youth voices in art</span>
              </li>
              <li className="flex items-start font-poppins">
                <span className="text-forest-green mr-3">•</span>
                <span className="text-lg">Cultural heritage preservation</span>
              </li>
              <li className="flex items-start font-poppins">
                <span className="text-forest-green mr-3">•</span>
                <span className="text-lg">Intergenerational collaboration</span>
              </li>
              <li className="flex items-start font-poppins">
                <span className="text-forest-green mr-3">•</span>
                <span className="text-lg">Community engagement and empowerment</span>
              </li>
            </ul>
            
            <div className="text-center">
              <Button variant="forest" size="lg" to="/events">
                Join Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
