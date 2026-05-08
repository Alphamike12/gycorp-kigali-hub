import { Link } from "@tanstack/react-router";
import logo from "@/assets/gy-corp-logo.jpg";

export function Header() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="GY Corp logo" className="h-12 w-12 rounded-full object-cover ring-2 ring-accent/40 group-hover:ring-accent transition-smooth" />
          <div className="leading-tight">
            <div className="font-display text-xl font-bold text-gradient-gold">GY Corp</div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Building Value</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-muted-foreground hover:text-accent transition-smooth"
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-5 py-2 rounded-full bg-gradient-gold text-accent-foreground text-sm font-semibold shadow-gold hover:scale-105 transition-smooth"
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
