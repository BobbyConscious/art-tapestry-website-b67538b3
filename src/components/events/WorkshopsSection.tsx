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
              src="/lovable-uploads/6afc7934-3214-43b0-8e3e-59877b0a4146.png" 
              alt="Children displaying their artwork" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/28c52e7b-03f5-4dba-a520-eeaf37ae877d.png" 
              alt="Art workshop with children" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/04de05b4-b7a8-4488-814c-165416289410.png" 
              alt="Students painting" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/bd4cebdd-614a-4273-990a-fac6133f077d.png" 
              alt="Carnival mask making workshop" 
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
