import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import logo from "@/assets/gy-corp-logo.jpg";
import { Target, Heart, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — GY Corp" },
      { name: "description", content: "GY Corp is a creative Rwandan company offering coaching, sport & music training, cleaning and car wash services." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: "Purpose", desc: "We exist to add real value to every person and space we touch." },
  { icon: Heart, title: "Passion", desc: "Whether it's coaching, music or cleaning — we do it with heart." },
  { icon: Sparkles, title: "Excellence", desc: "Creative, detailed and dependable. Always." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="container mx-auto px-6 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-gold blur-3xl opacity-20 rounded-full" />
            <img src={logo} alt="GY Corp logo" className="relative h-80 w-80 md:h-[420px] md:w-[420px] object-cover rounded-3xl ring-2 ring-accent/30 shadow-luxe" />
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div className="text-xs uppercase tracking-[0.3em] text-accent">About Us</div>
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight">
              We are <span className="text-gradient-gold">GY Corp</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Born in Kigali and rooted in Kicukiro, GY Corp is a creative company built on a simple belief:
              every person deserves the chance to grow, and every space deserves to shine.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We bring together three powerful pillars under one trusted brand —
              <span className="text-foreground font-medium"> coaching programs</span> that shape minds,
              <span className="text-foreground font-medium"> sport &amp; music training</span> that develop talent,
              and <span className="text-foreground font-medium"> general cleaning &amp; car wash</span> services that
              keep homes, offices and vehicles in top shape.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our motto says it all: <span className="text-accent font-semibold">Building Value. Creating Future.</span>
              Every coaching session, every training drill, every clean we deliver is a small step toward
              a better tomorrow for our clients and our community.
            </p>
            <Link to="/contact" className="inline-flex px-7 py-3.5 rounded-full bg-gradient-gold text-accent-foreground font-semibold shadow-gold hover:scale-105 transition-smooth">
              Work With Us
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Our Values</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">What drives <span className="text-gradient-gold">us</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-smooth text-center">
              <div className="h-14 w-14 mx-auto rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold mb-5">
                <v.icon className="h-7 w-7 text-accent-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold">{v.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
