
import { Palette, Users, Globe, BookOpen } from "lucide-react";

const OurStory = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair text-deep-teal text-center mb-8">
            Our Story
          </h2>

          <div className="prose prose-lg max-w-none text-deep-teal font-poppins space-y-4">
            <p>
              "Bridging Generations – A Cultural Tapestry in Art" is an innovative, community-driven art initiative designed as a collective movement of talented and purposeful BIPOC visual artists.
            </p>
            
            <p>
              What began as a personal vision from 17-year-old visual artist and creative director <strong>Ava Jasmine Dedier</strong> is now creating unforgettable community experiences.
            </p>
            
            <p>
              Ava noticed a gap — in galleries, in stories told, and in how young and culturally diverse voices are valued in the art world. That gap also reflected her own lived experience. So, she created a solution:
            </p>
            
            <p>
              <strong>Bridging Generations</strong> is her answer to a world in need of connection. It's a celebration of legacy, creativity, and cultural identity.
            </p>

            <p>
              To strengthen the impact of the event Ava has thoughtfully selected powerhouse artists to will aid in collaboratively building this pioneering event, with a mission to establish an ongoing platform that amplifies artistic talent, fosters deeper cultural understanding, and actively unites multiple generations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-cream-beige p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 text-warm-terracotta mb-4">
                <Palette size={24} />
                <h3 className="font-playfair font-bold text-deep-teal text-xl">Our Mission</h3>
              </div>
              <p className="text-deep-teal">
                To create accessible art spaces that celebrate cultural diversity and foster intergenerational connections through BIPOC artistry.
              </p>
            </div>

            <div className="bg-cream-beige p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 text-warm-terracotta mb-4">
                <Users size={24} />
                <h3 className="font-playfair font-bold text-deep-teal text-xl">Our Community</h3>
              </div>
              <p className="text-deep-teal">
                We bring together artists of all ages and backgrounds to share stories, skills, and cultural heritage that might otherwise be lost between generations.
              </p>
            </div>

            <div className="bg-cream-beige p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 text-warm-terracotta mb-4">
                <Globe size={24} />
                <h3 className="font-playfair font-bold text-deep-teal text-xl">Our Vision</h3>
              </div>
              <p className="text-deep-teal">
                A world where art bridges divides, preserves cultural wisdom, and creates spaces for young BIPOC artists to thrive and lead.
              </p>
            </div>

            <div className="bg-cream-beige p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 text-warm-terracotta mb-4">
                <BookOpen size={24} />
                <h3 className="font-playfair font-bold text-deep-teal text-xl">Our Values</h3>
              </div>
              <p className="text-deep-teal">
                Cultural respect, intergenerational knowledge sharing, artistic innovation, and community empowerment guide everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
