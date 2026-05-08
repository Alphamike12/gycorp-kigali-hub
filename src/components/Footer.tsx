import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/gy-corp-logo.jpg";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/40 mt-24">
      <div className="container mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="GY Corp" className="h-12 w-12 rounded-full object-cover ring-2 ring-accent/40" />
            <div>
              <div className="font-display text-xl font-bold text-gradient-gold">GY Corp</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Building Value · Creating Future</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-md">
            A creative Rwandan company empowering people through coaching, sport &amp; music training, and trusted cleaning services.
          </p>
        </div>
        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-accent mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-accent transition-smooth">Home</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-smooth">Services</Link></li>
            <li><Link to="/about" className="hover:text-accent transition-smooth">About</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-smooth">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-accent mb-4">Reach Us</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />Kigali — Kicukiro</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 text-accent shrink-0 mt-0.5" />+250 791 909 208</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 text-accent shrink-0 mt-0.5" />+250 793 931 049</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 text-accent shrink-0 mt-0.5" />nielgedeon@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} GY Corp. All rights reserved.
      </div>
    </footer>
  );
}
