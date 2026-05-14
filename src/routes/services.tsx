import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { services } from "@/data/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — GY Corp" },
      { name: "description", content: "Coaching, sport & music training, general cleaning and car wash by GY Corp in Kigali." },
    ],
  }),
  component: ServicesPage,
});

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
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group block p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-smooth shadow-luxe/30"
            >
              <div className="flex items-start gap-5">
                <div className="h-14 w-14 shrink-0 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
                  <s.icon className="h-7 w-7 text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold group-hover:text-accent transition-smooth">{s.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{s.desc}</p>
                  <ul className="mt-4 grid grid-cols-2 gap-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />{p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    View details <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                  </div>
                </div>
              </div>
            </Link>
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
