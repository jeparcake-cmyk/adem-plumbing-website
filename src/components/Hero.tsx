import heroImage from "@/assets/hero-plumber.jpg";
import { Phone, Star, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <img
        src={heroImage}
        alt="Professional plumber installing bathroom fixtures"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

      <div className="container relative z-10 py-20">
        <div className="max-w-2xl animate-fade-up">
          <div className="flex items-center gap-2 mb-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-primary-foreground/80 font-body text-sm">
              10/10 on Checkatrade · 178 reviews
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6">
            ADEM Plumbing<br />
            <span className="text-accent">&amp; Heating</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/85 font-body mb-8 max-w-lg">
            Nottingham's trusted plumbing and heating specialists. Quality workmanship, friendly service, and over 10 years of Checkatrade excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 py-6 font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 text-foreground hover:bg-primary-foreground/10 text-base px-8 py-6 font-semibold">
              Request a Quote
            </Button>
          </div>

          <div className="flex items-center gap-6 mt-10 text-primary-foreground/70 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Checkatrade Verified</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Member since 2015</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
