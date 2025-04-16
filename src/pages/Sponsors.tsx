
import { Award, Handshake, Landmark } from "lucide-react";
import Button from "@/components/Button";

const Sponsors = () => {
  return (
    <div className="pt-16">
      {/* Page Header */}
      <header className="bg-deep-teal py-24 px-4 md:px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair text-cream-beige mb-4">
            Sponsors & Partners
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
      
      {/* Our Partners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold font-playfair text-deep-teal text-center mb-10 flex items-center justify-center gap-3">
            <Handshake size={28} className="text-warm-terracotta" />
            <span>Our Partners</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-10 md:gap-14 max-w-5xl mx-auto">
            <PartnerLogo src="/lovable-uploads/971fe0c4-b658-46c2-8aeb-4ebd9dd6cd17.png" alt="CTV" />
            <PartnerLogo src="/lovable-uploads/0cf15100-5069-4a45-8f5c-485b4b3c5c23.png" alt="Bell Media" />
            <PartnerLogo src="/lovable-uploads/00585485-580b-4479-8219-12af520cb790.png" alt="NOW" />
            <PartnerLogo src="/lovable-uploads/167bfc67-75a4-48f7-8aa6-67646f45e330.png" alt="Toronto Caribbean" />
            <PartnerLogo src="/lovable-uploads/84125fb4-422b-4813-b3c3-8cac4ecf7060.png" alt="CBC" />
            <PartnerLogo src="/lovable-uploads/cf8b30e9-94eb-4066-88e9-66c23f45e530.png" alt="York Region" />
            <PartnerLogo src="/lovable-uploads/71a08741-61a5-42cf-be5d-33f794b9b9a6.png" alt="Markham Economist & Sun" />
            <PartnerLogo src="/lovable-uploads/c0fef7a8-1288-49d6-aed8-58e88b67f956.png" alt="Newmarket Today" />
          </div>
        </div>
      </section>
      
      {/* Our Sponsors */}
      <section className="py-16 bg-cream-beige">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold font-playfair text-deep-teal text-center mb-10 flex items-center justify-center gap-3">
            <Award size={28} className="text-warm-terracotta" />
            <span>Our Sponsors</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
            {/* Placeholder for sponsor logos - these would be replaced with actual sponsor logos */}
            {Array(8).fill(null).map((_, i) => (
              <div 
                key={i} 
                className="aspect-square bg-white rounded-lg flex items-center justify-center p-6 shadow-md"
              >
                <div className="text-deep-teal text-center">
                  <div className="font-bold text-lg font-playfair">Sponsor</div>
                  <div className="text-sm font-poppins">Logo {i + 1}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold font-playfair text-deep-teal text-center mb-6">
              Become a Sponsor
            </h3>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="flex items-center gap-3 text-warm-terracotta mb-4">
                    <Award size={24} />
                    <h4 className="text-xl font-playfair font-bold text-deep-teal">Sponsorship Benefits</h4>
                  </div>
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
                  <div className="flex items-center gap-3 text-warm-terracotta mb-4">
                    <Landmark size={24} />
                    <h4 className="text-xl font-playfair font-bold text-deep-teal">Sponsorship Levels</h4>
                  </div>
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
              
              <div className="text-center">
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

const PartnerLogo = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="flex items-center justify-center p-4">
      <img src={src} alt={alt} className="max-h-16 max-w-[160px] object-contain" />
    </div>
  );
};

export default Sponsors;
