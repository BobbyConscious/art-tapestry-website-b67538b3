import { Button } from "@/components/ui/button";

const ArtContest = () => (
  <main className="min-h-screen bg-cream-beige py-16 px-4 md:px-0">
    <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 border-4 border-soft-teal">
      <h1 className="font-playfair text-4xl md:text-5xl text-deep-teal font-bold mb-4 text-center leading-tight">
        Art Contest: Unity in the Community
      </h1>
      <h2 className="text-soft-teal text-center mb-6 font-bold text-xl md:text-2xl">A Bridging Generations Special Competition</h2>
      <p className="text-lg md:text-xl font-poppins text-deep-teal mb-4 text-center">
        As part of <span className="font-semibold">Bridging Generations – A Cultural Tapestry in Art</span>, we are proud to announce our inaugural Art Contest celebrating the theme <span className="font-semibold">Unity in the Community.</span>
        <br /><br />
        This is a <span className="bg-soft-teal text-cream-beige px-1 py-0.5 rounded">free opportunity</span> for emerging and established artists across York Region to showcase how art can spark connection, pride, and collective growth.
      </p>
      <p className="text-lg font-poppins text-forest-green mb-6 text-center">
        We believe that art has the power to bridge cultures, generations, and experiences. Through <b>Unity in the Community</b>, we invite artists to share their unique visions of togetherness, cultural pride, and empowered communities.
      </p>
      
      <div className="mb-6">
        <h3 className="font-bold text-lg text-eggplant-plum mb-2">Contest Categories:</h3>
        <ul className="list-disc ml-6 text-md text-deep-teal font-poppins mb-4 space-y-1">
          <li><span className="font-semibold">Youth Division:</span> Ages 11 to 14</li>
          <li><span className="font-semibold">Teen Division:</span> Ages 15 to 18</li>
          <li><span className="font-semibold">Adult Division:</span> Age 19+</li>
        </ul>
        <h3 className="font-bold text-lg text-eggplant-plum mb-2">Contest Highlights:</h3>
        <ul className="list-disc ml-6 text-md text-deep-teal font-poppins space-y-1 mb-3">
          <li><span className="font-semibold">Free to Enter:</span> No submission fees</li>
          <li><span className="font-semibold">Professional Mentorship:</span> Winners will receive a one-on-one mentoring opportunity with a professional, featured artist from the Bridging Generations event</li>
          <li><span className="font-semibold">Recognition:</span> Certificates of recognition for all finalists</li>
          <li><span className="font-semibold">Prizes:</span> Cash awards and special prizes for top submissions in each category</li>
          <li><span className="font-semibold">Media Spotlight:</span> An opportunity to be featured in community media and event promotions.</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="font-bold text-lg text-eggplant-plum mb-2">Contest Details:</h3>
        <ul className="list-disc ml-6 text-md text-deep-teal font-poppins mb-4 space-y-1">
          <li><b>Eligibility:</b> Open to residents of York Region only. Proof of address will be required to claim prizes.</li>
          <li><b>Original Work Only:</b> Submissions must be original. No AI-generated works, reproductions, or copies of existing artworks will be accepted.</li>
          <li><b>Mediums Accepted:</b> 2D and 3D works, including but not limited to oil, acrylic, pencil, mixed media, sculpture, and other traditional mediums.</li>
          <li><b>Size Limit:</b> Maximum artwork dimensions are 24&quot; x 30&quot;.</li>
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="font-bold text-lg text-eggplant-plum mb-2">Judging:</h3>
        <p className="text-md text-deep-teal font-poppins mb-2">
          This is a juried event run in collaboration with Winged Canvas Art School. Entries will be evaluated by a panel of professional artists and art educators based on creativity, connection to the theme, technical skill, and emotional impact.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="font-bold text-lg text-eggplant-plum mb-2">How to Enter:</h3>
        <p className="text-md text-deep-teal font-poppins mb-2">
          Full submission guidelines, deadlines, and entry forms will be released soon.<br />
          Get ready to take part in a powerful artistic movement that celebrates who we are, where we come from, and where we are going — together.
        </p>
      </div>
      <div className="text-center">
        <Button variant="default" size="lg" disabled>
          Submissions Opening Soon!
        </Button>
      </div>
    </div>
  </main>
);

export default ArtContest;
