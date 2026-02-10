
import React, { useState, useEffect } from 'react';
import Logo from './Logo';

interface NavbarProps {
  onHomeClick: () => void;
  onBusinessMethodClick: () => void;
  onWhySaasClick: () => void;
  onSystemSelectionClick: () => void;
  onAboutClick: () => void;
  onContactClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  onHomeClick, 
  onBusinessMethodClick, 
  onWhySaasClick, 
  onSystemSelectionClick, 
  onAboutClick, 
  onContactClick 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sync body scroll with menu state
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (callback: () => void) => {
    setIsMenuOpen(false);
    callback();
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[150] border-b border-slate-100 bg-white/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Logo Section */}
          <button 
            onClick={() => handleNavClick(onHomeClick)} 
            className="flex items-center hover:opacity-80 transition-opacity z-[160]"
          >
            <Logo className="text-xl md:text-2xl" />
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-slate-500">
            <button onClick={onHomeClick} className="hover:text-emerald-600 transition-colors">Početna</button>
            <button onClick={onAboutClick} className="hover:text-emerald-600 transition-colors">O kompaniji</button>
            <button onClick={onWhySaasClick} className="hover:text-emerald-600 transition-colors">Zašto SaaS</button>
            <button onClick={onSystemSelectionClick} className="hover:text-emerald-600 transition-colors">Izbor sistema</button>
            <button onClick={onBusinessMethodClick} className="hover:text-emerald-600 transition-colors">Način poslovanja</button>
          </div>

          {/* Right Section: Contact Button & Hamburger */}
          <div className="flex items-center space-x-4 z-[160]">
            <button 
              onClick={onContactClick}
              className="hidden sm:block bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-emerald-600 transition-all transform hover:scale-105 shadow-lg shadow-slate-200"
            >
              Kontakt
            </button>

            {/* Hamburger Button */}
            <button 
              onClick={toggleMenu}
              className="lg:hidden p-2 text-slate-900 focus:outline-none flex flex-col justify-center items-center w-10 h-10"
              aria-label={isMenuOpen ? "Zatvori meni" : "Otvori meni"}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-slate-900 transition-all duration-300 ease-in-out transform ${isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`}></span>
                <span className={`w-full h-0.5 bg-slate-900 transition-all duration-200 ease-in-out ${isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100'}`}></span>
                <span className={`w-full h-0.5 bg-slate-900 transition-all duration-300 ease-in-out transform ${isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-[140] lg:hidden transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-8 pb-12 overflow-y-auto">
          {/* Mobile Navigation Links */}
          <div className="flex-1 flex flex-col justify-center space-y-6">
            {[
              { label: 'Početna', action: onHomeClick },
              { label: 'O kompaniji', action: onAboutClick },
              { label: 'Zašto SaaS', action: onWhySaasClick },
              { label: 'Izbor sistema', action: onSystemSelectionClick },
              { label: 'Način poslovanja', action: onBusinessMethodClick }
            ].map((item, idx) => (
              <button 
                key={idx}
                onClick={() => handleNavClick(item.action)} 
                className="text-4xl xs:text-5xl font-black text-slate-900 hover:text-emerald-600 transition-all flex items-center group text-left w-full"
              >
                <span className="mr-4 text-emerald-100 group-hover:text-emerald-500 transition-colors text-2xl font-sans">0{idx + 1}.</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Bottom Mobile Section */}
          <div className="mt-12 pt-8 border-t border-slate-100 space-y-8 text-center sm:text-left">
            <button 
              onClick={() => handleNavClick(onContactClick)}
              className="w-full bg-emerald-600 text-white py-5 rounded-2xl text-xl font-bold shadow-xl shadow-emerald-100 active:scale-95 transition-transform"
            >
              Zakaži konsultacije
            </button>
            
            <div className="flex flex-col space-y-4">
              <div>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Email adresa</p>
                <p className="text-slate-900 font-bold text-base">nemanjamilin.contact@gmail.com</p>
              </div>
              <div>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">Telefon</p>
                <p className="text-slate-900 font-bold text-base">+381 63 84 70 818</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
