
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import SloganSection from './components/SloganSection';
import Philosophy from './components/Philosophy';
import Footer from './components/Footer';
import DigitalizationPage from './components/DigitalizationPage';
import BusinessMethodPage from './components/BusinessMethodPage';
import WhySaasPage from './components/WhySaasPage';
import SystemSelectionPage from './components/SystemSelectionPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'digitalization' | 'business-method' | 'why-saas' | 'system-selection' | 'about' | 'contact'>('landing');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, [currentView]);

  const navigateTo = (view: 'landing' | 'digitalization' | 'business-method' | 'why-saas' | 'system-selection' | 'about' | 'contact') => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#10b981] selection:text-white">
      <Navbar 
        onHomeClick={() => navigateTo('landing')} 
        onBusinessMethodClick={() => navigateTo('business-method')}
        onWhySaasClick={() => navigateTo('why-saas')}
        onSystemSelectionClick={() => navigateTo('system-selection')}
        onAboutClick={() => navigateTo('about')}
        onContactClick={() => navigateTo('contact')}
      />
      <main>
        {currentView === 'landing' ? (
          <>
            <Hero 
              onDigitalizeClick={() => navigateTo('digitalization')} 
              onConsultationClick={() => navigateTo('contact')}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Benefits onWhySaasClick={() => navigateTo('why-saas')} />
              <SloganSection />
              <Philosophy />
            </div>
          </>
        ) : currentView === 'digitalization' ? (
          <DigitalizationPage />
        ) : currentView === 'business-method' ? (
          <BusinessMethodPage />
        ) : currentView === 'why-saas' ? (
          <WhySaasPage />
        ) : currentView === 'system-selection' ? (
          <SystemSelectionPage />
        ) : currentView === 'about' ? (
          <AboutPage />
        ) : (
          <ContactPage />
        )}
      </main>
      <Footer 
        onHomeClick={() => navigateTo('landing')} 
        onBusinessMethodClick={() => navigateTo('business-method')}
        onWhySaasClick={() => navigateTo('why-saas')}
        onSystemSelectionClick={() => navigateTo('system-selection')}
        onAboutClick={() => navigateTo('about')}
        onContactClick={() => navigateTo('contact')}
      />
    </div>
  );
};

export default App;
