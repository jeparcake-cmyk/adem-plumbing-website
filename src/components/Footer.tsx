const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-heading font-bold text-xl mb-3">
              ADEM <span className="text-accent">Plumbing</span>
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Trusted plumbing and heating specialists serving Nottingham and surrounding areas since 2015.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-bold mb-3">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Bathroom Design & Fitting</li>
              <li>Central Heating</li>
              <li>General Plumbing</li>
              <li>Emergency Repairs</li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading font-bold mb-3">Areas Covered</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Nottingham</li>
              <li>Long Eaton (NG10)</li>
              <li>Derby (DE postcodes)</li>
              <li>Surrounding areas</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} ADEM Plumbing and Heating. All rights reserved.</p>
          <a
            href="https://www.checkatrade.com/trades/ademplumbingandheating"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            View us on Checkatrade
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
