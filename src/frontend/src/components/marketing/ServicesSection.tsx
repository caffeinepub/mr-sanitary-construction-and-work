import SectionReveal from './SectionReveal';

export default function ServicesSection() {
  const services = [
    {
      title: 'Construction',
      description: 'Expert construction crews for residential and commercial projects. From foundations to finishing touches.',
      icon: '/assets/generated/icon-construction.dim_256x256.png'
    },
    {
      title: 'Plumbing',
      description: 'Licensed plumbers for installations, repairs, and maintenance. Quality work that lasts.',
      icon: '/assets/generated/icon-plumbing.dim_256x256.png'
    },
    {
      title: 'Maintenance',
      description: 'Comprehensive maintenance services to keep your property in top condition year-round.',
      icon: '/assets/generated/icon-maintenance.dim_256x256.png'
    },
    {
      title: 'Painting',
      description: 'Professional painters delivering flawless finishes for interior and exterior projects.',
      icon: '/assets/generated/icon-painting.dim_256x256.png'
    },
    {
      title: 'Repair',
      description: 'Fast and reliable repair services for all types of building issues and emergencies.',
      icon: '/assets/generated/icon-repair.dim_256x256.png'
    },
    {
      title: 'Restoration',
      description: 'Specialized restoration work bringing damaged properties back to their former glory.',
      icon: '/assets/generated/icon-restoration.dim_256x256.png'
    }
  ];

  return (
    <section id="services" className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Background with Texture */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/construction-texture-subtle.dim_1920x1080.png"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <SectionReveal>
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              OUR SERVICES
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-foreground/70 max-w-3xl mx-auto font-medium leading-relaxed">
              Comprehensive manpower solutions for all your construction and maintenance needs
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <SectionReveal key={service.title} delay={index * 100}>
              <div className="group bg-card/80 backdrop-blur-sm rounded-2xl p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-border/50 hover:border-primary/50 h-full hover:-translate-y-2 cursor-default">
                <div className="mb-6 flex justify-center">
                  <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-md">
                    <img
                      src={service.icon}
                      alt={`${service.title} icon`}
                      className="w-16 h-16 lg:w-20 lg:h-20 object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4 text-center group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-foreground/70 text-center leading-relaxed text-base lg:text-lg">
                  {service.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={600}>
          <div className="mt-16 lg:mt-20 text-center">
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-primary text-primary-foreground px-10 py-5 rounded-xl font-bold text-lg lg:text-xl hover:bg-primary/90 transition-all duration-300 shadow-2xl hover:shadow-primary/30 hover:scale-105 active:scale-95"
            >
              Request a Service
            </button>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
