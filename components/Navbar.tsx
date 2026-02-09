
import React from 'react';
import Logo from './Logo';

interface NavbarProps {
  onHomeClick: () => void;
  onBusinessMethodClick: () => void;
  onWhySaasClick: () => void;
  onSystemSelectionClick: () => void;
  onAboutClick: () => void;
  onContactClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHomeClick, onBusinessMethodClick, onWhySaasClick, onSystemSelectionClick, onAboutClick, onContactClick }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-100 bg-white/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button onClick={onHomeClick} className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <Logo className="w-9 h-9" />
          <span className="font-bold text-xl tracking-tight text-slate-900">Flowline<span className="text-emerald-600"> Consulting</span></span>
        </button>
        
        <div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-slate-500">
          <button onClick={onHomeClick} className="hover:text-slate-900 transition-colors">Početna</button>
          <button onClick={onAboutClick} className="hover:text-slate-900 transition-colors">O kompaniji</button>
          <button onClick={onWhySaasClick} className="hover:text-slate-900 transition-colors">Zašto SaaS</button>
          <button onClick={onSystemSelectionClick} className="hover:text-slate-900 transition-colors">Izbor sistema</button>
          <button onClick={onBusinessMethodClick} className="hover:text-slate-900 transition-colors">Način poslovanja</button>
        </div>

        <div>
          <button 
            onClick={onContactClick}
            className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-emerald-600 transition-all transform hover:scale-105 shadow-md shadow-slate-200"
          >
            Kontakt
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
