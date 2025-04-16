
import { Link } from "react-router-dom";

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
              <li><Link to="/about" className="hover:text-burnt-mustard transition-colors">About</Link></li>
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
              <SocialIcon icon="facebook" />
              <SocialIcon icon="instagram" />
              <SocialIcon icon="twitter" />
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

const SocialIcon = ({ icon }: { icon: string }) => {
  return (
    <a 
      href="#" 
      className="h-10 w-10 rounded-full bg-soft-teal flex items-center justify-center hover:bg-burnt-mustard transition-colors"
    >
      {icon === "facebook" && (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      )}
      {icon === "instagram" && (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )}
      {icon === "twitter" && (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
        </svg>
      )}
    </a>
  );
};

export default Footer;
