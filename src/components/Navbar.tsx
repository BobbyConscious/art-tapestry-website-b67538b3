
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-deep-teal shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo and Home */}
        <div className="flex gap-2 md:gap-6 items-center">
          <Link to="/" className="font-playfair text-2xl text-cream-beige font-bold hover:text-warm-terracotta transition-colors">
            Bridging Generations
          </Link>
        </div>
        {/* Nav links */}
        <div className="flex gap-3 md:gap-6 items-center justify-end">
          {/* Home Button - visually consistent with other nav links */}
          <Link
            to="/"
            className="font-poppins text-cream-beige hover:text-warm-terracotta font-semibold text-base px-3 py-1 rounded transition-colors"
          >
            Home
          </Link>
          <Link to="/events" className="font-poppins text-cream-beige hover:text-warm-terracotta font-semibold text-base px-3 py-1 rounded transition-colors">
            Events
          </Link>
          <Link to="/art-contest" className="font-poppins text-cream-beige hover:text-warm-terracotta font-semibold text-base px-3 py-1 rounded transition-colors">
            Art Contest
          </Link>
          <Link to="/sponsors" className="font-poppins text-cream-beige hover:text-warm-terracotta font-semibold text-base px-3 py-1 rounded transition-colors">
            Sponsors
          </Link>
          <Link to="/gallery" className="font-poppins text-cream-beige hover:text-warm-terracotta font-semibold text-base px-3 py-1 rounded transition-colors">
            Gallery
          </Link>
          <Link to="/contact" className="font-poppins text-cream-beige hover:text-warm-terracotta font-semibold text-base px-3 py-1 rounded transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
