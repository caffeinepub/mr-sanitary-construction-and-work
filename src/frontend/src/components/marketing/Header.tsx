import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'Services', id: 'services' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background/98 backdrop-blur-md shadow-lg border-b border-border/50' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 group"
            aria-label="MR Sanitary Construction and Work Home"
          >
            <img
              src="/assets/generated/mr-sanitary-construction-and-work-logo.dim_512x512.png"
              alt="MR Sanitary Construction and Work Logo"
              className="h-12 w-12 lg:h-14 lg:w-14 object-contain transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
            />
            <span className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-foreground tracking-wide">
              MR SANITARY CONSTRUCTION AND WORK
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-foreground/80 hover:text-primary font-semibold transition-all duration-300 relative group text-base"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-primary-foreground px-7 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Get Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 text-foreground hover:text-primary transition-all duration-300 hover:bg-primary/10 rounded-lg"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-border/50 animate-slide-down">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-foreground/80 hover:text-primary font-semibold transition-all duration-300 text-left py-3 px-4 rounded-lg hover:bg-primary/10"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-primary text-primary-foreground px-6 py-4 rounded-lg font-bold hover:bg-primary/90 transition-all duration-300 shadow-lg text-center mt-2"
              >
                Get Quote
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
