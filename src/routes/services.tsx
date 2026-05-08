import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GraduationCap, Music, Sparkles, Car, Dumbbell, Users, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — GY Corp" },
      { name: "description", content: "Coaching, sport & music training, general cleaning and car wash by GY Corp in Kigali." },
    ],
  }),
  component: ServicesPage,
});

const items = [
  {
    icon: GraduationCap,
    title: "Coaching Program",
    desc: "Tailored coaching that helps individuals and teams discover purpose, build confidence and reach their goals. From personal development to leadership coaching, we walk the journey with you.",
    points: ["Life & personal coaching", "Career & leadership", "Group workshops", "Mentorship sessions"],
  },
  {
    icon: Music,
    title: "Music Training",
    desc: "Discover the artist in you. Vocal lessons, instruments, theory and performance coaching for every age and skill level.",
    points: ["Vocal & instrumental", "Beginner to advanced", "Studio practice", "Live performance prep"],
    secondaryIcon: Dumbbell,
  },
  {
    icon: Dumbbell,
    title: "Sport Training",
    desc: "Train smart. Play stronger. Personalized fitness and sport programs guided by experienced coaches.",
    points: ["Fitness & conditioning", "Football & athletics", "Youth programs", "Team coaching"],
  },
  {
    icon: Sparkles,
    title: "General Cleaning",
    desc: "Sparkling spaces — homes, offices and venues. Reliable, eco-conscious cleaning crews on demand.",
    points: ["Homes & apartments", "Offices & shops", "Post-event cleanup", "Deep cleaning"],
  },
  {
    icon: Car,
    title: "Car Wash",
    desc: "Premium car wash that treats your vehicle like new. Interior, exterior and detailing — done right.",
    points: ["Exterior wash & wax", "Interior detailing", "Engine cleaning", "Pickup & drop available"],
  },
  {
    icon: Users,
    title: "Custom Packages",
    desc: "Need a combination of our services? We design custom packages for schools, companies and communities.",
    points: ["Corporate plans", "School programs", "Community events", "Long-term contracts"],
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="container mx-auto px-6 pt-20 pb-12 text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Our Services</div>
        <h1 className="font-display text-5xl md:text-6xl font-bold">What we <span className="text-gradient-gold">deliver</span></h1>
        <p className="text-muted-foreground mt-5 max-w-2xl mx-auto">
          From coaching minds to cleaning cars — every service is delivered with creativity, discipline and care.
        </p>
      </section>

      <section className="container mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((s) => (
            <div key={s.title} className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-smooth shadow-luxe/30">
              <div className="flex items-start gap-5">
                <div className="h-14 w-14 shrink-0 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
                  <s.icon className="h-7 w-7 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold">{s.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{s.desc}</p>
                  <ul className="mt-4 grid grid-cols-2 gap-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />{p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/contact" className="inline-flex px-7 py-3.5 rounded-full bg-gradient-gold text-accent-foreground font-semibold shadow-gold hover:scale-105 transition-smooth">
            Request a Service
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
