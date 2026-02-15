import { Phone, Mail, MapPin } from 'lucide-react';
import SectionReveal from './SectionReveal';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Generate app identifier for UTM tracking
  const getAppIdentifier = () => {
    if (typeof window !== 'undefined') {
      return encodeURIComponent(window.location.hostname || 'unknown-app');
    }
    return 'unknown-app';
  };

  return (
    <footer id="contact" className="bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-6 py-16 lg:py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12 lg:mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <SectionReveal>
              <div className="flex items-center gap-3 mb-6 group cursor-default">
                <img
                  src="/assets/generated/mr-sanitary-construction-and-work-logo.dim_512x512.png"
                  alt="MR Sanitary Construction and Work Logo"
                  className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                />
                <span className="font-display text-2xl lg:text-3xl font-bold">MR SANITARY CONSTRUCTION AND WORK</span>
              </div>
              <p className="text-secondary-foreground/80 mb-4 leading-relaxed text-base lg:text-lg max-w-xl">
                Professional manpower services for construction, plumbing, maintenance, painting, repair, and restoration. Building excellence, one project at a time.
              </p>
              <p className="text-primary font-bold text-lg lg:text-xl">
                Company since 2013
              </p>
            </SectionReveal>
          </div>

          {/* Quick Links */}
          <SectionReveal delay={150}>
            <div>
              <h3 className="font-display text-2xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { label: 'Home', id: 'hero' },
                  { label: 'Services', id: 'services' },
                  { label: 'About', id: 'about' },
                  { label: 'Contact', id: 'contact' }
                ].map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-secondary-foreground/80 hover:text-primary transition-all duration-300 font-medium text-base hover:translate-x-2 inline-block"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>

          {/* Contact Info */}
          <SectionReveal delay={300}>
            <div>
              <h3 className="font-display text-2xl font-bold mb-6">Contact</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4 group cursor-default">
                  <Phone className="text-primary flex-shrink-0 mt-1 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" size={20} />
                  <div>
                    <div className="font-bold text-sm mb-1.5 text-secondary-foreground/90">Mobile</div>
                    <div className="text-secondary-foreground/80 font-medium">0504544520</div>
                  </div>
                </li>
                <li className="flex items-start gap-4 group cursor-default">
                  <Phone className="text-primary flex-shrink-0 mt-1 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" size={20} />
                  <div>
                    <div className="font-bold text-sm mb-1.5 text-secondary-foreground/90">Landline</div>
                    <div className="text-secondary-foreground/80 font-medium">+971 6 553 1326</div>
                  </div>
                </li>
                <li className="flex items-start gap-4 group cursor-default">
                  <Mail className="text-primary flex-shrink-0 mt-1 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" size={20} />
                  <div>
                    <div className="font-bold text-sm mb-1.5 text-secondary-foreground/90">Email</div>
                    <div className="text-secondary-foreground/80 font-medium">rajrosh96@gmail.com</div>
                  </div>
                </li>
                <li className="flex items-start gap-4 group cursor-default">
                  <MapPin className="text-primary flex-shrink-0 mt-1 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" size={20} />
                  <div>
                    <div className="font-bold text-sm mb-1.5 text-secondary-foreground/90">Address</div>
                    <div className="text-secondary-foreground/80 font-medium">
                      204 Al Ghuwair center<br />
                      Al Ghuwair market rolla<br />
                      Sharjah
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </SectionReveal>
        </div>

        {/* Bottom Bar */}
        <SectionReveal delay={450}>
          <div className="pt-8 lg:pt-10 border-t-2 border-secondary-foreground/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm lg:text-base text-secondary-foreground/70">
              <div className="font-medium">
                © {currentYear} MR Sanitary Construction and Work. All rights reserved.
              </div>
              <div className="flex items-center gap-2 font-medium">
                Built with <span className="text-primary text-lg">❤</span> using{' '}
                <a
                  href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${getAppIdentifier()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-bold transition-all duration-300 hover:scale-105 inline-block"
                >
                  caffeine.ai
                </a>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </footer>
  );
}
