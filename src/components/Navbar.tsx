import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-heading font-bold text-xl text-primary-foreground">
          ADEM <span className="text-accent">Plumbing</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium">
              {link.label}
            </a>
          ))}
          <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
            <Phone className="w-4 h-4 mr-1.5" />
            Call Now
          </Button>
        </div>

        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-6 py-3 text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="px-6 pt-2">
            <Button size="sm" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              <Phone className="w-4 h-4 mr-1.5" />
              Call Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
