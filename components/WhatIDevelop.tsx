
import React from 'react';

const services = [
  { name: "Organizacija timova i sektora", icon: "🏢" },
  { name: "Sistemi za upravljanje radnim tokom", icon: "🔄" },
  { name: "Administrativni paneli za menadžment", icon: "📊" },
  { name: "Automatizacija internih procesa", icon: "⚙️" },
  { name: "CRM sa workflow hijerarhijom", icon: "📈" }
];

const WhatIDevelop: React.FC = () => {
  return (
    <section id="sta-razvijam" className="py-24 border-t border-slate-100">
      <div className="text-center mb-20 reveal">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Digitalna struktura za vaš biznis</h2>
        <p className="max-w-3xl mx-auto text-slate-500 text-lg">
          Razvijam SaaS rešenja koja eliminišu uska grla u poslovanju. Od definisanja uloga u timu do potpune automatizacije puta jednog zadatka kroz sve sektore.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <div key={i} className={`reveal delay-${(i % 3) * 100} bg-white border border-slate-100 rounded-2xl p-8 hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/5 transition-all group`}>
            <div className="text-3xl mb-4 group-hover:scale-125 transition-transform duration-500 origin-left">{service.icon}</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{service.name}</h3>
            <div className="w-12 h-1 bg-emerald-100 rounded-full group-hover:w-full group-hover:bg-emerald-500 transition-all duration-500"></div>
          </div>
        ))}
        <div className="reveal delay-300 md:col-span-1 bg-gradient-to-br from-emerald-50 to-slate-50 rounded-2xl p-8 flex flex-col justify-between border border-emerald-100/50">
            <p className="text-slate-800 font-bold text-lg">Vaši sektori zaslužuju bolju komunikaciju.</p>
            <button className="text-sm font-bold text-emerald-600 flex items-center space-x-2 mt-4 hover:translate-x-2 transition-transform">
                <span>Zakaži demonstraciju</span>
                <span>→</span>
            </button>
        </div>
      </div>
    </section>
  );
};

export default WhatIDevelop;
