import { GraduationCap, Music, Sparkles, Car, Dumbbell, Users, type LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  points: string[];
  longDescription: string[];
  benefits: string[];
  process: { step: string; detail: string }[];
  pricingNote: string;
};

export const services: Service[] = [
  {
    slug: "coaching-program",
    icon: GraduationCap,
    title: "Coaching Program",
    desc: "Tailored coaching that helps individuals and teams discover purpose, build confidence and reach their goals.",
    points: ["Life & personal coaching", "Career & leadership", "Group workshops", "Mentorship sessions"],
    longDescription: [
      "Our Coaching Program is built around one belief: every person carries untapped potential. Through structured sessions and honest conversations, our coaches help you unlock clarity, confidence and consistent progress.",
      "Whether you're a student finding direction, a professional aiming higher, or a team leader shaping culture, we tailor every program to fit your context and goals — combining proven frameworks with the warmth of a Rwandan community-first approach.",
    ],
    benefits: [
      "Personalized growth roadmap",
      "Accountability check-ins",
      "Confidence & communication skills",
      "Leadership and decision-making tools",
    ],
    process: [
      { step: "Discovery Call", detail: "We learn about your goals, challenges and aspirations." },
      { step: "Custom Plan", detail: "We design a coaching journey suited to your life or team." },
      { step: "Weekly Sessions", detail: "Live coaching, exercises and reflective work." },
      { step: "Review & Grow", detail: "Track wins, refine the path and celebrate progress." },
    ],
    pricingNote: "Packages available for individuals, groups, schools and corporates.",
  },
  {
    slug: "music-training",
    icon: Music,
    title: "Music Training",
    desc: "Discover the artist in you. Vocal lessons, instruments, theory and performance coaching for every level.",
    points: ["Vocal & instrumental", "Beginner to advanced", "Studio practice", "Live performance prep"],
    longDescription: [
      "Music is more than sound — it's expression, discipline and joy. At GY Corp, our music training nurtures both technique and creativity so you can perform with confidence.",
      "From beginners holding an instrument for the first time to advanced artists preparing for the stage, our trainers guide each learner through a personalized path that includes theory, ear training, repertoire and live performance.",
    ],
    benefits: [
      "Vocal technique and breath control",
      "Instrument mastery (piano, guitar, drums and more)",
      "Music theory and ear training",
      "Stage presence and live performance coaching",
    ],
    process: [
      { step: "Audition / Intro Class", detail: "We meet you, listen, and understand your musical taste." },
      { step: "Curriculum Design", detail: "A learning path tuned to your goals and pace." },
      { step: "Weekly Practice", detail: "Hands-on sessions with experienced trainers." },
      { step: "Showcase", detail: "Perform in studio or on stage when you're ready." },
    ],
    pricingNote: "Private and group lessons available — kids, teens and adults welcome.",
  },
  {
    slug: "sport-training",
    icon: Dumbbell,
    title: "Sport Training",
    desc: "Train smart. Play stronger. Personalized fitness and sport programs guided by experienced coaches.",
    points: ["Fitness & conditioning", "Football & athletics", "Youth programs", "Team coaching"],
    longDescription: [
      "Our Sport Training program builds athletes from the inside out — strength, technique, mindset and teamwork. We work with kids, amateurs and competitive athletes to elevate performance safely and consistently.",
      "From football fundamentals to general athletic conditioning, our coaches plan each session around your level, goals and recovery, ensuring sustainable results and lifelong love for movement.",
    ],
    benefits: [
      "Strength, agility and endurance",
      "Sport-specific technique",
      "Injury prevention & recovery routines",
      "Discipline, mindset and team spirit",
    ],
    process: [
      { step: "Fitness Assessment", detail: "We measure your baseline and discuss your goals." },
      { step: "Training Plan", detail: "Custom weekly schedule aligned with your sport." },
      { step: "Coached Sessions", detail: "Field, gym or home sessions with our coaches." },
      { step: "Progress Tracking", detail: "Regular check-ins to measure growth." },
    ],
    pricingNote: "Individual coaching, youth academies and team contracts available.",
  },
  {
    slug: "general-cleaning",
    icon: Sparkles,
    title: "General Cleaning",
    desc: "Sparkling spaces — homes, offices and venues. Reliable, eco-conscious cleaning crews on demand.",
    points: ["Homes & apartments", "Offices & shops", "Post-event cleanup", "Deep cleaning"],
    longDescription: [
      "A clean space changes how you feel, work and live. Our trained cleaning teams deliver thorough, reliable service for homes, offices, shops and event venues across Kigali.",
      "We use eco-conscious products, professional equipment and clear checklists, so you always know what's done and to what standard. Book a one-time deep clean or schedule recurring visits — we adapt to your routine.",
    ],
    benefits: [
      "Trained, vetted cleaning staff",
      "Eco-friendly products",
      "Flexible scheduling (one-time or recurring)",
      "Detailed checklists for every visit",
    ],
    process: [
      { step: "Free Walkthrough", detail: "We visit or call to understand the space and needs." },
      { step: "Custom Quote", detail: "Transparent pricing based on size and frequency." },
      { step: "Cleaning Day", detail: "Our team arrives on time with everything needed." },
      { step: "Quality Check", detail: "We confirm satisfaction before we leave." },
    ],
    pricingNote: "Residential, commercial and post-event packages available.",
  },
  {
    slug: "car-wash",
    icon: Car,
    title: "Car Wash",
    desc: "Premium car wash that treats your vehicle like new. Interior, exterior and detailing — done right.",
    points: ["Exterior wash & wax", "Interior detailing", "Engine cleaning", "Pickup & drop available"],
    longDescription: [
      "Your car deserves more than a rinse. Our car wash combines careful hand-washing, interior detailing and engine care to keep your vehicle looking and running its best.",
      "Choose from quick washes for daily refreshment to full detailing packages that restore shine and freshness. Pickup and drop-off available for busy clients in Kigali.",
    ],
    benefits: [
      "Hand-wash with safe products",
      "Interior vacuum and shampoo",
      "Engine bay cleaning",
      "Convenient pickup & drop service",
    ],
    process: [
      { step: "Booking", detail: "Pick a slot or request pickup via WhatsApp." },
      { step: "Inspection", detail: "We check the car and confirm the package." },
      { step: "Wash & Detail", detail: "Our crew handles every corner with care." },
      { step: "Final Shine", detail: "Quality check, then your car is ready to roll." },
    ],
    pricingNote: "Single washes, monthly subscriptions and fleet plans available.",
  },
  {
    slug: "custom-packages",
    icon: Users,
    title: "Custom Packages",
    desc: "Need a combination of our services? We design custom packages for schools, companies and communities.",
    points: ["Corporate plans", "School programs", "Community events", "Long-term contracts"],
    longDescription: [
      "Every organization is different. Our custom packages bundle coaching, training and cleaning services into one tailored solution that fits your culture, schedule and budget.",
      "We partner with schools, businesses, churches and community groups to deliver consistent, high-quality services under a single point of contact.",
    ],
    benefits: [
      "One contract, multiple services",
      "Dedicated account manager",
      "Flexible long-term pricing",
      "Reports and reviews on schedule",
    ],
    process: [
      { step: "Needs Assessment", detail: "We listen and map out what your team needs." },
      { step: "Proposal", detail: "A clear, itemised package with pricing." },
      { step: "Kick-off", detail: "We deploy teams and align on standards." },
      { step: "Ongoing Partnership", detail: "Regular reviews to keep improving." },
    ],
    pricingNote: "Custom quotes — get in touch and we'll design something that fits.",
  },
];

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug);
