
import React from 'react';
import WorkflowVisual from './WorkflowVisual';

interface HeroProps {
  onDigitalizeClick: () => void;
  onConsultationClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onDigitalizeClick, onConsultationClick }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Decorative Gradient Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-emerald-500/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="reveal inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-emerald-100 bg-emerald-50 text-emerald-600 text-xs font-semibold mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Specijalista za workflow automatizaciju</span>
        </div>

        <h1 className="reveal delay-100 text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] text-slate-900">
          Organizujte timove i <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">optimizujte radne tokove</span>
        </h1>

        <p className="reveal delay-200 max-w-2xl mx-auto text-lg md:text-xl text-slate-500 mb-12 leading-relaxed">
          Pomažem kompanijama da povežu sektore i automatizuju procese kroz prilagođena SaaS rešenja. Transformišite haos u strukturiran i merljiv uspeh.
        </p>

        <div className="reveal delay-300 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-20">
          <button 
            onClick={onDigitalizeClick}
            className="w-full sm:w-auto bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-[0_10px_20px_rgba(16,185,129,0.2)]"
          >
            Digitalizuj radni tok
          </button>
          <button 
            onClick={onConsultationClick}
            className="w-full sm:w-auto bg-slate-50 border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-all"
          >
            Besplatne konsultacije
          </button>
        </div>

        <div className="reveal delay-400 relative max-w-5xl mx-auto rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm p-4 md:p-8 shadow-2xl shadow-emerald-900/5">
          <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
            <div className="flex items-center space-x-4">
               <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Workflow Manager v2.0</span>
            </div>
            <div className="text-xs text-emerald-500 font-mono font-bold">● Sektori sinhronizovani</div>
          </div>
          <WorkflowVisual />
        </div>
      </div>
    </section>
  );
};

export default Hero;
