import { Bath, Flame, Wrench, Droplets, ShowerHead, AlertTriangle } from "lucide-react";
import bathroomImg from "@/assets/bathroom-showcase.jpg";
import heatingImg from "@/assets/heating-service.jpg";

const services = [
  { icon: Bath, title: "Bathroom Design & Fitting", desc: "Complete bathroom transformations from design to installation." },
  { icon: Flame, title: "Central Heating", desc: "Boiler installations, repairs, and full heating system upgrades." },
  { icon: Wrench, title: "General Plumbing", desc: "From leaky taps to full pipe installations — no job too small." },
  { icon: Droplets, title: "Disabled Bathrooms", desc: "Accessible bathroom solutions with care and professionalism." },
  { icon: ShowerHead, title: "Shower Installation", desc: "Walk-in showers, enclosures, and wet room specialists." },
  { icon: AlertTriangle, title: "Emergency Repairs", desc: "Fast response for urgent plumbing and heating emergencies." },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-section-alt">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">What We Do</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg">
            Professional plumbing and heating services across Nottingham and the surrounding areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-border group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 rounded-xl overflow-hidden">
          <img src={bathroomImg} alt="Modern bathroom installation by ADEM Plumbing" loading="lazy" width={800} height={600} className="w-full h-72 object-cover rounded-xl" />
          <img src={heatingImg} alt="Central heating radiator installation" loading="lazy" width={800} height={600} className="w-full h-72 object-cover rounded-xl" />
        </div>
      </div>
    </section>
  );
};

export default Services;
