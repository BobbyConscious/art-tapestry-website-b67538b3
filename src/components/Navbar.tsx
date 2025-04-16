
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-deep-teal py-2 shadow-md"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-cream-beige font-playfair text-xl md:text-2xl font-bold">
            Bridging Generations
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-cream-beige"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/events">Events</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/sponsors">Sponsors</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
            <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink to="/events" onClick={() => setIsMenuOpen(false)}>
              Events
            </MobileNavLink>
            <MobileNavLink to="/gallery" onClick={() => setIsMenuOpen(false)}>
              Gallery
            </MobileNavLink>
            <MobileNavLink to="/sponsors" onClick={() => setIsMenuOpen(false)}>
              Sponsors
            </MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </MobileNavLink>
          </nav>
        )}
      </div>
    </header>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-cream-beige hover:text-burnt-mustard transition-colors font-poppins"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ 
  to, 
  children, 
  onClick 
}: { 
  to: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <Link
    to={to}
    className="text-cream-beige hover:text-burnt-mustard transition-colors block font-poppins"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
