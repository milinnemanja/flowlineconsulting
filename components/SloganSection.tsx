
import React from 'react';

const SloganSection: React.FC = () => {
  return (
    <section className="py-20 md:py-48 border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal text-center">
          <h2 
            className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-tight md:leading-none text-slate-900"
            style={{ fontFamily: "'Zalando Sans Expanded', sans-serif" }}
          >
            <span className="block mb-2 md:mb-4">DESIGNED <span className="text-emerald-600">FOR</span> SCALE.</span>
            <span className="block text-slate-200">BUILT <span className="text-slate-900">FOR</span> GROWTH.</span>
          </h2>
          <div className="mt-8 md:mt-12 flex items-center justify-center space-x-3 md:space-x-4">
            <div className="h-px w-8 md:w-12 bg-emerald-500"></div>
            <p className="text-slate-400 font-mono text-[10px] md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em]">Flowline Consulting Philosophy</p>
            <div className="h-px w-8 md:w-12 bg-emerald-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SloganSection;
