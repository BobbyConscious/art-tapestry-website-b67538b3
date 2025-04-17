
import { CalendarIcon, MapPin } from "lucide-react";

interface EventCardProps {
  date: string;
  venue: string;
  location?: string;
}

const EventCard = ({ date, venue, location }: EventCardProps) => {
  return (
    <div className="bg-cream-beige border-l-4 border-warm-terracotta p-6 rounded-r shadow-md">
      <div className="flex items-start">
        <div className="mr-4 text-warm-terracotta">
          <CalendarIcon size={24} />
        </div>
        <div>
          <p className="font-bold font-playfair text-deep-teal text-xl mb-2">{date}</p>
        </div>
      </div>
      
      <div className="flex items-start mt-4">
        <div className="mr-4 text-warm-terracotta">
          <MapPin size={24} />
        </div>
        <div>
          <p className="font-medium font-poppins text-deep-teal">
            <strong>Venue:</strong> {venue}
          </p>
          {location && (
            <p className="font-medium font-poppins text-deep-teal mt-1">
              <strong>Location:</strong> {location}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
