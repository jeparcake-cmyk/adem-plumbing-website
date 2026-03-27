import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Happy Customer",
    text: "The quality of their work is excellent, and we're so pleased with the final result. We would highly recommend Ade and Jack to anyone looking to have work done — a great experience all around!",
    rating: 10,
    job: "Complete Bathroom Renovation",
  },
  {
    name: "Jill & Dave",
    text: "Would definitely recommend Ade and Jack, very friendly, reliable and professional. We are very pleased with our new complete bathroom, excellent job.",
    rating: 10,
    job: "New Bathroom Suite",
  },
  {
    name: "Verified Reviewer",
    text: "We have just had a new bathroom suite installed. They worked very diligently and professionally, nothing was too much trouble. I would fully recommend this company.",
    rating: 10,
    job: "Bathroom Suite Installation",
  },
  {
    name: "Nigel S",
    text: "Excellent job done at a great price. Will use Adam again.",
    rating: 10,
    job: "Bathroom Fixes",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-2xl font-heading font-bold text-foreground">10/10</span>
            <span className="text-muted-foreground">from 178 reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="bg-card rounded-xl p-8 border border-border relative">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/15" />
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">{review.text}</p>
              <div className="border-t border-border pt-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.job}</p>
                </div>
                <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">
                  Checkatrade
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.checkatrade.com/trades/ademplumbingandheating"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline font-semibold"
          >
            View all 178 reviews on Checkatrade →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
