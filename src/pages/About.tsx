
import { BookOpen, Users, Palette } from "lucide-react";

const About = () => {
  return (
    <div className="pt-16">
      {/* Page Header */}
      <header className="bg-deep-teal py-24 px-4 md:px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair text-cream-beige mb-4">
            About Our Movement
          </h1>
        </div>
      </header>
      
      {/* Introduction */}
      <section className="py-16 bg-cream-beige">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg font-poppins text-deep-teal mb-6 text-center">
              Bridging Generations celebrates <strong>equity, creative freedom, and the transformative power of art</strong> as a vehicle for cultural understanding and intergenerational connection.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold font-playfair text-deep-teal text-center mb-10 flex items-center justify-center gap-3">
            <BookOpen size={28} className="text-warm-terracotta" />
            <span>Our Mission</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-cream-beige rounded-lg p-8 shadow-md">
              <div className="text-warm-terracotta mb-4 flex justify-center">
                <Palette size={48} />
              </div>
              <h3 className="text-xl font-bold font-playfair text-deep-teal mb-4 text-center">Artistic Freedom</h3>
              <p className="text-deep-teal font-poppins">
                We believe in creating spaces where artists of all ages and backgrounds can express their authentic cultural voices without barriers.
              </p>
            </div>
            
            <div className="bg-cream-beige rounded-lg p-8 shadow-md">
              <div className="text-forest-green mb-4 flex justify-center">
                <Users size={48} />
              </div>
              <h3 className="text-xl font-bold font-playfair text-deep-teal mb-4 text-center">Intergenerational Exchange</h3>
              <p className="text-deep-teal font-poppins">
                We facilitate meaningful connections between artists across generations, fostering mentorship and shared learning experiences.
              </p>
            </div>
            
            <div className="bg-cream-beige rounded-lg p-8 shadow-md">
              <div className="text-denim-blue mb-4 flex justify-center">
                <BookOpen size={48} />
              </div>
              <h3 className="text-xl font-bold font-playfair text-deep-teal mb-4 text-center">Cultural Preservation</h3>
              <p className="text-deep-teal font-poppins">
                We are committed to preserving and celebrating diverse cultural heritage through art, storytelling, and community engagement.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-cream-beige">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold font-playfair text-deep-teal text-center mb-8">
              Our Story
            </h2>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="font-poppins text-deep-teal mb-6">
                <em>Bridging Generations</em> began as a personal vision from 17-year-old visual artist and creative director <strong>Ava Jasmine Dedier</strong>. She noticed a gap — in galleries, in stories told, and in how young and culturally diverse voices are valued in the art world.
              </p>
              
              <p className="font-poppins text-deep-teal mb-6">
                That gap also reflected her own lived experience. So, she created a solution: a platform that celebrates legacy, creativity, and cultural identity through intergenerational artistic collaboration.
              </p>
              
              <p className="font-poppins text-deep-teal">
                Today, <em>Bridging Generations</em> brings together BIPOC artists of all ages to share stories, techniques, and visions for a more inclusive artistic future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
