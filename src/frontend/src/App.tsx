import Header from './components/marketing/Header';
import HeroSection from './components/marketing/HeroSection';
import ServicesSection from './components/marketing/ServicesSection';
import AboutSection from './components/marketing/AboutSection';
import Footer from './components/marketing/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
