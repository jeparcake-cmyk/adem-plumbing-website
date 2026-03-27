import { CheckCircle } from "lucide-react";

const highlights = [
  "Checkatrade member since 2015",
  "10/10 customer rating",
  "178+ verified reviews",
  "Nottingham & surrounding areas",
  "No job too big or small",
  "Friendly, reliable service",
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-section-alt">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">About Us</p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Trusted Plumbers in Nottingham
            </h2>
            <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
              ADEM Plumbing and Heating is a family-run business led by Ade and Jack, serving 
              Nottingham and the surrounding areas with quality plumbing and heating services.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We take pride in delivering exceptional workmanship, honest pricing, and a 
              personal touch that our customers love. With a perfect 10/10 Checkatrade rating, 
              our reputation speaks for itself.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary rounded-2xl p-10 text-primary-foreground">
            <h3 className="text-2xl font-heading font-bold mb-6">Why Choose ADEM?</h3>
            <div className="space-y-6">
              <div>
                <p className="text-3xl font-heading font-bold text-accent">10+</p>
                <p className="text-primary-foreground/80">Years on Checkatrade</p>
              </div>
              <div>
                <p className="text-3xl font-heading font-bold text-accent">178</p>
                <p className="text-primary-foreground/80">Verified Customer Reviews</p>
              </div>
              <div>
                <p className="text-3xl font-heading font-bold text-accent">10/10</p>
                <p className="text-primary-foreground/80">Average Rating</p>
              </div>
              <div>
                <p className="text-3xl font-heading font-bold text-accent">100%</p>
                <p className="text-primary-foreground/80">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
