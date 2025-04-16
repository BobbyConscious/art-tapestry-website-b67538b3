
import { Gift, Heart } from "lucide-react";
import Button from "@/components/Button";

const Sponsors = () => {
  return (
    <div className="pt-16">
      {/* Page Header */}
      <header className="bg-deep-teal py-24 px-4 md:px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair text-cream-beige mb-4">
            With Gratitude: Our Changemakers
          </h1>
        </div>
      </header>
      
      {/* Introduction */}
      <section className="py-16 bg-cream-beige">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg font-poppins text-deep-teal mb-6 text-center">
              This event is made possible by sponsors, organizations, and community members who believe in <strong>equity, creative freedom, and the transformative power of art</strong>.
            </p>
          </div>
        </div>
      </section>
      
      {/* Sponsor Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold font-playfair text-deep-teal text-center mb-10 flex items-center justify-center gap-3">
            <Gift size={28} className="text-warm-terracotta" />
            <span>Our Sponsors</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {/* In a real implementation, these would be actual sponsor logos */}
            {Array(8).fill(null).map((_, i) => (
              <div 
                key={i} 
                className="aspect-square bg-cream-beige rounded-lg flex items-center justify-center p-4"
              >
                <div className="text-deep-teal text-center">
                  <div className="font-bold text-lg font-playfair">Sponsor</div>
                  <div className="text-sm font-poppins">Logo {i + 1}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Donate Section */}
      <section className="py-16 bg-warm-terracotta text-cream-beige">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Heart size={48} />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              Want to support the next generation of artists?
            </h2>
            
            <p className="text-lg font-poppins mb-8">
              Your donation helps fund workshops, artist materials, gallery setup, and community outreach.
            </p>
            
            <Button 
              variant="default" 
              size="lg" 
              href="https://www.risecollectivecanada.com" 
              className="bg-cream-beige text-warm-terracotta hover:bg-opacity-90"
            >
              Donate Now ➜ risecollectivecanada.com
            </Button>
          </div>
        </div>
      </section>
      
      {/* Become a Sponsor */}
      <section className="py-16 bg-cream-beige">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-playfair text-deep-teal text-center mb-8">
              Become a Sponsor
            </h2>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-playfair font-bold text-deep-teal mb-3">
                    Sponsorship Benefits
                  </h3>
                  <ul className="space-y-2 font-poppins">
                    <li className="flex items-start">
                      <span className="text-warm-terracotta mr-2">•</span>
                      <span>Logo placement on all event materials</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-warm-terracotta mr-2">•</span>
                      <span>Recognition in press releases and media</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-warm-terracotta mr-2">•</span>
                      <span>VIP access to exhibition openings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-warm-terracotta mr-2">•</span>
                      <span>Opportunity to connect with featured artists</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-playfair font-bold text-deep-teal mb-3">
                    Sponsorship Levels
                  </h3>
                  <ul className="space-y-2 font-poppins">
                    <li className="flex items-start">
                      <span className="text-warm-terracotta mr-2">•</span>
                      <span><strong>Platinum:</strong> $5,000+</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-warm-terracotta mr-2">•</span>
                      <span><strong>Gold:</strong> $2,500+</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-warm-terracotta mr-2">•</span>
                      <span><strong>Silver:</strong> $1,000+</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-warm-terracotta mr-2">•</span>
                      <span><strong>Bronze:</strong> $500+</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button variant="denim" size="lg">
                  Contact Us About Sponsorship
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
