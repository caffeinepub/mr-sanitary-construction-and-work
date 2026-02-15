import { ArrowRight } from 'lucide-react';
import SectionReveal from './SectionReveal';

export default function HeroSection() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Modern Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/mr-sanitary-hero-modern.dim_1600x900.png"
          alt="Modern construction site"
          className="w-full h-full object-cover scale-105 animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/97 via-background/85 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-6 relative z-10 py-20">
        <div className="max-w-4xl">
          <SectionReveal>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-foreground mb-6 lg:mb-8 leading-[0.95] tracking-tight">
              BUILDING YOUR
              <span className="block text-primary mt-2 animate-gradient-shift">VISION</span>
            </h1>
          </SectionReveal>
          
          <SectionReveal delay={150}>
            <p className="text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-10 lg:mb-12 leading-relaxed max-w-3xl font-medium">
              Professional manpower services for construction, plumbing, maintenance, painting, repair, and restoration. Your trusted partner for quality workmanship.
            </p>
          </SectionReveal>
          
          <SectionReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
              <button
                onClick={scrollToServices}
                className="group bg-primary text-primary-foreground px-8 lg:px-10 py-4 lg:py-5 rounded-xl font-bold text-lg lg:text-xl hover:bg-primary/90 transition-all duration-300 shadow-2xl hover:shadow-primary/30 hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
              >
                Explore Services
                <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={24} />
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-secondary text-secondary-foreground px-8 lg:px-10 py-4 lg:py-5 rounded-xl font-bold text-lg lg:text-xl hover:bg-secondary/90 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 border-2 border-secondary-foreground/10"
              >
                Contact Us
              </button>
            </div>
          </SectionReveal>

          {/* Stats */}
          <SectionReveal delay={450}>
            <div className="grid grid-cols-3 gap-6 lg:gap-12 mt-16 lg:mt-24 pt-12 lg:pt-16 border-t-2 border-border/30">
              <div className="text-center group cursor-default">
                <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2 lg:mb-3 transition-all duration-300 group-hover:scale-110">15+</div>
                <div className="text-sm md:text-base lg:text-lg text-foreground/70 font-semibold">Years Experience</div>
              </div>
              <div className="text-center group cursor-default">
                <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2 lg:mb-3 transition-all duration-300 group-hover:scale-110">500+</div>
                <div className="text-sm md:text-base lg:text-lg text-foreground/70 font-semibold">Projects Completed</div>
              </div>
              <div className="text-center group cursor-default">
                <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2 lg:mb-3 transition-all duration-300 group-hover:scale-110">100%</div>
                <div className="text-sm md:text-base lg:text-lg text-foreground/70 font-semibold">Client Satisfaction</div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
