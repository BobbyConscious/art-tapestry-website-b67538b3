
import { Award, Handshake, Medal } from "lucide-react";
import { Button } from "@/components/ui/button";

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
      
      {/* Our Partners - Updated with new logos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold font-playfair text-deep-teal text-center mb-10 flex items-center justify-center gap-3">
            <Handshake size={28} className="text-warm-terracotta" />
            <span>Our Partners</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-10 md:gap-14 max-w-5xl mx-auto">
            <PartnerLogo src="/lovable-uploads/39f4a1f8-cc82-4a74-9b3c-cb4cab496e26.png" alt="RISE Collective" />
            <PartnerLogo src="/lovable-uploads/85c4e022-ead7-41dd-891b-5bad7f327699.png" alt="Winged Canvas" />
            <PartnerLogo src="/lovable-uploads/8a19aff1-0965-434c-98ea-6824ce3db3bb.png" alt="SugaCayne" />
            <PartnerLogo src="/lovable-uploads/8ea0d03c-490b-4904-bd2a-eeaeaf7c8e81.png" alt="City of Markham" />
            <PartnerLogo src="/lovable-uploads/c4818ef1-ce72-4ef4-9f5e-53964e26c592.png" alt="Markham Public Library" />
            <PartnerLogo src="/lovable-uploads/cadfd0ca-9b86-46c8-b02f-1f8ffba1cd3d.png" alt="Community Arts Partner" />
            <PartnerLogo src="/lovable-uploads/5cca4cc0-361d-427d-a372-64e73202aa03.png" alt="Mimo Design" />
          </div>
        </div>
      </section>

      {/* Our Sponsors - New Section */}
      <section className="py-16 bg-cream-beige">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold font-playfair text-deep-teal text-center mb-10 flex items-center justify-center gap-3">
            <Medal size={28} className="text-warm-terracotta" />
            <span>Our Sponsors</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-10 md:gap-14 max-w-5xl mx-auto">
            <SponsorLogo 
              src="/lovable-uploads/b3046380-f04a-492f-b08d-43fdae772f8d.png" 
              alt="RISE Collective" 
              className="max-h-36 md:max-h-40" 
            />
            <SponsorLogo 
              src="/lovable-uploads/2044f973-def5-4947-b487-1a0dc7af3d68.png" 
              alt="M Jewelry" 
              className="max-h-24 md:max-h-28" 
            />
            <SponsorLogo 
              src="/lovable-uploads/cadfd0ca-9b86-46c8-b02f-1f8ffba1cd3d.png" 
              alt="Community Arts Sponsor" 
              className="max-h-32 md:max-h-36" 
            />
            <SponsorLogo 
              src="/lovable-uploads/d46d1d3e-71de-4dbd-98da-0409700fb823.png" 
              alt="M Logo" 
              className="max-h-32 md:max-h-36" 
            />
          </div>
        </div>
      </section>
      
      {/* Partner With Purpose */}
      <section className="py-16 bg-white">
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
              <Button variant="soft-teal" size="lg" asChild>
                <a href="/contact">📩 Request the sponsorship deck now</a>
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

const SponsorLogo = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => {
  return (
    <div className="flex items-center justify-center p-4">
      <img src={src} alt={alt} className={`max-w-[300px] object-contain ${className}`} />
    </div>
  );
};

export default Sponsors;
