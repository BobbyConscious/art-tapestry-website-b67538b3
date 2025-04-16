
import { Award, Handshake } from "lucide-react";
import Button from "@/components/Button";

const Sponsors = () => {
  return (
    <div className="pt-16">
      {/* Page Header */}
      <header className="bg-deep-teal py-24 px-4 md:px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair text-cream-beige mb-4">
            Become A Sponsor Now
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
          </div>
        </div>
      </section>
      
      {/* Partner With Purpose */}
      <section className="py-16 bg-cream-beige">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold font-playfair text-deep-teal text-center mb-10 flex items-center justify-center gap-3">
            <Award size={28} className="text-warm-terracotta" />
            <span>Become A Sponsor Now</span>
          </h2>
          
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="prose max-w-none text-deep-teal font-poppins mb-8">
              <p className="text-xl font-playfair font-bold mb-4">
                This is more than an invitation. It's a challenge.
              </p>
              <p>
                We're not asking for applause. We're calling on champions with vision—those who turn intentions into action and know that equity is built, not promised.
              </p>
              <p>
                The solution is here. The moment is now.
                To stay silent—or on the sidelines—is to prolong the very problem we all claim to care about.
              </p>
              
              <div className="my-8 space-y-3">
                <div className="flex items-center">
                  <span className="text-warm-terracotta mr-3 text-xl">•</span>
                  <p className="m-0">Invest in youth and women in the arts</p>
                </div>
                <div className="flex items-center">
                  <span className="text-warm-terracotta mr-3 text-xl">•</span>
                  <p className="m-0">Champion cultural equity that lives beyond hashtags</p>
                </div>
                <div className="flex items-center">
                  <span className="text-warm-terracotta mr-3 text-xl">•</span>
                  <p className="m-0">Fuel bold, intergenerational storytelling</p>
                </div>
                <div className="flex items-center">
                  <span className="text-warm-terracotta mr-3 text-xl">•</span>
                  <p className="m-0">Transform public spaces into platforms for belonging and brilliance</p>
                </div>
              </div>
              
              <p className="text-xl font-playfair font-bold mt-8">
                Final Call to Action:
              </p>
              <p>
                This is the kind of movement history remembers—and funders regret missing.
                If you want to be more than a supporter—be a builder.
              </p>
            </div>
            
            <div className="text-center mt-8">
              <Button variant="denim" size="lg">
                📩 Request the sponsorship deck now
              </Button>
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
