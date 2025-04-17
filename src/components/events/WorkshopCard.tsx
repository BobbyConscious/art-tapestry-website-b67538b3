
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import { Book, Mic, Palette, ShoppingBag } from "lucide-react";

interface Workshop {
  id: number;
  title: string;
  icon: typeof Book | typeof Mic | typeof Palette | typeof ShoppingBag;
  presenter: string;
  description: string[];
  takeaways: string[];
}

interface WorkshopCardProps {
  workshop: Workshop;
}

const WorkshopCard = ({ workshop }: WorkshopCardProps) => {
  const IconComponent = workshop.icon;
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-cream-beige text-deep-teal p-6 rounded shadow-md flex items-center hover:bg-opacity-90 cursor-pointer transition-colors">
          <div className="mr-4 text-warm-terracotta">
            <IconComponent size={36} />
          </div>
          <h3 className="font-bold font-playfair text-xl">{workshop.title}</h3>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-cream-beige">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair text-deep-teal">{workshop.title}</DialogTitle>
          {workshop.presenter && (
            <DialogDescription className="text-warm-terracotta font-medium">
              {workshop.presenter}
            </DialogDescription>
          )}
        </DialogHeader>
        
        <div className="mt-4 text-deep-teal space-y-4">
          {workshop.description.map((paragraph, index) => (
            <p key={index} className="font-poppins">{paragraph}</p>
          ))}
          
          <div className="mt-6">
            <h4 className="font-bold font-playfair text-lg text-deep-teal mb-2">Takeaways:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {workshop.takeaways.map((takeaway, index) => (
                <li key={index} className="font-poppins">{takeaway}</li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WorkshopCard;
