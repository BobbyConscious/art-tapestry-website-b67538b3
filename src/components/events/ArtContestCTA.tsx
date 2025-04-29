
import React from "react";
import { Button } from "@/components/ui/button";

const ArtContestCTA = () => {
  return (
    <section className="py-16 bg-white" id="art-contest-call">
      <div className="container mx-auto px-4 md:px-6 flex justify-center">
        <div className="bg-cream-beige border-4 border-soft-teal shadow-xl rounded-3xl max-w-2xl mx-auto w-full p-8 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-deep-teal font-playfair mb-4 text-center">
            🎨 Calling All Artists of York Region!
          </h2>
          <p className="font-poppins text-lg text-deep-teal text-center mb-2">Showcase your creativity and celebrate the power of community through art.</p>
          <p className="text-center text-md font-poppins mb-4">
            Enter the <span className="font-bold text-soft-teal">Bridging Generations Art Contest: Unity in the Community</span> — a free-to-enter, juried competition open to residents of York Region.
          </p>
          <ul className="text-left font-poppins text-deep-teal text-base space-y-1 mb-5">
            <li className="flex items-center"><span className="mr-2 text-forest-green">✅</span>Open to ages 11 and up</li>
            <li className="flex items-center"><span className="mr-2 text-forest-green">✅</span>Win cash prizes, special awards, and mentorship from professional artists</li>
            <li className="flex items-center"><span className="mr-2 text-forest-green">✅</span>Get featured on our website, community exhibition sites and in our media promotions</li>
            <li className="flex items-center"><span className="mr-2 text-forest-green">✅</span>All 2D and mixed media artworks in all mediums welcome (max size 24&quot; x 30&quot;)</li>
          </ul>
          <p className="font-poppins text-md text-deep-teal text-center mb-6">
            This is your chance to be part of a cultural movement that unites generations and uplifts diverse voices through the arts.<br />
            <span className="block mt-2">Submissions open soon — get ready to create, connect, and inspire!</span>
          </p>
          <Button asChild variant="soft-teal" size="lg">
            <a href="/art-contest">Learn More</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ArtContestCTA;
