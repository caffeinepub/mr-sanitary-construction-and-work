import { CheckCircle2 } from 'lucide-react';
import SectionReveal from './SectionReveal';

export default function AboutSection() {
  const values = [
    'Quality workmanship on every project',
    'Experienced and certified professionals',
    'Competitive pricing and transparent quotes',
    'On-time project completion',
    'Customer satisfaction guaranteed'
  ];

  return (
    <section id="about" className="py-24 md:py-32 lg:py-40 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <SectionReveal>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-50" />
              <img
                src="/assets/generated/mr-construction-hero.dim_1600x900.png"
                alt="MR Sanitary Construction and Work team"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover border-4 border-border/50 group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </SectionReveal>

          {/* Content */}
          <div>
            <SectionReveal>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 lg:mb-8">
                ABOUT US
              </h2>
            </SectionReveal>
            
            <SectionReveal delay={150}>
              <p className="text-lg md:text-xl text-foreground/80 mb-6 lg:mb-8 leading-relaxed">
                <strong className="text-foreground font-bold">MR Sanitary Construction and Work</strong>, established in 2013, has been delivering exceptional manpower services. Our team of skilled professionals is dedicated to bringing your construction and maintenance projects to life with precision and care.
              </p>
            </SectionReveal>
            
            <SectionReveal delay={300}>
              <p className="text-lg md:text-xl text-foreground/80 mb-8 lg:mb-10 leading-relaxed">
                From small repairs to large-scale construction projects, we provide reliable, high-quality services that exceed expectations. Our commitment to excellence has made us a trusted name in the industry.
              </p>
            </SectionReveal>

            <SectionReveal delay={450}>
              <div className="space-y-4 lg:space-y-5">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 group cursor-default"
                  >
                    <CheckCircle2 
                      className="text-primary flex-shrink-0 mt-1 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" 
                      size={28} 
                    />
                    <span className="text-base md:text-lg text-foreground/80 font-medium group-hover:text-foreground transition-colors duration-300">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
