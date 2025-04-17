
import { Book, Mic, Palette, ShoppingBag } from "lucide-react";

export type EventTour = {
  id: number;
  title: string;
  dates: {
    range: string;
    venue: string;
    location?: string;
  }[];
};

export type Workshop = {
  id: number;
  title: string;
  icon: typeof Book | typeof Mic | typeof Palette | typeof ShoppingBag;
  presenter: string;
  description: string[];
  takeaways: string[];
};

export const eventTours: EventTour[] = [
  {
    id: 1,
    title: "The Tour: Art in Motion",
    dates: [
      {
        range: "August 7th to August 10th, 2025",
        venue: "Milliken Mills Library",
        location: "Markham, ON"
      },
      {
        range: "August 14th to August 17th, 2025",
        venue: "Angus Glen Library",
        location: "Markham, ON"
      },
      {
        range: "August 21st to August 24th, 2025",
        venue: "Markham Village Library",
        location: "Markham, ON"
      },
      {
        range: "August 28th to August 31st, 2025",
        venue: "Thornhill Village Library",
        location: "Thornhill, ON"
      }
    ]
  }
];

export const workshops: Workshop[] = [
  {
    id: 1,
    title: "Roots & Reflections: Visual Storytelling Through Culture",
    icon: Palette,
    presenter: "",
    description: [
      "Step into the art of storytelling with visionary artists and creative leaders. In this mixed media workshop, participants will create self-portraits or narrative scenes rooted in their heritage, dreams, or identity that is guided by Ava's own Afro-Caribbean influences.",
      "Learn how to sketch with purpose, translate personal stories into imagery, and combine materials to bring your vision to life. It's a journey into who you are, where you come from, and where you're going."
    ],
    takeaways: [
      "How to visually express identity and culture",
      "Rapid sketching and mixed media techniques",
      "Artistic storytelling from concept to creation"
    ]
  },
  {
    id: 2,
    title: "Foundations of Art: I Love Who I Am",
    icon: Book,
    presenter: "",
    description: [
      "Build confidence and artistic skill while celebrating your individuality. In this empowering workshop, the facilitator introduces the foundational elements of art. Using shape, value, and color through the lens of self-love and cultural pride.",
      "Participants will be guided from blank canvas to final artwork, using drawing and painting to explore the theme: \"I love who I am, and I'm proud to show it.\" Perfect for beginners and young creators alike."
    ],
    takeaways: [
      "Understanding the elements of art",
      "Step-by-step creative process guidance",
      "Positive affirmations through visual storytelling"
    ]
  },
  {
    id: 3,
    title: "Ink & Identity: Culture Through Poetic Expression",
    icon: Mic,
    presenter: "",
    description: [
      "Merge words and visuals in a deeply personal creative experience. The facilitator invites youth to reflect on what they love about their culture and channel those feelings into poetry and abstract art.",
      "Participants will write short, affirming poems and transform them into expressive artworks ranging from portraits, symbols, or abstract visuals. This session nurtures emotional literacy, self-worth, and creative freedom, reminding each participant: your story matters, and your art is enough."
    ],
    takeaways: [
      "Explore emotions and identity through poetry",
      "Learn abstract art techniques rooted in self-expression",
      "Celebrate authenticity and cultural pride"
    ]
  },
  {
    id: 4,
    title: "Wearable Culture: Fashion & Carnival Arts",
    icon: ShoppingBag,
    presenter: "",
    description: [
      "Experience the fusion of fashion and heritage with the vibrant artistry of Candice Dixon. This workshop dives into the world of Caribbean Carnival and its rich legacy as a cultural celebration.",
      "Participants will design and create their own wearable art: masks, costume elements, or bold accessories that draw from their cultural background and personal creativity. A joyful hands-on exploration of style, identity, and empowerment."
    ],
    takeaways: [
      "Learn the cultural roots of Carnival",
      "Explore fashion as a form of storytelling",
      "Create expressive, heritage-inspired wearable pieces"
    ]
  }
];
