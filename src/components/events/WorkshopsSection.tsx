
import { AspectRatio } from "@/components/ui/aspect-ratio";
import WorkshopCard from "./WorkshopCard";
import Button from "@/components/Button";
import { workshops } from "@/data/eventData";

const WorkshopsSection = () => {
  return (
    <section className="py-16 bg-soft-teal text-cream-beige">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-playfair text-cream-beige text-center mb-12">
          Workshop Themes
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="aspect-square rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/9a5fd8df-7472-4d9c-b4f5-336d74a00668.png" 
              alt="Group workshop activity" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/a42a3447-9bd9-4ceb-8a0b-4125c9324588.png" 
              alt="Creative art project" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/c7390662-fc90-451c-8be1-57ea6297d184.png" 
              alt="Young artist" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/4f434f45-47d7-4bde-ad0f-2cff14472537.png" 
              alt="Artist displaying work" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
          {workshops.map((workshop) => (
            <WorkshopCard 
              key={workshop.id}
              workshop={workshop}
            />
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg font-poppins mb-8">
            These dynamic, hands-on workshops will be led by our featured artists and special guests. Each workshop creates space for creative exploration, cultural pride, and personal growth for all ages.
          </p>
          
          <Button 
            variant="default" 
            size="lg" 
            href="https://www.markhampubliclibrary.ca/" 
            className="bg-cream-beige text-deep-teal hover:bg-opacity-90"
          >
            Register Here – Markham Public Library ➜
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsSection;
