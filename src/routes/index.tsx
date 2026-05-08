import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import logo from "@/assets/gy-corp-logo.jpg";
import { GraduationCap, Music, Sparkles, ArrowRight, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GY Corp — Building Value. Creating Future." },
      { name: "description", content: "Creative coaching, sport & music training, and premium cleaning services in Kigali." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: GraduationCap, title: "Coaching Program", desc: "Personal growth and life coaching designed to unlock potential and shape leaders.", tone: "from-accent/30 to-transparent" },
  { icon: Music, title: "Sport & Music Training", desc: "Train with passion. Play with purpose. Programs for every age and level.", tone: "from-primary/40 to-transparent" },
  { icon: Sparkles, title: "Cleaning & Car Wash", desc: "General cleaning and professional car wash — sparkling results, every time.", tone: "from-gold/30 to-transparent" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        </div>

        <div className="container mx-auto px-6 py-24 md:py-32 grid lg:grid-cols-2 gap-12 items-center relative">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-xs uppercase tracking-[0.25em] text-accent">
              <Star className="h-3 w-3" /> Kigali · Kicukiro
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05]">
              Building <span className="text-gradient-gold">Value.</span><br />
              Creating <span className="text-gradient-gold">Future.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              GY Corp is a creative Rwandan company empowering people through coaching,
              sport &amp; music training, and trusted cleaning services.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/services" className="group px-7 py-3.5 rounded-full bg-gradient-gold text-accent-foreground font-semibold shadow-gold hover:scale-105 transition-smooth inline-flex items-center gap-2">
                Explore Services <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-smooth" />
              </Link>
              <Link to="/contact" className="px-7 py-3.5 rounded-full border border-border hover:border-accent text-foreground hover:text-accent transition-smooth">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-gold blur-3xl opacity-20 rounded-full" />
            <div className="relative animate-float">
              <img src={logo} alt="GY Corp logo" className="relative h-80 w-80 md:h-96 md:w-96 object-cover rounded-full ring-4 ring-accent/30 shadow-luxe" />
              <div className="absolute inset-0 rounded-full animate-shimmer pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">What We Do</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Three pillars, <span className="text-gradient-gold">one mission</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group relative p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-smooth overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${s.tone} opacity-0 group-hover:opacity-100 transition-smooth`} />
              <div className="relative">
                <div className="h-14 w-14 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold mb-5">
                  <s.icon className="h-7 w-7 text-accent-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/services" className="text-accent hover:underline inline-flex items-center gap-2">See all services <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      {/* CTA band */}
      <section className="container mx-auto px-6 pb-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brown p-10 md:p-16 border border-border shadow-luxe">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="font-display text-3xl md:text-4xl font-bold">Ready to grow with <span className="text-gradient-gold">GY Corp</span>?</h3>
              <p className="text-muted-foreground mt-3 max-w-xl">Coaching, training or cleaning — let's build something valuable together.</p>
            </div>
            <div className="md:text-right">
              <Link to="/contact" className="inline-flex px-7 py-3.5 rounded-full bg-gradient-gold text-accent-foreground font-semibold shadow-gold hover:scale-105 transition-smooth">
                Start Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
