import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckCircle2, ArrowLeft, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { getServiceBySlug, services } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const s = getServiceBySlug(params.slug);
    const title = s ? `${s.title} — GY Corp` : "Service — GY Corp";
    const description = s?.desc ?? "GY Corp services in Kigali.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-6 py-24 text-center">
        <h1 className="font-display text-4xl font-bold">Service not found</h1>
        <p className="text-muted-foreground mt-3">The service you're looking for doesn't exist.</p>
        <Link to="/services" className="inline-flex mt-8 px-6 py-3 rounded-full bg-gradient-gold text-accent-foreground font-semibold shadow-gold">
          Back to Services
        </Link>
      </div>
      <Footer />
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-6 py-24 text-center">
        <h1 className="font-display text-4xl font-bold">Something went wrong</h1>
        <p className="text-muted-foreground mt-3">{error.message}</p>
      </div>
      <Footer />
    </div>
  ),
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();
  const Icon = service.icon;
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="container mx-auto px-6 pt-16 pb-12">
        <Link to="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-smooth">
          <ArrowLeft className="h-4 w-4" /> All services
        </Link>
        <div className="mt-8 flex flex-col md:flex-row md:items-center gap-6">
          <div className="h-20 w-20 shrink-0 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-gold">
            <Icon className="h-10 w-10 text-accent-foreground" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-accent mb-2">GY Corp Service</div>
            <h1 className="font-display text-4xl md:text-5xl font-bold">{service.title}</h1>
            <p className="text-muted-foreground mt-3 max-w-2xl">{service.desc}</p>
          </div>
        </div>
      </section>

      {/* Long description + benefits */}
      <section className="container mx-auto px-6 pb-16 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-5">
          <h2 className="font-display text-2xl font-bold">About this service</h2>
          {service.longDescription.map((p: string, i: number) => (
            <p key={i} className="text-foreground/80 leading-relaxed">{p}</p>
          ))}

          <div className="mt-10">
            <h2 className="font-display text-2xl font-bold mb-4">What's included</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {service.points.map((p: string) => (
                <li key={p} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="p-6 rounded-2xl bg-card border border-border">
            <h3 className="font-display text-xl font-bold">Key benefits</h3>
            <ul className="mt-4 space-y-3">
              {service.benefits.map((b: string) => (
                <li key={b} className="flex items-start gap-2 text-sm text-foreground/85">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" /> {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-gold text-accent-foreground shadow-gold">
            <h3 className="font-display text-xl font-bold">Pricing</h3>
            <p className="mt-2 text-sm opacity-90">{service.pricingNote}</p>
            <Link to="/contact" className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-background text-foreground font-semibold hover:scale-105 transition-smooth">
              Get a quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="p-6 rounded-2xl bg-card border border-border space-y-3 text-sm">
            <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> +250 791 909 208</div>
            <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> +250 793 931 049</div>
            <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> nielgedeon@gmail.com</div>
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> Kigali — Kicukiro</div>
          </div>
        </aside>
      </section>

      {/* Process */}
      <section className="container mx-auto px-6 pb-20">
        <h2 className="font-display text-3xl font-bold text-center">How it works</h2>
        <div className="mt-10 grid md:grid-cols-4 gap-5">
          {service.process.map((p: { step: string; detail: string }, i: number) => (
            <div key={p.step} className="p-6 rounded-2xl bg-card border border-border relative">
              <div className="text-5xl font-display font-bold text-gradient-gold opacity-80">{String(i + 1).padStart(2, "0")}</div>
              <h4 className="font-display text-lg font-bold mt-2">{p.step}</h4>
              <p className="text-sm text-muted-foreground mt-2">{p.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 pb-20">
        <div className="p-10 md:p-14 rounded-3xl bg-card border border-border text-center">
          <h3 className="font-display text-3xl md:text-4xl font-bold">Ready to get started with <span className="text-gradient-gold">{service.title}</span>?</h3>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Reach out today and let our team craft the perfect plan for you.</p>
          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="px-7 py-3.5 rounded-full bg-gradient-gold text-accent-foreground font-semibold shadow-gold hover:scale-105 transition-smooth">
              Contact us
            </Link>
            <Link to="/services" className="px-7 py-3.5 rounded-full border border-border font-semibold hover:border-accent/60 transition-smooth">
              Explore other services
            </Link>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="container mx-auto px-6 pb-24">
        <h3 className="font-display text-2xl font-bold mb-6">Other services</h3>
        <div className="grid md:grid-cols-3 gap-5">
          {others.map((s: any) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-smooth"
            >
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
                  <s.icon className="h-5 w-5 text-accent-foreground" />
                </div>
                <h4 className="font-display text-lg font-bold group-hover:text-accent transition-smooth">{s.title}</h4>
              </div>
              <p className="text-sm text-muted-foreground mt-3">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
