
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const CommunityImpact = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-deep-teal text-center mb-8">
            Community Impact
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-8 items-center mb-8">
            <div className="prose prose-lg max-w-none text-deep-teal font-poppins space-y-6 lg:w-3/5">
              <p>
                Bridging Generations is reshaping what community connection looks like. Through art, storytelling, and cultural celebration, our event empowers BIPOC artists and community members by creating spaces where diversity, equity, and inclusion are not only highlighted but lived. We break down barriers between generations, cultures, and backgrounds, uniting people in a shared mission of creativity and pride.
              </p>
              
              <p>
                Our exhibitions and workshops offer more than just artistic expression; they offer visibility, validation, and voice to underrepresented communities. Every interaction fosters understanding, every creation nurtures belonging, and every gathering builds bridges that strengthen the cultural fabric of our neighborhoods. Through intentional representation and real engagement, Bridging Generations becomes a catalyst for lasting community empowerment and collective growth.
              </p>
            </div>
            
            <div className="lg:w-2/5">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <AspectRatio ratio={4/5}>
                  <img 
                    src="/lovable-uploads/8c934df0-ed54-40f1-9b8f-71de1a496fc5.png" 
                    alt="Diverse multigenerational community members smiling together" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityImpact;
