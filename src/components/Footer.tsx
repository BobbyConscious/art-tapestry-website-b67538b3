
import { Link } from "react-router-dom";
import { Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-deep-teal text-cream-beige py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4">Bridging Generations</h3>
            <p className="font-poppins text-sm">
              A Cultural Tapestry of Art celebrating intergenerational stories through BIPOC artistry.
            </p>
          </div>
          
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="font-poppins space-y-2">
              <li><Link to="/" className="hover:text-burnt-mustard transition-colors">Home</Link></li>
              <li><Link to="/events" className="hover:text-burnt-mustard transition-colors">Events</Link></li>
              <li><Link to="/gallery" className="hover:text-burnt-mustard transition-colors">Gallery</Link></li>
              <li><Link to="/sponsors" className="hover:text-burnt-mustard transition-colors">Sponsors</Link></li>
              <li><Link to="/contact" className="hover:text-burnt-mustard transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Connect With Us</h4>
            <a 
              href="https://www.bridginggenerations.art" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block mb-2 font-poppins hover:text-burnt-mustard transition-colors"
            >
              www.bridginggenerations.art
            </a>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://www.facebook.com" 
                className="h-10 w-10 rounded-full bg-soft-teal flex items-center justify-center hover:bg-burnt-mustard transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/risecollectivecanada" 
                className="h-10 w-10 rounded-full bg-soft-teal flex items-center justify-center hover:bg-burnt-mustard transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram - RISE Collective Canada"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.twitter.com/riseBIPOC" 
                className="h-10 w-10 rounded-full bg-soft-teal flex items-center justify-center hover:bg-burnt-mustard transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter - RISE BIPOC"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="font-poppins text-sm">
            &copy; {new Date().getFullYear()} Bridging Generations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
