
import React from "react";
import { eventTours } from "@/data/eventData";
import EventsHeader from "@/components/events/EventsHeader";
import EventsStory from "@/components/events/EventsStory";
import EventTour from "@/components/events/EventTour";
import WorkshopsSection from "@/components/events/WorkshopsSection";
import ArtContestCTA from "@/components/events/ArtContestCTA";
import CommunityImpact from "@/components/events/CommunityImpact";
import FeaturedArtistsSection from "@/components/events/FeaturedArtistsSection";

const Events = () => {
  return (
    <div className="pt-16">
      {/* Page Header */}
      <EventsHeader />
      
      {/* Our Story Section */}
      <EventsStory />
      
      {/* Event Tours Section */}
      {eventTours.map((tour) => (
        <EventTour key={tour.id} tour={tour} />
      ))}
      
      {/* Workshop Themes Section */}
      <WorkshopsSection />

      {/* Art Contest Section */}
      <ArtContestCTA />
      
      {/* Community Impact Section */}
      <CommunityImpact />
      
      {/* Featured Artists Section */}
      <FeaturedArtistsSection />
    </div>
  );
};

export default Events;
