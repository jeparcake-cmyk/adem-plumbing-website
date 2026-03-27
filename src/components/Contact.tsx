import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Request a Free Quote</h2>
          <p className="text-muted-foreground text-lg">
            Get in touch today for a no-obligation quote. We cover Nottingham and surrounding areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-foreground text-lg">Phone</h4>
                <p className="text-muted-foreground">Call us for a quick chat about your project</p>
                <a href="tel:00000000000" className="text-accent font-semibold hover:underline">
                  Get in touch
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-foreground text-lg">Location</h4>
                <p className="text-muted-foreground">Nottingham, Nottinghamshire</p>
                <p className="text-sm text-muted-foreground">Covering NG and DE postcodes</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-foreground text-lg">Availability</h4>
                <p className="text-muted-foreground">Mon–Fri: 8am–6pm</p>
                <p className="text-muted-foreground">Emergency call-outs available</p>
              </div>
            </div>
          </div>

          <form className="bg-card rounded-xl p-8 border border-border space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
              <input type="text" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
              <input type="tel" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Your phone number" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
              <textarea rows={4} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none" placeholder="Tell us about your project..." />
            </div>
            <Button className="w-full bg-accent text-foreground hover:bg-accent/90 py-6 text-base font-semibold">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
