import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import logo from "@/assets/gy-corp-logo.jpg";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — GY Corp" },
      { name: "description", content: "Reach GY Corp in Kigali, Kicukiro. Call +250 791 909 208 or email nielgedeon@gmail.com." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name") as string;
    const message = data.get("message") as string;
    setSending(true);
    const body = encodeURIComponent(`From: ${name}\n\n${message}`);
    const subject = encodeURIComponent("New inquiry from GY Corp website");
    window.location.href = `mailto:nielgedeon@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      toast.success("Opening your email app — thanks for reaching out!");
    }, 600);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Toaster />

      <section className="container mx-auto px-6 pt-20 pb-12 text-center">
        <div className="text-xs uppercase tracking-[0.3em] text-accent mb-3">Contact</div>
        <h1 className="font-display text-5xl md:text-6xl font-bold">Let's <span className="text-gradient-gold">talk</span></h1>
        <p className="text-muted-foreground mt-5 max-w-xl mx-auto">
          Whether it's coaching, training or cleaning — we're ready to help. Reach out today.
        </p>
      </section>

      <section className="container mx-auto px-6 pb-24 grid lg:grid-cols-5 gap-8">
        {/* Info card */}
        <div className="lg:col-span-2 p-8 rounded-3xl bg-gradient-brown border border-border shadow-luxe relative overflow-hidden">
          <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative">
            <img src={logo} alt="GY Corp" className="h-20 w-20 rounded-full object-cover ring-2 ring-accent/40 shadow-gold" />
            <h2 className="font-display text-3xl font-bold mt-5">GY Corp</h2>
            <p className="text-sm text-muted-foreground mt-1">Building Value. Creating Future.</p>

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-accent/15 flex items-center justify-center"><MapPin className="h-5 w-5 text-accent" /></div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Location</div>
                  <div className="text-foreground">Kigali — Kicukiro, Rwanda</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-accent/15 flex items-center justify-center"><Phone className="h-5 w-5 text-accent" /></div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
                  <a href="tel:+250791909208" className="block text-foreground hover:text-accent transition-smooth">+250 791 909 208</a>
                  <a href="tel:+250793931049" className="block text-foreground hover:text-accent transition-smooth">+250 793 931 049</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-accent/15 flex items-center justify-center"><Mail className="h-5 w-5 text-accent" /></div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                  <a href="mailto:nielgedeon@gmail.com" className="text-foreground hover:text-accent transition-smooth break-all">nielgedeon@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="lg:col-span-3 p-8 rounded-3xl bg-card border border-border shadow-luxe space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Name</label>
              <input name="name" required placeholder="Your full name" className="mt-2 w-full rounded-lg bg-input/40 border border-border px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-smooth" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Email</label>
              <input name="email" type="email" required placeholder="you@email.com" className="mt-2 w-full rounded-lg bg-input/40 border border-border px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-smooth" />
            </div>
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Service of interest</label>
            <select name="service" className="mt-2 w-full rounded-lg bg-input/40 border border-border px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-smooth">
              <option>Coaching Program</option>
              <option>Sport Training</option>
              <option>Music Training</option>
              <option>General Cleaning</option>
              <option>Car Wash</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea name="message" required rows={5} placeholder="Tell us how we can help..." className="mt-2 w-full rounded-lg bg-input/40 border border-border px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-smooth resize-none" />
          </div>
          <button type="submit" disabled={sending} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-gold text-accent-foreground font-semibold shadow-gold hover:scale-105 transition-smooth disabled:opacity-60">
            {sending ? "Sending..." : <>Send Message <Send className="h-4 w-4" /></>}
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
}
